package com.tencent.mtt.hippy.nv.walker;

import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.dom.node.DomNode;
import com.tencent.mtt.hippy.uimanager.RenderManager;
import com.tencent.mtt.hippy.uimanager.RenderNode;
import com.tencent.mtt.hippy.utils.UIThreadUtils;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Created by kamlin on 2020/9/16.
 */
public class CreateRenderNodeWalker implements DomNodeWalker {

  private RenderManager renderManager;
  private HippyRootView hippyRootView;
  private List<Runnable> pendingCreateRenderNodeTask = new CopyOnWriteArrayList<>();

  public CreateRenderNodeWalker(RenderManager renderManager, HippyRootView hippyRootView) {
    this.renderManager = renderManager;
    this.hippyRootView = hippyRootView;
  }

  @Override
  public void onWalk(DomNode dom) {
    if (dom.isVirtual() || dom.isJustLayout()) {
      return;
    }
    pendingCreateRenderNodeTask.add(new CreateRenderNodeTask(hippyRootView, renderManager, dom));
  }

  public void executePendingTaskOnUIThread() {
    UIThreadUtils.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        for (Runnable task : pendingCreateRenderNodeTask) {
           task.run();
        }
        pendingCreateRenderNodeTask.clear();
      }
    });
  }

  private static class CreateRenderNodeTask implements Runnable {

    private HippyRootView hippyRootView;
    private RenderManager renderManager;
    private DomNode dom;

    public CreateRenderNodeTask(HippyRootView hippyRootView, RenderManager renderManager, DomNode dom) {
      this.hippyRootView = hippyRootView;
      this.renderManager = renderManager;
      this.dom = dom;
    }

    @Override
    public void run() {
      if (hippyRootView == null || renderManager == null || dom == null) {
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
}
