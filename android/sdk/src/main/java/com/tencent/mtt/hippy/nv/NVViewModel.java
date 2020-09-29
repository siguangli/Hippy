package com.tencent.mtt.hippy.nv;

import android.text.TextUtils;
import android.view.View;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.adapter.nv.HippyNativeVueAdapter;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.DomNode;

/**
 * Created by kamlin on 2020/9/17.
 * TODO:
 * 5. 多线程校验
 * 8. 补充日志
 * 9. 清除View引用
 */
public class NVViewModel {

  private NVNodeTree nvNodeTree;
  private HippyNativeVueAdapter hippyNativeVueAdapter;

  public NVViewModel(HippyEngineContext engine, HippyRootView hippyRootView) {
    nvNodeTree = new NVNodeTree(engine, hippyRootView);
    hippyNativeVueAdapter = engine.getGlobalConfigs().getNativeVueAdapter();
  }

  public void buildNVNodeTreeSync(String template, HippyMap props) {
    if (props == null) {
      return;
    }

    if (nvNodeTree.getDomNode() != null) {
      return;
    }

    buildNVNodeTreeSync(template, props.toJSONObject().toString());
  }

  private void buildNVNodeTreeSync(String template, String data) {
    if (hippyNativeVueAdapter == null) {
      return;
    }
    hippyNativeVueAdapter.createVDom(template, data, new HippyNativeVueAdapter.OnGetVDomResult() {
      @Override
      public void onResult(String vdom) {
        if (TextUtils.isEmpty(vdom)) {
          return;
        }

        nvNodeTree.buildNvNode(vdom);
      }
    });
  }

  public boolean buildNVNodeTreeAsync(String templateId, String data) {
    return false;
  }

  public View getView() {
    return nvNodeTree.getView();
  }

  public float getLayoutX() {
    if (nvNodeTree.getDomNode() != null) {
      return nvNodeTree.getDomNode().getLayoutX();
    }
    return 0;
  }

  public float getLayoutY() {
    if (nvNodeTree.getDomNode() != null) {
      return nvNodeTree.getDomNode().getLayoutY();
    }
    return 0;
  }

  public float getLayoutWidth() {
    if (nvNodeTree.getDomNode() != null) {
      return nvNodeTree.getDomNode().getLayoutWidth();
    }
    return 0;
  }

  public float getLayoutHeight() {
    if (nvNodeTree.getDomNode() != null) {
      return nvNodeTree.getDomNode().getLayoutHeight();
    }
    return 0;
  }

  public DomNode getNode() {
    return nvNodeTree.getDomNode();
  }

  public void destroy() {
    nvNodeTree.destroy();
  }
}
