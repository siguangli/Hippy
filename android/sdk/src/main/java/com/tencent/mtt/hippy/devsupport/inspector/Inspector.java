package com.tencent.mtt.hippy.devsupport.inspector;

import android.text.TextUtils;

import com.tencent.mtt.hippy.devsupport.DebugWebSocketClient;
import com.tencent.mtt.hippy.utils.LogUtils;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class Inspector {

  private static final String TAG = "Inspector";

  private static Inspector sMe;

  private Map<String, InspectorDomain> mDomainMap = new HashMap<>();
  private DebugWebSocketClient mDebugWebSocketClient;

  public static synchronized Inspector getInstance() {
    if (sMe == null) {
      sMe = new Inspector();
      sMe.init();
    }
    return sMe;
  }

  private Inspector() {
  }

  private void init() {
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

  public void dispatchReqFromFrontend(String msg) {
    if (TextUtils.isEmpty(msg)) {
      LogUtils.e(TAG, "dispatchReqFromFrontend, msg null");
      return;
    }

    try {
      JSONObject msgObj = new JSONObject(msg);
      String methodParam = msgObj.optString("method");
      if (!TextUtils.isEmpty(methodParam)) {
        String[] methodParamArray = methodParam.split("\\.");
        if (methodParamArray != null && methodParamArray.length > 1) {
          String domain = methodParamArray[0];
          if (!TextUtils.isEmpty(domain) && mDomainMap.containsKey(domain)) {
            InspectorDomain inspectorDomain = mDomainMap.get(domain);
            if (inspectorDomain != null) {
              String method = methodParamArray[1];
              int id = msgObj.optInt("id");
              JSONObject paramsObj = msgObj.optJSONObject("params");
              inspectorDomain.handleRequest(method, id, paramsObj);
            }
          }
        }
      }
    } catch (Exception e) {
      LogUtils.e(TAG, "dispatchReqFromFrontend, exception:", e);
    }
  }

  public void rspToFrontend(int id, String data) {
    if (mDebugWebSocketClient == null) return;
    try {
      JSONObject resultObj = new JSONObject();
      resultObj.put("id", id);
      resultObj.put("result", data);
      // TODO encode
      mDebugWebSocketClient.sendMessage(resultObj.toString());
    } catch (Exception e) {
      LogUtils.e(TAG, "rspToFrontEnd, exception:", e);
    }
  }

  public void sendEventToFrontend(String data) {
    if (mDebugWebSocketClient == null) return;
    // TODO encode
    mDebugWebSocketClient.sendMessage(data);
  }

}
