package com.tencent.mtt.hippy.views.wormhole;

import android.content.Context;
import android.view.View;
import com.tencent.mtt.hippy.annotation.HippyController;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.HippyViewController;

@HippyController(name = "Wormhole")
public class HippyWormholeController extends HippyViewController<HippyWormholeView> {
  @Override
  protected View createViewImpl(Context context) {
    return new HippyWormholeView(context);
  }

  @Override
  protected View createViewImpl(final Context context, HippyMap iniProps) {
    String businessId = HippyWormholeManager.getInstance().getWormholeIdFromProps(iniProps);
    HippyWormholeView wormholeView = new HippyWormholeView(context);
    wormholeView.setBusinessId(businessId);
    return wormholeView;
  }

  @Override
  public void onBatchComplete(HippyWormholeView view) {
    super.onBatchComplete(view);
    HippyWormholeManager.getInstance().onServerBatchComplete(view);
    //TODO: 考虑复用的时候，要维护好BusinessId
    NativeVueManager.getInstance().hideNativeVueByWormholeId(view.getBusinessId());
  }

  @Override
  public void onViewDestroy(HippyWormholeView wormHoleView) {
    HippyWormholeManager.getInstance().onWormholeDestroy(wormHoleView.getBusinessId());
  }

}
