package com.tencent.mtt.hippy.views.wormhole;

import android.content.Context;
import android.text.TextUtils;
import android.view.View;

import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.annotation.HippyController;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.StyleNode;
import com.tencent.mtt.hippy.dom.node.WormholeNode;
import com.tencent.mtt.hippy.uimanager.ControllerManager;
import com.tencent.mtt.hippy.uimanager.HippyViewController;
import com.tencent.mtt.hippy.uimanager.RenderNode;

@HippyController(name = "Wormhole", isLazyLoad = true)
public class HippyWormholeController extends HippyViewController<HippyWormholeView> {
  @Override
  protected View createViewImpl(Context context) {
    return new HippyWormholeView(context);
  }

  @Override
  protected View createViewImpl(final Context context, HippyMap iniProps) {
    HippyWormholeView wormholeView = new HippyWormholeView(context);
    return wormholeView;
  }

  @Override
  protected StyleNode createNode(boolean virtual) {
    return new WormholeNode(virtual);
  }

  @Override
  public RenderNode createRenderNode(int id,  HippyMap props, String className, HippyRootView hippyRootView, ControllerManager controllerManager, boolean lazy) {
    lazy = HippyWormholeManager.getInstance().onCreateWormholeRenderNode(id, props);
    RenderNode node = new RenderNode(id, props, className, hippyRootView, controllerManager, lazy);
    return node;
  }

  @Override
  public void onBatchComplete(HippyWormholeView view) {
    super.onBatchComplete(view);
    if (view != null) {
      HippyWormholeManager.getInstance().onServerBatchComplete(view);
    }
  }

}
