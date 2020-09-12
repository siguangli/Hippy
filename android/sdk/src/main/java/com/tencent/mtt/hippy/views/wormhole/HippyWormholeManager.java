package com.tencent.mtt.hippy.views.wormhole;


import android.view.ViewGroup;
import com.tencent.mtt.hippy.HippyEngine;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.utils.LogUtils;
import org.json.JSONArray;

public class HippyWormholeManager implements HippyWormholeProxy {
    public static final String WORMHOLE_TAG          = "hippy_wormhole";

    public static final String WORMHOLE_PARAMS       = "params";
    public static final String WORMHOLE_BUSINESSID   = "businessId";
    public static final String WORMHOLE_TYPE         = "type";
    public static final String WORMHOLE_DATARECEIVED = "Wormhole.dataReceived";

    private static volatile HippyWormholeManager INSTANCE;
    private HippyEngine mWormholeEngine;

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

    public void setWormholeEngine(HippyEngine engine) {
        mWormholeEngine = engine;
    }

    private void sendWormholeDataToServer(HippyMap bundle) {
        JSONArray jsonArray = new JSONArray();
        jsonArray.put(bundle);
        mWormholeEngine.sendEvent(WORMHOLE_DATARECEIVED, jsonArray);
    }

    @Override
    public void createWormholeView(HippyMap initProps, ViewGroup parent) {
        if (mWormholeEngine == null) {
            return;
        }

        if (initProps == null || parent == null) {
            return;
        }

        HippyMap paramsMap = initProps.getMap(WORMHOLE_PARAMS);
        if (paramsMap == null) {
            return;
        }
        String businessId = paramsMap.getString(WORMHOLE_BUSINESSID);

        HippyMap bundle = paramsMap.copy();
        bundle.pushInt(WORMHOLE_TYPE, 1);
        sendWormholeDataToServer(bundle);
    }
}
