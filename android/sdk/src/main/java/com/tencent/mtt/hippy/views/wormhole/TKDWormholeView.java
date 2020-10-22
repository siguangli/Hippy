package com.tencent.mtt.hippy.views.wormhole;

import android.content.Context;
import com.tencent.mtt.hippy.views.view.HippyViewGroup;

public class TKDWormholeView extends HippyViewGroup {
  private String mWormholeId;

  public TKDWormholeView(Context context) {
    super(context);
  }

  public void setWormholeId(String id) {
    mWormholeId = id;
  }

  public String getWormholeId() {
    return mWormholeId;
  }

}

