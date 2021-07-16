package com.tencent.mtt.hippy.devsupport.inspector.domain;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.devsupport.inspector.Inspector;
import org.json.JSONObject;

public class CssDomain extends InspectorDomain {

  private static final String TAG = "CssDomain";

  private static final String METHOD_GET_MATCHED_STYLES_FOR_NODE = "getMatchedStylesForNode";
  private static final String METHOD_GET_COMPUTED_STYLE_FOR_NODE = "getComputedStyleForNode";
  private static final String METHOD_GET_INLINE_STYLES_FOR_NODE = "getInlineStylesForNode";
  private static final String METHOD_SET_STYLE_TEXTS = "setStyleTexts";

  public CssDomain(Inspector inspector) {
    super(inspector);
  }

  @Override public String getDomainName() {
    return "CSS";
  }

  @Override
  public void handleRequest(HippyEngineContext context, String method, int id, JSONObject paramsObj) {
    switch (method) {
      case METHOD_GET_MATCHED_STYLES_FOR_NODE:
        break;
      case METHOD_GET_COMPUTED_STYLE_FOR_NODE:
        break;
      case METHOD_GET_INLINE_STYLES_FOR_NODE:
        break;
      case METHOD_SET_STYLE_TEXTS:
        break;
      default:
        break;
    }
  }

}
