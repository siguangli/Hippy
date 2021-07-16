package com.tencent.mtt.hippy.devsupport.inspector;

import android.text.TextUtils;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.devsupport.DebugWebSocketClient;
import com.tencent.mtt.hippy.devsupport.inspector.domain.CssDomain;
import com.tencent.mtt.hippy.devsupport.inspector.domain.DomDomain;
import com.tencent.mtt.hippy.devsupport.inspector.domain.InspectorDomain;
import com.tencent.mtt.hippy.devsupport.inspector.domain.PageDomain;
import com.tencent.mtt.hippy.devsupport.inspector.model.InspectEvent;
import com.tencent.mtt.hippy.utils.LogUtils;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class Inspector {

  private static final String TAG = "Inspector";

  private static Inspector sInspector;

  private Map<String, InspectorDomain> mDomainMap = new HashMap<>();
  private DebugWebSocketClient mDebugWebSocketClient;

  public static synchronized Inspector getInstance() {
    if (sInspector == null) {
      sInspector = new Inspector();
    }
    return sInspector;
  }

  private Inspector() {
    DomDomain domDomain = new DomDomain(this);
    CssDomain cssDomain = new CssDomain(this);
    PageDomain pageDomain = new PageDomain(this);
    mDomainMap.put(domDomain.getDomainName(), domDomain);
    mDomainMap.put(cssDomain.getDomainName(), cssDomain);
    mDomainMap.put(pageDomain.getDomainName(), pageDomain);
  }

  public Inspector setWebSocketClient(DebugWebSocketClient client) {
    mDebugWebSocketClient = client;
    return this;
  }

  public boolean dispatchReqFromFrontend(HippyEngineContext context, String msg) {
    if (TextUtils.isEmpty(msg)) {
      LogUtils.e(TAG, "dispatchReqFromFrontend, msg null");
      return false;
    }

    try {
      JSONObject msgObj = new JSONObject(msg);
      String methodParam = msgObj.optString("method");
      if (!TextUtils.isEmpty(methodParam)) {
        String[] methodParamArray = methodParam.split("\\.");
        if (methodParamArray.length > 1) {
          String domain = methodParamArray[0];
          if (!TextUtils.isEmpty(domain) && mDomainMap.containsKey(domain)) {
            InspectorDomain inspectorDomain = mDomainMap.get(domain);
            if (inspectorDomain != null) {
              String method = methodParamArray[1];
              int id = msgObj.optInt("id");
              JSONObject paramsObj = msgObj.optJSONObject("params");
              inspectorDomain.handleRequest(context, method, id, paramsObj);
              return true;
            }
          }
        }
      }
    } catch (Exception e) {
      LogUtils.e(TAG, "dispatchReqFromFrontend, exception:", e);
    }
    return false;
  }

  public void rspToFrontend(int id, String result) {
    if (mDebugWebSocketClient == null) {
      return;
    }
    try {
      JSONObject resultObj = new JSONObject();
      resultObj.put("id", id);
      resultObj.put("result", result);
      mDebugWebSocketClient.sendMessage(resultObj.toString());
    } catch (Exception e) {
      LogUtils.e(TAG, "rspToFrontEnd, exception:", e);
    }
  }

  public void sendEventToFrontend(InspectEvent event) {
    String eventJson = event.toJson();
    if (mDebugWebSocketClient == null || eventJson == null) {
      return;
    }
    mDebugWebSocketClient.sendMessage(eventJson);
  }

}
