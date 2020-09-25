package com.tencent.mtt.hippy.uimanager;

import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.ControllerManager;
import com.tencent.mtt.hippy.uimanager.RenderNode;

public class TKDWormholeRenderNode extends RenderNode {
  private String mWormholeId;

  public TKDWormholeRenderNode(int mId, HippyMap mPropsToUpdate, String className, HippyRootView rootView, ControllerManager componentManager, boolean isLazyLoad) {
    super(mId, mPropsToUpdate, className, rootView, componentManager, isLazyLoad);
  }

  public String getWormholeId() {
    return mWormholeId;
  }

  public HippyRootView getRootView() {
    return mRootView;
  }

  public void setWormholeId(String id) {
    mWormholeId = id;
  }
}
