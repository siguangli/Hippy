package com.tencent.mtt.hippy.views.wormhole;


import android.content.Context;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;

import com.tencent.mtt.hippy.HippyEngine;
import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyInstanceContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.HippyViewEvent;
import com.tencent.mtt.hippy.uimanager.RenderManager;
import com.tencent.mtt.hippy.uimanager.RenderNode;
import com.tencent.mtt.hippy.utils.PixelUtil;

import com.tencent.mtt.hippy.uimanager.TKDWormholeRenderNode;
import com.tencent.mtt.hippy.uimanager.WormholeRenderNode;
import java.util.concurrent.atomic.AtomicInteger;
import org.json.JSONArray;

import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class HippyWormholeManager implements HippyWormholeProxy {
  public static final String WORMHOLE_TAG                       = "hippy_wormhole";

  public static final String WORMHOLE_PARAMS                    = "params";
  public static final String WORMHOLE_WORMHOLE_ID               = "wormholeId";
  public static final String WORMHOLE_CLIENT_DATA_RECEIVED      = "Wormhole.dataReceived";
  public static final String WORMHOLE_SERVER_BATCH_COMPLETE     = "onServerBatchComplete";
  public static final String EVENT_DATARECEIVED                 = "onClientMessageReceived";
  public static final String FUNCTION_SENDEVENT_TO_WORMHOLEVIEW = "sendEventToWormholeView";
  public static final String FUNCTION_ONCUSTOMEVENT             = "onCustomEvent";

  private static final AtomicInteger mWormholeIdCounter = new AtomicInteger(1000);
  private static volatile HippyWormholeManager INSTANCE;
  private HippyEngine mWormholeEngine;
  private HippyRootView mWormholeRootView;
  private ConcurrentHashMap<String, TKDWormholeRenderNode> mTkdWormholeNodeMap = new ConcurrentHashMap<String, TKDWormholeRenderNode>();
  private ConcurrentHashMap<String, WormholeRenderNode> mWormholeNodeMap = new ConcurrentHashMap<String, WormholeRenderNode>();
  //存储业务方引擎
  private ArrayList<HippyEngine> mClientEngineList = new ArrayList<>();

  private HippyWormholeManager() {

  }

  public static HippyWormholeManager getInstance() {
    if (INSTANCE == null) {
      synchronized (HippyWormholeManager.class) {
        if (INSTANCE == null) {
          INSTANCE = new HippyWormholeManager();
        }
      }
    }
    return INSTANCE;
  }

  public void setServerEngine(HippyEngine engine) {
    mWormholeEngine = engine;
  }

  public void setServerRootView(HippyRootView rootView) {
    mWormholeRootView = rootView;
  }

  private RenderNode getWormholeNode(HippyWormholeView wormholeView) {
    if (mWormholeRootView == null) {
      return null;
    }

    HippyEngineContext engineContext = mWormholeRootView.getEngineContext();
    if (engineContext != null) {
      RenderManager rm = engineContext.getRenderManager();
      RenderNode node = rm.getRenderNode(wormholeView.getId());
      return node;
    }

    return null;
  }

  private void sendDataReceivedMessageToServer(String wormholeId, HippyMap initProps) {
    HippyMap paramsMap = initProps.getMap(WORMHOLE_PARAMS);
    if (paramsMap != null) {
      paramsMap.pushString(WORMHOLE_WORMHOLE_ID, wormholeId);
      HippyMap bundle = paramsMap.copy();
      JSONArray jsonArray = new JSONArray();
      jsonArray.put(bundle);
      mWormholeEngine.sendEvent(WORMHOLE_CLIENT_DATA_RECEIVED, jsonArray);
    }
  }

  private void sendBatchCompleteMessageToClient(String wormholeId, View view) {
    WormholeRenderNode wormholeNode = mWormholeNodeMap.get(wormholeId);
    if (wormholeNode != null) {
      float width = wormholeNode.getWidth();
      float height = wormholeNode.getHeight();

      HippyMap layoutMeasurement = new HippyMap();
      layoutMeasurement.pushDouble("width", PixelUtil.px2dp(width));
      layoutMeasurement.pushDouble("height", PixelUtil.px2dp(height));
      HippyViewEvent event = new HippyViewEvent(WORMHOLE_SERVER_BATCH_COMPLETE);
      event.send(view, layoutMeasurement);
    }
  }

  private View getWormholeView(String wormholeId) {
    WormholeRenderNode node = mWormholeNodeMap.get(wormholeId);
    if (node == null) {
      return null;
    }

    HippyEngineContext engineContext = mWormholeRootView.getEngineContext();
    if (engineContext == null) {
      return null;
    }

    int id = node.getId();
    View view = engineContext.getRenderManager().getControllerManager().findView(id);
    if (view == null) {
      view = node.createViewRecursive();
    }
    return view;
  }

  private View getTKDWormholeView(String wormholeId) {
    if (TextUtils.isEmpty(wormholeId)) {
      return null;
    }

    TKDWormholeRenderNode node = mTkdWormholeNodeMap.get(wormholeId);
    if (node == null) {
      return null;
    }

    HippyRootView rootView = node.getRootView();
    HippyEngineContext engineContext = rootView.getEngineContext();
    if (engineContext == null) {
      return null;
    }

    int id = node.getId();
    View view = engineContext.getRenderManager().getControllerManager().findView(id);
    return view;
  }

  private void addWormholeToParent(View wormholeView, View newParent) {
    if (newParent == null || !(newParent instanceof ViewGroup)) {
      return;
    }

    ViewGroup oldParent = (ViewGroup)(wormholeView.getParent());
    if (oldParent != newParent) {
      if (oldParent != null) {
        oldParent.removeView(wormholeView);
      }
      ((ViewGroup)newParent).addView(wormholeView);
    }
  }

  public void onServerBatchComplete(HippyWormholeView wormholeView) {
    String wormholeId = wormholeView.getWormholeId();
    View parent = getTKDWormholeView(wormholeId);
    if (parent != null) {
      addWormholeToParent(wormholeView, parent);
      sendBatchCompleteMessageToClient(wormholeId, parent);
    }
  }

  public String generateWormholeId() {
    int id = mWormholeIdCounter.getAndIncrement();
    return "" + id;
  }

  public String getWormholeIdFromProps(HippyMap props) {
    HippyMap paramsMap = props.getMap(WORMHOLE_PARAMS);
    if (paramsMap == null) {
      return null;
    }

    String businessId = paramsMap.getString(WORMHOLE_WORMHOLE_ID);
    return businessId;
  }

  public void onCreateWormholeView(HippyWormholeView wormholeView, HippyMap initProps) {
    String wormholeId = getWormholeIdFromProps(initProps);
    if (TextUtils.isEmpty(wormholeId)) {
      return;
    }

    wormholeView.setWormholeId(wormholeId);
  }

  public void onCreateWormholeNode(HippyMap initProps, WormholeRenderNode node) {
    String wormholeId = getWormholeIdFromProps(initProps);
    if (TextUtils.isEmpty(wormholeId)) {
      return;
    }

    if (mWormholeNodeMap.containsKey(wormholeId)) {
      mWormholeNodeMap.remove(wormholeId);
    }

    node.setWormholeId(wormholeId);
    mWormholeNodeMap.put(wormholeId, node);
  }

  public void onTKDWormholeViewDestroy(TKDWormholeView tkdWormholeView) {

  }

  public void onCreateTKDWormholeView(TKDWormholeView tkdWormholeView, HippyMap initProps) {
    String wormholeId = getWormholeIdFromProps(initProps);
    if (TextUtils.isEmpty(wormholeId)) {
      return;
    }

    tkdWormholeView.setWormholeId(wormholeId);
    TKDWormholeRenderNode node = mTkdWormholeNodeMap.get(wormholeId);
    if (node != null) {
      tkdWormholeView.setId(node.getId());
    }

    View wormholeView = getWormholeView(wormholeId);
    if (wormholeView != null) {
      addWormholeToParent(wormholeView, tkdWormholeView);
      sendBatchCompleteMessageToClient(wormholeId, tkdWormholeView);
    }
  }

  public void onCreateTKDWormholeNode(HippyMap initProps, TKDWormholeRenderNode node) {
    if (mWormholeEngine == null) {
      return;
    }

    String wormholeId = node.getWormholeId();
    if (initProps == null || node == null || !TextUtils.isEmpty(wormholeId)) {
      return;
    }

    wormholeId = generateWormholeId();
    if (mTkdWormholeNodeMap.containsKey(wormholeId)) {
      mTkdWormholeNodeMap.remove(wormholeId);
    }

    node.setWormholeId(wormholeId);
    mTkdWormholeNodeMap.put(wormholeId, node);
    sendDataReceivedMessageToServer(wormholeId, initProps);
  }

  public void registerClientEngine(HippyEngine hippyEngine) {
    if (!mClientEngineList.contains(hippyEngine)) {
      mClientEngineList.add(hippyEngine);
    }
  }

  public void unRegisterClientEngine(HippyEngine hippyEngine) {
    if (!mClientEngineList.contains(hippyEngine)) {
      mClientEngineList.remove(hippyEngine);
    }
  }

  //如果是业务方收到了通知之后，应该要告知虫洞
  public void sendMessageToWormhole(HippyMap data) {
    if (mWormholeEngine != null && data != null) {
      mWormholeEngine.sendEvent(EVENT_DATARECEIVED, data);
    }
  }

  //如果是虫洞引擎收到了通知之后，应该要广播给所有的业务方
  public void sendMessageToAllClient(HippyMap data) {
    for (int i = 0; i < mClientEngineList.size(); i++) {
      if (mClientEngineList.get(i) != null) {
        mClientEngineList.get(i).sendEvent(EVENT_DATARECEIVED, data);
      }
    }
  }

  public void onWormholeDestroy(String id) {
    if (!TextUtils.isEmpty(id)) {

    }
  }
}
