package com.tencent.mtt.hippy.nv;

import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.dom.node.DomNode;
import com.tencent.mtt.hippy.uimanager.RenderManager;
import com.tencent.mtt.hippy.uimanager.RenderNode;

/**
 * Created by kamlin on 2020/9/16.
 */
class CreateRenderNodeWalker implements DomNodeWalker {

  private RenderManager renderManager;
  private HippyRootView hippyRootView;

  public CreateRenderNodeWalker(RenderManager renderManager, HippyRootView hippyRootView) {
    this.renderManager = renderManager;
    this.hippyRootView = hippyRootView;
  }

  @Override
  public void onWalk(DomNode dom) {
    if (dom.isVirtual() || dom.isJustLayout()) {
      return;
    }

    int id = dom.getId();
    String name = dom.getViewClass();
    HippyMap props = dom.getTotalProps();
    RenderNode renderNode = renderManager.createNode(id, name, props, hippyRootView);
    if (dom.getParent() != null) {
      DomNode nativeParentNode = DomManager.findNativeViewParent(dom);
      DomManager.ViewIndex childIndex = DomManager.findNativeViewIndex(nativeParentNode, dom, 0);
      RenderNode parent = renderManager.getRenderNode(nativeParentNode.getId());
      if (parent != null) {
        parent.addChild(renderNode, childIndex.mIndex);
      }
    }
  }
}
