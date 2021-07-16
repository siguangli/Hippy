package com.tencent.mtt.hippy.devsupport.inspector;

import org.json.JSONObject;

import java.lang.ref.WeakReference;

public abstract class InspectorDomain {

  private WeakReference<Inspector> mInspectorRef;
  protected String mDomainName;

  public InspectorDomain(Inspector inspector) {
    mInspectorRef = new WeakReference<>(inspector);
  }

  public abstract void handleRequest(String method, int id, JSONObject paramsObj);

  public String getDomainName() {
    return mDomainName;
  }

  protected void rspToFrontend(int id, String data) {
    Inspector inspector = mInspectorRef.get();
    if (inspector != null) {
      inspector.rspToFrontend(id, data);
    }
  }

  protected void sendEventToFrontend(String data) {
    Inspector inspector = mInspectorRef.get();
    if (inspector != null) {
      inspector.sendEventToFrontend(data);
    }
  }

}
