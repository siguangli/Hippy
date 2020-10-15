package com.tencent.mtt.hippy.nv.walker;

import com.tencent.mtt.hippy.dom.node.DomNode;

/**
 * Created by kamlin on 2020/9/17.
 */
public interface DomNodeWalker {

  void onWalk(DomNode node);

}
