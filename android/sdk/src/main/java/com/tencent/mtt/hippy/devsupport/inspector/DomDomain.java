package com.tencent.mtt.hippy.devsupport.inspector;

import org.json.JSONObject;

public class DomDomain extends InspectorDomain {

  private static final String TAG = "DomDomain";

  public DomDomain(Inspector inspector) {
    super(inspector);
    mDomainName = "DOM";
  }

  @Override
  public void handleRequest(String method, int id, JSONObject paramsObj) {

  }

}
