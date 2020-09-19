package com.tencent.mtt.hippy.views.wormhole;

import android.content.Context;

import com.tencent.mtt.hippy.views.view.HippyViewGroup;

public class HippyWormholeView extends HippyViewGroup {
  private String mBusinessId;

  public HippyWormholeView(Context context) {
    super(context);
  }

  public String getBusinessId() {
    return mBusinessId;
  }

  public void setBusinessId(String id) {
    mBusinessId = id;
  }

}
