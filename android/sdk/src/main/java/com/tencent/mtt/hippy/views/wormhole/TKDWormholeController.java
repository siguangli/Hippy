package com.tencent.mtt.hippy.views.wormhole;

import android.content.Context;
import android.text.TextUtils;
import android.view.View;

import android.view.ViewGroup;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.annotation.HippyController;
import com.tencent.mtt.hippy.common.HippyArray;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.ControllerManager;
import com.tencent.mtt.hippy.uimanager.HippyViewController;
import com.tencent.mtt.hippy.uimanager.RenderNode;
import java.util.concurrent.ConcurrentHashMap;

@HippyController(name = "TKDWormhole")
public class TKDWormholeController extends HippyViewController<TKDWormholeView> {
  private HippyWormholeProxy mWormholeProxy = HippyWormholeManager.getInstance();

  @Override
  protected View createViewImpl(final Context context) {
    return new TKDWormholeView(context);
  }

  @Override
  protected View createViewImpl(final Context context, HippyMap initProps) {
    TKDWormholeView wormholeView = new TKDWormholeView(context);
    mWormholeProxy.createWormholeView(initProps, wormholeView);
    return wormholeView;
  }

}
