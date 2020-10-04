package com.tencent.mtt.hippy.nv;

import android.text.TextUtils;
import android.view.View;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.dom.node.DomNode;
import com.tencent.mtt.hippy.dom.node.NodeProps;
import com.tencent.mtt.hippy.modules.nativemodules.uimanager.UIManagerModule;
import com.tencent.mtt.hippy.nv.converter.NVConverter;
import com.tencent.mtt.hippy.nv.walker.ApplyLayoutWalker;
import com.tencent.mtt.hippy.nv.walker.CreateRenderNodeWalker;
import com.tencent.mtt.hippy.nv.walker.DomNodeWalker;
import com.tencent.mtt.hippy.nv.walker.ReleaseNVNodeWalker;
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


  private volatile CreateRenderNodeWalker renderNodeWalker;
  private volatile ApplyLayoutWalker applyLayoutWalker;

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

    renderNodeWalker = new CreateRenderNodeWalker(renderManager, hippyRootView);
    rootDomNode = createDomNode(vdomJson, 0, null, true, renderNodeWalker);
    if (renderNodeWalker != null) {
      renderNodeWalker.executePendingTaskOnUIThread();
    }
    layout(rootDomNode);
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
      view = createView(rootRenderNode);
      if (view != null) {
        updateView(rootRenderNode);
      }
    }
    return view;
  }

  public void destroy() {
    if (rootDomNode != null) {
      walkNode(rootDomNode, new ReleaseNVNodeWalker(domManager, renderManager));
    }
    rootDomNode = null;
    view = null;
    applyLayoutWalker = null;
    renderNodeWalker = null;
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

    if (walker != null) {
      walker.onWalk(domNode);
    }

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

    applyLayoutWalker = new ApplyLayoutWalker(renderManager);
    walkNode(domNode, applyLayoutWalker); //apply layout
    if (applyLayoutWalker != null) {
      applyLayoutWalker.executeApplyLayoutTaskOnUIThread();
    }
  }

  private void walkNode(DomNode domNode, DomNodeWalker walker) {
    int size = domNode.getChildCount();
    for (int i = 0; i < size; i++) {
      DomNode dom = domNode.getChildAt(i);
      walkNode(dom, walker);
    }

    if (walker != null) {
      walker.onWalk(domNode);
    }
  }

  private View createView(RenderNode nvNode) {
    if (nvNode == null) {
      return null;
    }
    View view = createView(hippyRootView, nvNode);
    if (nvNode.getChildCount() > 0) {
      for (int i = 0; i < nvNode.getChildCount(); i++) {
        RenderNode renderNode = nvNode.getChildAt(i);
        createView(renderNode);
        renderManager.getControllerManager().addChild(nvNode.getId(), renderNode.getId(), i);
      }
    }
    return view;
  }

  public View createView(HippyRootView hippyRootView, RenderNode renderNode) {
    return renderManager.getControllerManager().createView(hippyRootView, renderNode.getId(),
      renderNode.getClassName(), renderNode.getProps());
  }

  private void updateView(RenderNode renderNode) {
    if (renderNode == null) {
      return;
    }

    update(renderNode);

    for (int i = 0; i < renderNode.getChildCount(); i++) {
      RenderNode node = renderNode.getChildAt(i);
      update(node);
    }
  }

  private void update(RenderNode renderNode) {
    int id = renderNode.getId();
    String name = renderNode.getClassName();
    renderManager.getControllerManager().updateLayout(name, id, renderNode.getX(), renderNode.getY(),
      renderNode.getWidth(), renderNode.getHeight());
    if (renderNode.getTextExtra() != null) {
      renderManager.getControllerManager().updateExtra(id, name, renderNode.getTextExtra());
    }
  }
}
