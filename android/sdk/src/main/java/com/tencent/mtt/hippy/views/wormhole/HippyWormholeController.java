package com.tencent.mtt.hippy.views.wormhole;

import android.content.Context;
import android.view.View;
import com.tencent.mtt.hippy.annotation.HippyController;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.StyleNode;
import com.tencent.mtt.hippy.dom.node.WormholeNode;
import com.tencent.mtt.hippy.uimanager.HippyViewController;


@HippyController(name = "Wormhole")
public class HippyWormholeController extends HippyViewController<HippyWormholeView> {
  @Override
  protected View createViewImpl(Context context) {
    return new HippyWormholeView(context);
  }

  @Override
  protected View createViewImpl(final Context context, HippyMap iniProps) {
    HippyWormholeView wormholeView = new HippyWormholeView(context);
    String wormholeId = HippyWormholeManager.getInstance().getWormholeIdFromProps(iniProps);
    wormholeView.setWormholeId(wormholeId);
    return wormholeView;
  }

  @Override
  protected StyleNode createNode(boolean virtual) {
    return new WormholeNode(virtual);
  }

  @Override
  public void onBatchComplete(HippyWormholeView view) {
    super.onBatchComplete(view);
    if (view != null) {
      HippyWormholeManager.getInstance().onServerBatchComplete(view);
    }
  }

  public void onViewDestroy(HippyWormholeView wormHoleView) {

  }

}
