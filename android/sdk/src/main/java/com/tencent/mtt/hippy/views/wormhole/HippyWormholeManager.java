package com.tencent.mtt.hippy.views.wormhole;

import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;

import com.tencent.mtt.hippy.HippyEngine;
import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.common.HippyArray;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.DiffUtils;
import com.tencent.mtt.hippy.uimanager.HippyViewEvent;
import com.tencent.mtt.hippy.uimanager.RenderNode;
import com.tencent.mtt.hippy.utils.PixelUtil;
import com.tencent.mtt.hippy.utils.UIThreadUtils;

import org.json.JSONArray;
import java.util.ArrayList;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class HippyWormholeManager {
    public static final String WORMHOLE_TAG                       = "hippy_wormhole";

    public static final String WORMHOLE_TKD                       = "TKDWormhole";
    public static final String WORMHOLE_ROOT_TAG                  = "rootTag";
    public static final String WORMHOLE_PARAMS                    = "params";
    public static final String WORMHOLE_WORMHOLE_ID               = "wormholeId";
    public static final String WORMHOLE_WORMHOLE_TYPE             = "wormholeType";
    public static final String WORMHOLE_CLIENT_DATA_RECEIVED      = "Wormhole.dataReceived";
    public static final String WORMHOLE_CLIENT_ITEM_DELETED       = "Wormhole.itemDeleted";
    public static final String WORMHOLE_CLIENT_ROOT_DELETED       = "Wormhole.rootDeleted";
    public static final String WORMHOLE_SERVER_BATCH_COMPLETE     = "onServerBatchComplete";
    public static final String EVENT_DATARECEIVED                 = "onClientMessageReceived";
    public static final String FUNCTION_SENDEVENT_TO_WORMHOLEVIEW = "sendEventToWormholeView";
    public static final String FUNCTION_ONCUSTOMEVENT             = "onCustomEvent";

    private static final AtomicInteger mWormholeIdCounter = new AtomicInteger(1000);
    private static volatile HippyWormholeManager INSTANCE;
    private HippyEngine mWormholeEngine;
    private ConcurrentHashMap<String, Integer> mTkdWormholeNodeMap = new ConcurrentHashMap<String, Integer>();
    private ConcurrentHashMap<String, Integer> mWormholeNodeMap = new ConcurrentHashMap<String, Integer>();
    private ConcurrentHashMap<String, TKDWormholeView> mTkdWormholeViewMap = new ConcurrentHashMap<String, TKDWormholeView>();
    private ConcurrentHashMap<Integer, View> mWormholeViewMap = new ConcurrentHashMap<Integer, View>();
    private ConcurrentHashMap<Integer, HippySessionView> mSessionViewMap = new ConcurrentHashMap<Integer, HippySessionView>();

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

    public HippyEngineContext getEngineContext() {
        return mWormholeEngine != null ? mWormholeEngine.getEngineContext() : null;
    }

    private void sendDataReceivedMessageToServer(HippyMap bundle, int rootId) {
        HippyMap hippyMap = new HippyMap();
        hippyMap.pushInt(WORMHOLE_ROOT_TAG, rootId);
        HippyArray jsonArray = new HippyArray();
        jsonArray.pushMap(bundle);
        hippyMap.pushArray("items",jsonArray);
        JSONArray jsonArray1 = new JSONArray();
        jsonArray1.put(hippyMap);
        mWormholeEngine.sendEvent(WORMHOLE_CLIENT_DATA_RECEIVED, jsonArray1);
    }

    private void sendBatchCompleteMessageToClient(String wormholeId, View view) {
        int id = mWormholeNodeMap.get(wormholeId);
        HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
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

    private void doWormholeViewUpdateOp(HippyEngineContext engineContext, RenderNode fromNode, RenderNode toNode) {
        ArrayList<DiffUtils.PatchType> patchTypes = DiffUtils.diff(fromNode, toNode);
        DiffUtils.deleteViews(engineContext.getRenderManager().getControllerManager(), patchTypes);
        DiffUtils.replaceIds(engineContext.getRenderManager().getControllerManager(), patchTypes);
        DiffUtils.createView(engineContext.getRenderManager().getControllerManager(), patchTypes);
        DiffUtils.doPatch(engineContext.getRenderManager().getControllerManager(), patchTypes);
    }

    private View findWormholeView(String wormholeId) {
        if (mWormholeEngine == null || !mWormholeNodeMap.containsKey(wormholeId)) {
            return null;
        }

        HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
        if (engineContext == null) {
            return null;
        }

        int toId = mWormholeNodeMap.get(wormholeId);
        RenderNode toNode = engineContext.getRenderManager().getRenderNode(toId);
        if (toNode == null) {
            return null;
        }

        toNode.setLazy(false);

        Integer wormholeType = getWormholeType(toId, toNode.getProps());
        View view = mWormholeViewMap.get(wormholeType);
        if (view != null) {
            int fromId = view.getId();
            RenderNode fromNode = engineContext.getRenderManager().getRenderNode(fromId);
            if (fromNode != null) {
                doWormholeViewUpdateOp(engineContext, fromNode, toNode);
                mWormholeViewMap.remove(wormholeType);
                return view;
            }
        }

        view = toNode.createViewRecursive();
        toNode.updateViewRecursive();
        return view;
    }

    private Boolean addWormholeToParent(View wormholeView, View newParent) {
        if (newParent == null || !(newParent instanceof ViewGroup)) {
            return false;
        }

        ViewGroup oldParent = (ViewGroup)(wormholeView.getParent());
        if (oldParent != newParent) {
            if (oldParent != null) {
                oldParent.removeView(wormholeView);
            }
            ((ViewGroup)newParent).addView(wormholeView, 0);
            return true;
        }

        return false;
    }

    public boolean onCreateWormholeRenderNode(int id,  HippyMap props) {
        String wormholeId = getWormholeIdFromProps(props);
        HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
        if (engineContext == null || TextUtils.isEmpty(wormholeId)) {
            return true;
        }

        mWormholeNodeMap.put(wormholeId, id);

        View view = engineContext.getRenderManager().getControllerManager().findView(id);
        View parent = mTkdWormholeViewMap.get(wormholeId);
        if (parent != null && view == null) {
            return false;
        }

        return true;
    }

    public void onServerBatchComplete(HippyWormholeView wormholeView) {
        int id = wormholeView.getId();
        HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
        if (engineContext == null) {
            return;
        }

        RenderNode node = engineContext.getRenderManager().getRenderNode(id);
        String wormholeId = getWormholeIdFromProps(node.getProps());
        if (!TextUtils.isEmpty(wormholeId)) {
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

    public int getRootIdFromProps(HippyMap props) {
        if (props == null || !props.containsKey(WORMHOLE_ROOT_TAG)) {
            return -1;
        }

        int rootId = props.getInt(WORMHOLE_ROOT_TAG);
        return rootId;
    }

    public String getWormholeIdFromProps(HippyMap props) {
        HippyMap paramsMap = props.getMap(WORMHOLE_PARAMS);
        if (paramsMap == null) {
            return null;
        }

        String wormholeId = paramsMap.getString(WORMHOLE_WORMHOLE_ID);
        return wormholeId;
    }

    public void onSessionViewDestroy(HippySessionView sessionView) {
        Integer rootId = sessionView.getRootId();
        if (mSessionViewMap.containsKey(rootId)) {
            mSessionViewMap.remove(rootId);
        }
    }

    private int getWormholeType(int id, HippyMap props) {
        if (props == null) {
            HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
            if (engineContext != null) {
                RenderNode node = engineContext.getRenderManager().getRenderNode(id);
                if (node != null) {
                    props = node.getProps();
                }
            }
        }

        if (props != null) {
            HippyMap params = props.getMap(WORMHOLE_PARAMS);
            if (params == null) {
                return 0;
            }
            return params.getInt(WORMHOLE_WORMHOLE_TYPE);
        }

        return 0;
    }

    public void onTKDWormholeViewDestroy(TKDWormholeView tkdWormholeView) {
        String wormholeId = tkdWormholeView.getWormholeId();

        View child = tkdWormholeView.getChildAt(0);
        if (child != null && child instanceof HippyWormholeView) {
            tkdWormholeView.removeView(child);
            Integer wormholeType = getWormholeType(child.getId(), null);
            if (mWormholeViewMap.containsKey(wormholeType)) {
                Integer rootId = tkdWormholeView.getRootId();
                HippySessionView sessionView = mSessionViewMap.get(rootId);

                if (sessionView != null) {
                    HippyEngineContext engineContext = mWormholeEngine.getEngineContext();
                    if (engineContext != null) {
                        engineContext.getRenderManager().getControllerManager()
                                .deleteChild(sessionView.getId(), child.getId());
                    }
                }
            } else {
                mWormholeViewMap.put(wormholeType, child);
            }
        }

        if (!TextUtils.isEmpty(wormholeId)) {
            mTkdWormholeViewMap.remove(wormholeId);
        }
    }

    public void onCreateSessionView(HippySessionView sessionView, HippyMap props) {
        Integer rootId = getRootIdFromProps(props);

        if (rootId == -1) {
            return;
        }

        sessionView.setRootId(rootId);
        mSessionViewMap.put(rootId, sessionView);
    }

    public boolean onCreateTKDWormholeView(TKDWormholeView tkdWormholeView, String wormholeId) {
        if (TextUtils.isEmpty(wormholeId) || !mTkdWormholeNodeMap.containsKey(wormholeId)) {
            return false;
        }

        mTkdWormholeViewMap.put(wormholeId, tkdWormholeView);
        tkdWormholeView.setWormholeId(wormholeId);

        View wormholeView = findWormholeView(wormholeId);

        if (wormholeView != null) {
            int id = mTkdWormholeNodeMap.get(wormholeId);
            tkdWormholeView.setId(id);
            addWormholeToParent(wormholeView, tkdWormholeView);
            sendBatchCompleteMessageToClient(wormholeId, tkdWormholeView);
            return true;
        }
        return false;
    }

    public void onTkdWormholeNodeSetProps(final HippyMap paramsMap, final String wormholeId, final Integer id, final int rootId) {
        UIThreadUtils.runOnUiThread(new Runnable()
        {
            @Override
            public void run()
            {
                if (mWormholeEngine == null || TextUtils.isEmpty(wormholeId) || mTkdWormholeNodeMap.containsKey(wormholeId)) {
                    return;
                }

                mTkdWormholeNodeMap.put(wormholeId, id);
                sendDataReceivedMessageToServer(paramsMap, rootId);
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

    public void sendItemDeleteMessageToServer(HippyMap props, int rootId) {
        String wormholeId = getWormholeIdFromProps(props);
        if (TextUtils.isEmpty(wormholeId)) {
            return;
        }

        HippyMap hippyMap = new HippyMap();
        hippyMap.pushInt(WORMHOLE_ROOT_TAG, rootId);
        HippyArray jsonArray = new HippyArray();
        jsonArray.pushString(wormholeId);
        hippyMap.pushArray("items", jsonArray);
        mWormholeEngine.sendEvent(WORMHOLE_CLIENT_ITEM_DELETED, hippyMap);
    }

    public void sendRootDeleteMessageToServer(int rootId) {
        mWormholeViewMap.clear();
        HippyArray jsonArray = new HippyArray();
        jsonArray.pushInt(rootId);
        mWormholeEngine.sendEvent(WORMHOLE_CLIENT_ROOT_DELETED, jsonArray);
    }

}
