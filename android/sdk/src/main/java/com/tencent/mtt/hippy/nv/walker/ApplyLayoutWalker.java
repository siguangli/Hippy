package com.tencent.mtt.hippy.nv.walker;

import com.tencent.mtt.hippy.dom.flex.FlexSpacing;
import com.tencent.mtt.hippy.dom.node.DomNode;
import com.tencent.mtt.hippy.dom.node.TextExtra;
import com.tencent.mtt.hippy.dom.node.TextNode;
import com.tencent.mtt.hippy.uimanager.RenderManager;
import com.tencent.mtt.hippy.uimanager.RenderNode;
import com.tencent.mtt.hippy.utils.UIThreadUtils;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Created by kamlin on 2020/10/3.
 */
public class ApplyLayoutWalker implements DomNodeWalker {

  private RenderManager renderManager;
  private List<Runnable> pendingApplyLayoutList = new CopyOnWriteArrayList<>();


  public ApplyLayoutWalker(RenderManager renderManager) {
    this.renderManager = renderManager;
  }

  @Override
  public void onWalk(DomNode dom) {
    if (dom.getData() != null && !dom.isVirtual()) {
      pendingApplyLayoutList.add(new UpdateExtraTask(renderManager, dom));
    }
    applyLayout(dom);
    dom.markUpdateSeen();
  }

  public void executeApplyLayoutTaskOnUIThread() {
    UIThreadUtils.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        for (Runnable task : pendingApplyLayoutList) {
          task.run();
        }
        pendingApplyLayoutList.clear();
      }
    });
  }

  private void applyLayout(DomNode domNode) {
    float x = domNode.getLayoutX();
    float y = domNode.getLayoutY();

    DomNode parent = domNode.getParent();
    while (parent != null && parent.isJustLayout()) {
      x += parent.getLayoutX();
      y += parent.getLayoutY();
      parent = parent.getParent();
    }

    applyLayoutXY(domNode, x, y);
  }

  private void applyLayoutXY(final DomNode domStyle, final float x, final float y) {
    if (!domStyle.isJustLayout() && !domStyle.isVirtual()) {
      if (domStyle.shouldUpdateLayout(x, y)) {
        pendingApplyLayoutList.add(new UpdateLayoutTask(renderManager, x, y, domStyle));
      }
      return;
    }

    for (int i = 0; i < domStyle.getChildCount(); i++) {
      DomNode child = domStyle.getChildAt(i);
      float childX = child.getLayoutX();
      float childY = child.getLayoutY();
      childX += x;
      childY += y;
      applyLayoutXY(child, childX, childY);
    }
  }

  private static class UpdateLayoutTask implements Runnable {

    private RenderManager renderManager;
    private float x;
    private float y;
    private DomNode domStyle;

    public UpdateLayoutTask(RenderManager renderManager, float x, float y, DomNode domStyle) {
      this.renderManager = renderManager;
      this.x = x;
      this.y = y;
      this.domStyle = domStyle;
    }

    @Override
    public void run() {
      if (renderManager == null || domStyle == null) {
        return;
      }

      int newLeft = Math.round(x);
      int newTop = Math.round(y);
      int newRight = Math.round(x + domStyle.getLayoutWidth());
      int newBottom = Math.round(y + domStyle.getLayoutHeight());

      int newWidth = newRight - newLeft;
      int newHeight = newBottom - newTop;
      RenderNode renderNode = renderManager.getRenderNode(domStyle.getId());
      if (renderNode == null) {
        return;
      }

      renderNode.updateLayout(newLeft, newTop, newWidth, newHeight);
    }
  }

  private static class UpdateExtraTask implements Runnable {

    private RenderManager renderManager;
    private DomNode dom;

    public UpdateExtraTask(RenderManager renderManager, DomNode dom) {
      this.renderManager = renderManager;
      this.dom = dom;
    }

    @Override
    public void run() {
      if (dom == null || renderManager == null) {
        return;
      }

      RenderNode renderNode = renderManager.getRenderNode(dom.getId());
      if (renderNode == null) {
        return;
      }
      TextNode textNode = (TextNode) dom;
      TextExtra textExtra = new TextExtra(textNode.getData(), textNode.getPadding(FlexSpacing.START),
        textNode.getPadding(FlexSpacing.END),
        textNode.getPadding(FlexSpacing.BOTTOM), textNode.getPadding(FlexSpacing.TOP));
      renderNode.updateExtra(textExtra);
    }
  }
}
