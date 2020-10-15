package com.tencent.mtt.hippy.nv.walker;

import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.dom.node.DomNode;
import com.tencent.mtt.hippy.uimanager.RenderManager;
import com.tencent.mtt.hippy.uimanager.RenderNode;

/**
 * Created by kamlin on 2020/10/4.
 */
public class ReleaseNVNodeWalker implements DomNodeWalker {

  private DomManager domManager;
  private RenderManager renderManager;

  public ReleaseNVNodeWalker(DomManager domManager, RenderManager renderManager) {
    this.domManager = domManager;
    this.renderManager = renderManager;
  }

  @Override
  public void onWalk(DomNode node) {
    if (domManager == null || renderManager == null) {
      return;
    }

    domManager.removeNode(node);
    int id = node.getId();
    RenderNode renderNode = renderManager.getRenderNode(id);
    renderManager.removeNode(renderNode);
    renderManager.getControllerManager().removeCacheView(id);
  }
}
