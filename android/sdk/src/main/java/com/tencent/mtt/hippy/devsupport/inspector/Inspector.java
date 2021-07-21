package com.tencent.mtt.hippy.devsupport.inspector;

import android.text.TextUtils;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.devsupport.DebugWebSocketClient;
import com.tencent.mtt.hippy.devsupport.inspector.domain.CssDomain;
import com.tencent.mtt.hippy.devsupport.inspector.domain.DomDomain;
import com.tencent.mtt.hippy.devsupport.inspector.domain.InspectorDomain;
import com.tencent.mtt.hippy.devsupport.inspector.domain.PageDomain;
import com.tencent.mtt.hippy.devsupport.inspector.model.InspectEvent;
import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.utils.LogUtils;

import org.json.JSONArray;
import org.json.JSONObject;

import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;

public class Inspector {

  private static final String TAG = "Inspector";

  private static Inspector sInspector;

  private Map<String, InspectorDomain> mDomainMap = new HashMap<>();
  private DebugWebSocketClient mDebugWebSocketClient;
  private WeakReference<HippyEngineContext> mContextRef;

  public static synchronized Inspector getInstance(HippyEngineContext context) {
    if (sInspector == null) {
      sInspector = new Inspector(context);
    }
    return sInspector;
  }

  private Inspector(HippyEngineContext context) {
    DomDomain domDomain = new DomDomain(this);
    CssDomain cssDomain = new CssDomain(this);
    PageDomain pageDomain = new PageDomain(this);
    mDomainMap.put(domDomain.getDomainName(), domDomain);
    mDomainMap.put(cssDomain.getDomainName(), cssDomain);
    mDomainMap.put(pageDomain.getDomainName(), pageDomain);
    DomManager domManager = context.getDomManager();
    if (domManager != null) {
      domManager.setOnBatchListener(domDomain);
    }
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

    LogUtils.d(TAG, "dispatchReqFromFrontend, msg=" + msg);

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
              inspectorDomain.handleRequestFromBackend(context, method, id, paramsObj);
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

  public void rspToFrontend(int id, JSONObject result) {
    if (mDebugWebSocketClient == null) {
      return;
    }
    try {
      JSONObject resultObj = new JSONObject();
      resultObj.put("id", id);
      resultObj.put("result", result != null ? result : new JSONObject());
      LogUtils.d(TAG, "rspToFrontend, msg=" + resultObj.toString());
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

    LogUtils.d(TAG, "sendEventToFrontend, eventJson=" + eventJson);
    mDebugWebSocketClient.sendMessage(eventJson);
  }

}
