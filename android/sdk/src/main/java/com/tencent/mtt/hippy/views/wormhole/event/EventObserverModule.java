package com.tencent.mtt.hippy.views.wormhole.event;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.annotation.HippyMethod;
import com.tencent.mtt.hippy.annotation.HippyNativeModule;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.modules.nativemodules.HippyNativeModuleBase;
import com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager;

@HippyNativeModule(name = "EventObserver")
public class EventObserverModule extends HippyNativeModuleBase {

  private HippyEngineContext mContext;
  public EventObserverModule(HippyEngineContext context) {
    super(context);
    mContext = context;
  }

  @HippyMethod(name = "postWormholeMessage")
  public void postWormholeMessage(HippyMap data) {
    if (mContext != null && mContext.getGlobalConfigs() != null) {
      //指定虫洞的话交给虫洞去处理，否则丢弃
      if (HippyWormholeManager.WORMHOLE_NAME.equals(data.getString("toModule"))) {
        mContext.getGlobalConfigs().getEventObserverAdapter().handleMessage(data);
      }
    }
  }
}
