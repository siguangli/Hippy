package com.tencent.mtt.hippy.devsupport.inspector;

import org.json.JSONObject;

public class PageDomain extends InspectorDomain {

  private static final String TAG = "PageDomain";

  private static final String METHOD_GETDOCUMENT          = "getDocument";
  private static final String METHOD_GETBOXMODEL          = "getBoxModel";
  private static final String METHOD_GETNODEFORLOCATION   = "getNodeForLocation";

  public PageDomain(Inspector inspector) {
    super(inspector);
    mDomainName = "Page";
  }

  @Override
  public void handleRequest(String method, int id, JSONObject paramsObj) {
    if (METHOD_GETDOCUMENT.equals(method)) {

    } else if (METHOD_GETBOXMODEL.equals(method)) {

    } else if (METHOD_GETNODEFORLOCATION.equals(method)) {

    }
  }

}
