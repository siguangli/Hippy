package com.tencent.mtt.hippy.views.wormhole;

import android.content.Context;
import android.view.View;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.annotation.HippyController;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.ControllerManager;
import com.tencent.mtt.hippy.uimanager.HippyViewController;
import com.tencent.mtt.hippy.uimanager.RenderNode;
import com.tencent.mtt.hippy.uimanager.WormholeRenderNode;

@HippyController(name = "Wormhole")
public class HippyWormholeController extends HippyViewController<HippyWormholeView> {
  @Override
  protected View createViewImpl(Context context) {
    return new HippyWormholeView(context);
  }

  @Override
  protected View createViewImpl(final Context context, HippyMap iniProps) {
    HippyWormholeView wormholeView = new HippyWormholeView(context);
    HippyWormholeManager.getInstance().onCreateWormholeView(wormholeView, iniProps);
    return wormholeView;
  }

  @Override
  public RenderNode createRenderNode(int id, HippyMap props, String className,
          HippyRootView hippyRootView, ControllerManager controllerManager, boolean lazy) {
    WormholeRenderNode node = new WormholeRenderNode(id, props, className, hippyRootView, controllerManager, lazy);
    HippyWormholeManager.getInstance().onCreateWormholeNode(props, node);
    return node;
  }

  @Override
  public void onBatchComplete(HippyWormholeView view) {
    super.onBatchComplete(view);
    if (view != null) {
      HippyWormholeManager.getInstance().onServerBatchComplete(view);
    }
  }

  public void onViewDestroy(HippyWormholeView wormHoleView) {
    //HippyWormholeManager.getInstance().onWormholeDestroy(wormHoleView.getBusinessId());
  }

}
