package com.tencent.mtt.hippy.views.wormhole;

import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;

import com.tencent.mtt.hippy.HippyEngine;
import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.HippyViewEvent;
import com.tencent.mtt.hippy.uimanager.RenderNode;
import com.tencent.mtt.hippy.utils.PixelUtil;
import com.tencent.mtt.hippy.utils.UIThreadUtils;
import java.util.concurrent.atomic.AtomicInteger;
import org.json.JSONArray;

import java.util.ArrayList;
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
  private HippyWormholeContainer mWormholeContainer;
  private ConcurrentHashMap<String, Integer> mTkdWormholeNodeMap = new ConcurrentHashMap<String, Integer>();
  private ConcurrentHashMap<String, Integer> mWormholeNodeMap = new ConcurrentHashMap<String, Integer>();
  private ConcurrentHashMap<String, TKDWormholeView> mTkdWormholeViewMap = new ConcurrentHashMap<String, TKDWormholeView>();

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

  public void setWormholeContainer(HippyWormholeContainer container) {
    mWormholeContainer = container;
  }

  private void sendDataReceivedMessageToServer(HippyMap bundle) {
    JSONArray jsonArray = new JSONArray();
    jsonArray.put(bundle);
    mWormholeEngine.sendEvent(WORMHOLE_CLIENT_DATA_RECEIVED, jsonArray);
  }

  private void sendBatchCompleteMessageToClient(String wormholeId, View view) {
    int id = mWormholeNodeMap.get(wormholeId);
    HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
    if (engineContext == null) {
      return;
    }

    RenderNode node = engineContext.getRenderManager().getRenderNode(id);
    if (node != null) {
      float width = node.getWidth();
      float height = node.getHeight();

      HippyMap layoutMeasurement = new HippyMap();
      layoutMeasurement.pushDouble("width", PixelUtil.px2dp(width));
      layoutMeasurement.pushDouble("height", PixelUtil.px2dp(height));
      HippyViewEvent event = new HippyViewEvent(WORMHOLE_SERVER_BATCH_COMPLETE);
      event.send(view, layoutMeasurement);
    }
  }

  private View findWormholeView(String wormholeId) {
    if (mWormholeEngine == null || !mWormholeNodeMap.containsKey(wormholeId)) {
      return null;
    }

    HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
    if (engineContext == null) {
      return null;
    }

    int id = mWormholeNodeMap.get(wormholeId);
    View view = engineContext.getRenderManager().getControllerManager().findView(id);
    if (view == null) {
      RenderNode node = engineContext.getRenderManager().getRenderNode(id);
      if (node != null) {
        view = node.createViewRecursive();
      }
    }
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
    if (mTkdWormholeViewMap.containsKey(wormholeId)) {
      View parent = mTkdWormholeViewMap.get(wormholeId);
      if (parent != null) {
        addWormholeToParent(wormholeView, parent);
        sendBatchCompleteMessageToClient(wormholeId, parent);
      }
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

    String wormholeId = paramsMap.getString(WORMHOLE_WORMHOLE_ID);
    return wormholeId;
  }

  public String onWormholeNodeSetProps(HippyMap initProps, Integer id) {
    String wormholeId = getWormholeIdFromProps(initProps);
    if (!TextUtils.isEmpty(wormholeId)) {
      mWormholeNodeMap.put(wormholeId, id);
    }
    return wormholeId;
  }

  public void onTKDWormholeViewDestroy(TKDWormholeView tkdWormholeView) {
    if(tkdWormholeView.getChildCount() > 0) {
      View child = tkdWormholeView.getChildAt(0);
      if (child instanceof HippyWormholeView) {
        tkdWormholeView.removeView(child);
        mWormholeContainer.addView(child);
        HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
        if (engineContext != null) {
          engineContext.getRenderManager().getControllerManager().deleteChild(mWormholeContainer.getId(), child.getId());
        }
      }
    }

    String wormholeId = tkdWormholeView.getWormholeId();
    if (!TextUtils.isEmpty(wormholeId)) {
      mTkdWormholeViewMap.remove(wormholeId);
    }
  }

  public void onCreateTKDWormholeView(TKDWormholeView tkdWormholeView, String wormholeId) {
    if (TextUtils.isEmpty(wormholeId) || !mTkdWormholeNodeMap.containsKey(wormholeId)) {
      return;
    }

    mTkdWormholeViewMap.put(wormholeId, tkdWormholeView);
    tkdWormholeView.setWormholeId(wormholeId);

    View wormholeView = findWormholeView(wormholeId);

    if (wormholeView != null) {
      int id = mTkdWormholeNodeMap.get(wormholeId);
      tkdWormholeView.setId(id);
      addWormholeToParent(wormholeView, tkdWormholeView);
      sendBatchCompleteMessageToClient(wormholeId, tkdWormholeView);
    }
  }

  public void onTkdWormholeNodeSetProps(final HippyMap paramsMap, final String wormholeId, final Integer id) {
    UIThreadUtils.runOnUiThread(new Runnable()
    {
      @Override
      public void run()
      {
        if (mWormholeEngine == null || TextUtils.isEmpty(wormholeId) || mTkdWormholeNodeMap.containsKey(wormholeId)) {
          return;
        }

        mTkdWormholeNodeMap.put(wormholeId, id);
        sendDataReceivedMessageToServer(paramsMap);
      }
    });
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

}
