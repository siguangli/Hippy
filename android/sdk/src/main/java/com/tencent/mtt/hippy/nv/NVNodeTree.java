package com.tencent.mtt.hippy.nv;

import android.text.TextUtils;
import android.view.View;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.dom.flex.FlexSpacing;
import com.tencent.mtt.hippy.dom.node.DomNode;
import com.tencent.mtt.hippy.dom.node.NodeProps;
import com.tencent.mtt.hippy.dom.node.TextExtra;
import com.tencent.mtt.hippy.dom.node.TextNode;
import com.tencent.mtt.hippy.modules.nativemodules.uimanager.UIManagerModule;
import com.tencent.mtt.hippy.nv.converter.NVConverter;
import com.tencent.mtt.hippy.uimanager.RenderManager;
import com.tencent.mtt.hippy.uimanager.RenderNode;
import com.tencent.mtt.hippy.utils.LogUtils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by kamlin on 2020/9/16.
 * combine hippy api about DomNode and RenderNode to build a node tree just for NativeVue
 */
public class NVNodeTree {

  private static final String TAG = "NvNodeTree";
  public static final String IMAGE_FROM_NV = "image_from_nv";

  private DomNode rootDomNode;
  private View view;

  private RenderManager renderManager;
  private DomManager domManager;
  private HippyRootView hippyRootView;
  private HippyEngineContext engineContext;

  public NVNodeTree(HippyEngineContext engineContext, HippyRootView hippyRootView) {
    renderManager = engineContext.getRenderManager();
    domManager = engineContext.getDomManager();
    this.hippyRootView = hippyRootView;
    this.engineContext = engineContext;
  }

  public boolean buildNvNode(String vdom) {
    try {
      return buildNvNode(new JSONObject(vdom));
    } catch (JSONException e) {
      LogUtils.e(TAG, "[buildNvNode]: " + e.getMessage());
    }
    return false;
  }

  public boolean buildNvNode(JSONObject vdomJson) {
    if (vdomJson == null || hippyRootView == null) {
      return false;
    }

    DomNode hippyRootNode = domManager.getNode(hippyRootView.getId());
    if (hippyRootNode == null) {
      return false;
    }

    rootDomNode = createDomNode(vdomJson, 0, hippyRootNode, true,
      new CreateRenderNodeWalker(renderManager, hippyRootView));
    layout(rootDomNode);
    removeDomNodeFromHippyRootNode();
    return true;
  }

  public DomNode getDomNode() {
    return rootDomNode;
  }

  public View getView() {
    if (view != null) {
      return view;
    }

    if (rootDomNode == null) {
      return null;
    }

    RenderNode rootRenderNode = renderManager.getRenderNode(rootDomNode.getId());
    if (rootRenderNode != null) {
      view = rootRenderNode.createViewRecursive();
      rootRenderNode.updateViewRecursive();
      removeRenderNodeFromHippyRootNode(rootRenderNode);
    }
    return view;
  }

  public void destroy() {
    if (rootDomNode != null) {
      walkNode(rootDomNode, new DomNodeWalker() {
        @Override
        public void onWalk(DomNode node) {
          domManager.removeNode(node);
          RenderNode renderNode = renderManager.getRenderNode(node.getId());
          renderManager.removeNode(renderNode);
        }
      });

    }
    rootDomNode = null;
    view = null;
  }

  private void removeRenderNodeFromHippyRootNode(RenderNode rootRenderNode) {
    if (rootRenderNode == null) {
      return;
    }

    RenderNode hippyRootNode = renderManager.getRenderNode(hippyRootView.getId());
    if (hippyRootNode == null) {
      return;
    }

    hippyRootNode.removeChild(rootRenderNode);
  }

  private void removeDomNodeFromHippyRootNode() {
    if (rootDomNode == null) {
      return;
    }

    DomNode hippyRootNode = domManager.getNode(hippyRootView.getId());

    int index = hippyRootNode.indexOf(rootDomNode);
    if (index == -1) {
      return;
    }

    hippyRootNode.removeChildAt(index);
  }

  private DomNode createDomNode(JSONObject vdomJson, int index, DomNode parentNode, boolean isRoot, DomNodeWalker walker) {
    int id = vdomJson.optInt(NVConverter.convertKey(UIManagerModule.ID));
    String name = vdomJson.optString(NVConverter.convertKey(UIManagerModule.NAME));
    HippyMap props = createProps(vdomJson);

    boolean isVirtual = false;
    if (parentNode != null && TextUtils.equals(parentNode.getViewClass(), NodeProps.TEXT_CLASS_NAME)) {
      isVirtual = true;
    }
    boolean isLazy = (parentNode != null && parentNode.isLazy()) || renderManager.getControllerManager().isControllerLazy(name);

    DomNode domNode = doCreateDomNode(id, name, isVirtual, isLazy, isRoot, props);
    domManager.addNode(domNode);
    if (parentNode != null) {
      parentNode.addChildAt(domNode, index);
    }

    walker.onWalk(domNode);

    JSONArray jsonArray = vdomJson.optJSONArray(NVConverter.CHILDREN);
    if (jsonArray != null) {
      for (int i = 0; i < jsonArray.length(); i++) {
        JSONObject child = jsonArray.optJSONObject(i);
        createDomNode(child, i, domNode, false, walker);
      }
    }
    return domNode;
  }

  private DomNode doCreateDomNode(int id, String name, boolean isVirtual, boolean isLazy, boolean isRoot, HippyMap props) {
    DomNode node = renderManager.createStyleNode(name, isVirtual, id);
    if (name.equals(NodeProps.IMAGE_CLASS_NAME)) {
      props.pushBoolean(IMAGE_FROM_NV, true);
    }
    node.setLazy(isLazy);
    node.setProps(props);
    node.updateProps(props);
    domManager.updateDomStyle(node);
    boolean isLayoutOnly;
    if (isRoot) {
      isLayoutOnly = false; //顶层节点强制不layoutOnly, 保证RootDomNode的id能get到RenderNode
    } else {
      isLayoutOnly = DomManager.layoutOnly(node);
    }
    node.setIsJustLayout(isLayoutOnly);
    return node;
  }

  private static HippyMap createProps(JSONObject jsonObject) {
    return NVConverter.convertProps(jsonObject);
  }

  private void layout(DomNode domNode) {
    walkNode(domNode, new DomNodeWalker() {
      @Override
      public void onWalk(DomNode dom) {
        dom.layoutBefore(engineContext);
      }
    }); //before layout

    domNode.calculateLayout(); //do layout

    walkNode(domNode, new DomNodeWalker() {
      @Override
      public void onWalk(DomNode dom) {
        dom.layoutAfter(engineContext);
      }
    }); //after layout

    walkNode(domNode, new DomNodeWalker() {
      @Override
      public void onWalk(DomNode dom) { //apply layout
        if (dom.getData() != null && !dom.isVirtual()) {
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
        applyLayout(dom);
        dom.markUpdateSeen();
      }
    });
  }

  private void walkNode(DomNode domNode, DomNodeWalker walker) {
    int size = domNode.getChildCount();
    for (int i = 0; i < size; i++) {
      DomNode dom = domNode.getChildAt(i);
      walkNode(dom, walker);
    }

    walker.onWalk(domNode);
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
}
