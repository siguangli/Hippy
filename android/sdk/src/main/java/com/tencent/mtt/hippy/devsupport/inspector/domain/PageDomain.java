package com.tencent.mtt.hippy.devsupport.inspector.domain;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.devsupport.inspector.Inspector;
import org.json.JSONObject;

public class PageDomain extends InspectorDomain {

  private static final String TAG = "PageDomain";

  private static final String METHOD_START_SCREEN_CAST = "startScreencast";
  private static final String METHOD_STOP_SCREEN_CAST = "stopScreencast";
  private static final String METHOD_SCREEN_FRAME_ACK = "screencastFrameAck";

  public PageDomain(Inspector inspector) {
    super(inspector);
  }

  @Override public String getDomainName() {
    return "Page";
  }

  @Override
  public void handleRequest(HippyEngineContext context, String method, int id, JSONObject paramsObj) {
    switch (method) {
      case METHOD_START_SCREEN_CAST:
        break;
      case METHOD_STOP_SCREEN_CAST:
        break;
      case METHOD_SCREEN_FRAME_ACK:
        break;
      default:
        break;
    }
  }

}
