package com.tencent.mtt.hippy.devsupport.inspector.model;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.utils.LogUtils;
import org.json.JSONArray;
import org.json.JSONObject;

public class DomModel {

  private static final String TAG = "DomModel";

  public JSONArray getNode(int nodeId) {
    JSONArray nodeArray = new JSONArray();
    return nodeArray;
  }

  public String getDocument(HippyEngineContext context) {
    try {
      JSONObject result = new JSONObject();
      JSONObject root = new JSONObject();
      int documentNodeId = -3;
      int rootId = context.getEngineId();
      result.put("root", root);
      root.put("nodeId", documentNodeId);
      root.put("backendNodeId", documentNodeId);
      root.put("nodeType", 9);
      root.put("childNodeCount", 1);
      JSONArray childNode = getNode(rootId);
      root.put("children", childNode);
      return result.toString();
    } catch (Exception e) {
      LogUtils.e(TAG, "getDocument, exception:", e);
    }
//    'root': {
//      'nodeId': documentNodeId,
//        'backendNodeId': documentNodeId,
//        'nodeType': 9,
//        'nodeName': '#document',
//        'childNodeCount': 1,
//        // 去除<root></root>根节点
//        'children': rootNode['children'],
//    },
    return "{}";
  }
}
