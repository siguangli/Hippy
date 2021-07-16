package com.tencent.mtt.hippy.devsupport.inspector;

import org.json.JSONObject;

public class CssDomain extends InspectorDomain {

  private static final String TAG = "CssDomain";

  public CssDomain(Inspector inspector) {
    super(inspector);
    mDomainName = "CSS";
  }

  @Override
  public void handleRequest(String method, int id, JSONObject paramsObj) {

  }

}
