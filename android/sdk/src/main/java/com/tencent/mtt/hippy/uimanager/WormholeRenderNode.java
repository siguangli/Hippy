package com.tencent.mtt.hippy.uimanager;

import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.ControllerManager;
import com.tencent.mtt.hippy.uimanager.RenderNode;

public class WormholeRenderNode extends RenderNode {
  private String mWormholeId;

  public WormholeRenderNode(int mId, HippyMap mPropsToUpdate, String className, HippyRootView rootView, ControllerManager componentManager, boolean isLazyLoad) {
    super(mId, mPropsToUpdate, className, rootView, componentManager, isLazyLoad);
  }

  public String getWormholeId() {
    return mWormholeId;
  }

  public void setWormholeId(String id) {
    mWormholeId = id;
  }
}
