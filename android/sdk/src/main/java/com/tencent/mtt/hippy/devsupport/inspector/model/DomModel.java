package com.tencent.mtt.hippy.devsupport.inspector.model;

import android.text.TextUtils;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.dom.node.DomNode;
import com.tencent.mtt.hippy.utils.LogUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class DomModel {

  private static final String TAG = "DomModel";

  private JSONObject getNode(HippyEngineContext context, int nodeId) {
    JSONArray childrenArray = new JSONArray();
    JSONObject result = null;
    DomManager domManager = context.getDomManager();
    if (domManager != null) {
      DomNode domNode = domManager.getNode(nodeId);
      if (domNode == null) return null;

      DomNode.DomDomainData domainData = domNode.getDomainData();
      // rootNode domainData为空
      if (domainData != null && !TextUtils.isEmpty(domainData.text)) {
        childrenArray.put(getTextNodeJson(domainData));
      }

      for (int i = 0, size = domNode.getChildCount(); i < size; i++) {
        DomNode childNode = domNode.getChildAt(i);
        childrenArray.put(getNode(context, childNode.getId()));
      }

      try {
        result = getNodeJson(domainData, NodeType.ELEMENT_NODE);
        if (result == null) {
          result = new JSONObject();
        }
        result.put("childNodeCount", childrenArray.length());
        result.put("children", childrenArray);
      } catch (Exception e) {
        LogUtils.e(TAG, "getNode, exception:", e);
      }
    }
    return result;
  }

  private JSONObject getTextNodeJson(DomNode.DomDomainData domainData) {
    JSONObject result = getNodeJson(domainData, NodeType.TEXT_NODE);
    try {
      result.put("childNodeCount", 0);
      result.put("children", new JSONArray());
    } catch (Exception e) {
      LogUtils.e(TAG, "getTextNodeJson, exception:", e);
    }
    return result;
  }

  private JSONObject getNodeJson(DomNode.DomDomainData domainData, int nodeType) {
    if (domainData == null) return null;
    JSONObject result = new JSONObject();
    try {
      result.put("nodeId", domainData.id);
      result.put("backendNodeId", 0);
      result.put("nodeType", nodeType);
      result.put("localName", domainData.tagName);
      result.put("nodeName", domainData.tagName);
      result.put("nodeValue", domainData.text);
      result.put("parentId", domainData.pid);
      result.put("attributes", getAttributeList(domainData.attributes));
    } catch (Exception e) {
      LogUtils.e(TAG, "getTextNodeJson, exception:", e);
    }
    return result;
  }

  private JSONArray getAttributeList(HippyMap attributes) {
    JSONArray attributeList = new JSONArray();
    try {
      for (Map.Entry<String, Object> entry : attributes.entrySet()) {
        String key = entry.getKey();
        Object value = entry.getValue();
        if (DomNode.PROP_STYLE.equals(key) && value instanceof HippyMap) {
          value = getInlineStyle((HippyMap) value);
        }
        if (value == null || (value instanceof String && TextUtils.isEmpty((String) value))) {
          continue;
        }
        attributeList.put(key);
        attributeList.put(value.toString());
      }
    } catch (Exception e) {
      LogUtils.e(TAG, "getAttributeList, exception:", e);
    }
    return attributeList;
  }

  private String getInlineStyle(HippyMap data) {
    StringBuilder resultBuilder = new StringBuilder();
    for (Map.Entry<String, Object> entry : data.entrySet()) {
      String key = entry.getKey();
      Object value = entry.getValue();
      if (value instanceof Number) {
        value = String.format("%.1f", ((Number) value).doubleValue());
      }
      resultBuilder.append(key).append(key).append(":").append(value).append(";");
    }
    resultBuilder.deleteCharAt(resultBuilder.length() - 1);
    return resultBuilder.toString();
  }

  public String getDocument(HippyEngineContext context) {
    try {
      JSONObject result = new JSONObject();
      JSONObject root = new JSONObject();
      int documentNodeId = -3;
      result.put("root", root);
      root.put("nodeId", documentNodeId);
      root.put("backendNodeId", documentNodeId);
      root.put("nodeType", 9);
      root.put("childNodeCount", 1);
      root.put("nodeName", "#document");
      root.put("baseURL", "");
      root.put("documentURL", "");
      DomManager domManager = context.getDomManager();
      if (domManager != null) {
        int rootId = domManager.getRootNodeId();
        JSONObject rootNode = getNode(context, rootId);
        if (rootNode != null) {
          JSONArray childrenArray = rootNode.optJSONArray("children");
          if (childrenArray != null) {
            root.put("children", childrenArray);
          }
        }
      }
      return result.toString();
    } catch (Exception e) {
      LogUtils.e(TAG, "getDocument, exception:", e);
    }
    return "{}";
  }

  /**
   *  https://dom.spec.whatwg.org/#dom-node-nodetype
   */
  public static class NodeType {
    public static final int ELEMENT_NODE = 1;
    public static final int ATTRIBUTE_NODE = 2;
    public static final int TEXT_NODE = 3;
    public static final int CDATA_SECTION_NODE = 4;
    public static final int PROCESSING_INSTRUCTION_NODE = 5;
    public static final int COMMENT_NODE = 6;
    public static final int DOCUMENT_NODE = 7;
    public static final int DOCUMENT_TYPE_NODE = 8;
    public static final int DOCUMENT_FRAGMENT_NODE = 9;
  }
}
