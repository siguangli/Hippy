package com.tencent.mtt.hippy.views.wormhole.node;

import com.tencent.mtt.hippy.dom.node.StyleNode;

public class TKDStyleNode extends StyleNode {
  private final boolean mIsVirtual;

  public TKDStyleNode(boolean isvurtla) {
    this.mIsVirtual = isvurtla;
  }

  public boolean isVirtual() {
    return mIsVirtual;
  }
}
