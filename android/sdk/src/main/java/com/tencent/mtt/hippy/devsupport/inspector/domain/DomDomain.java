package com.tencent.mtt.hippy.devsupport.inspector.domain;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.devsupport.inspector.Inspector;
import com.tencent.mtt.hippy.devsupport.inspector.model.DomModel;
import com.tencent.mtt.hippy.devsupport.inspector.model.InspectEvent;
import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.utils.LogUtils;

import org.json.JSONObject;

public class DomDomain extends InspectorDomain implements DomManager.BatchListener {

  private static final String TAG = "DomDomain";

  private static final String METHOD_GET_DOCUMENT = "getDocument";
  private static final String METHOD_GET_BOX_MODEL = "getBoxModel";
  private static final String METHOD_GET_NODE_FOR_LOCATION = "getNodeForLocation";
  private static final String METHOD_REMOVE_NODE = "removeNode";
  private static final String METHOD_SET_INSPECT_NODE = "setInspectedNode";

  private DomModel domModel;

  public DomDomain(Inspector inspector) {
    super(inspector);
    domModel = new DomModel();
  }

  @Override public String getDomainName() {
    return "DOM";
  }

  @Override
  public void handleRequest(HippyEngineContext context, String method, int id, JSONObject paramsObj) {
    switch (method) {
      case METHOD_GET_DOCUMENT:
        handleGetDocument(context, id);
        break;
      case METHOD_GET_BOX_MODEL:
        handleGetBoxModel(context, id, paramsObj);
        break;
      case METHOD_GET_NODE_FOR_LOCATION:
        handleGetNodeForLocation(context, id, paramsObj);
        break;
      case METHOD_REMOVE_NODE:
        break;
      case METHOD_SET_INSPECT_NODE:
        break;
      default:
        break;
    }
  }

  private void handleGetDocument(HippyEngineContext context, int id) {
    JSONObject document = domModel.getDocument(context);
    sendRspToFrontend(id, document);
  }

  private void handleGetBoxModel(HippyEngineContext context, int id, JSONObject paramsObj) {
    JSONObject boxModel = domModel.getBoxModel(context, paramsObj);
    sendRspToFrontend(id, boxModel);
  }

  private void handleGetNodeForLocation(HippyEngineContext context, int id, JSONObject paramsObj) {
    JSONObject nodeInfo = domModel.getNodeForLocation(context, paramsObj);
    sendRspToFrontend(id, nodeInfo);
  }

  @Override
  public void onBatch() {
    LogUtils.d(TAG, "onBatch");
    sendUpdateEvent();
  }

  private void sendUpdateEvent() {
    InspectEvent updateEvent = new InspectEvent("DOM.documentUpdated", new JSONObject());
    sendEventToFrontend(updateEvent);
  }
}
