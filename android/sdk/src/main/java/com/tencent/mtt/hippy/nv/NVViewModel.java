package com.tencent.mtt.hippy.nv;

import android.text.TextUtils;
import android.view.View;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.adapter.nv.NativeVueAdapter;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.DomNode;

/**
 * Created by kamlin on 2020/9/17.
 * TODO:
 * 3. 实现TemplateLoader
 * 5. 多线程校验
 * 7. 复用逻辑处理
 * 8. 补充日志
 */
public class NVViewModel {

  private NVNodeTree nvNodeTree;
  private NativeVueAdapter nativeVueAdapter;
  private INVTemplateLoader templateLoader;

  public NVViewModel(HippyEngineContext engine, HippyRootView hippyRootView) {
    nvNodeTree = new NVNodeTree(engine, hippyRootView);
    nativeVueAdapter = engine.getGlobalConfigs().getNativeVueAdapter();
  }

  public void buildNVNodeTreeSync(HippyMap props) {
    if (props == null) {
      return;
    }

    if (nvNodeTree.getDomNode() != null) {
      return;
    }

    String templateId = props.getString("templateId");
    buildNVNodeTreeSync(templateId, JSONConvertUtils.toJSONObject(props).toString());
  }

  private void buildNVNodeTreeSync(String templateId, String data) {
    if (nativeVueAdapter == null) {
      return;
    }

    nativeVueAdapter.createVDom("", data, new NativeVueAdapter.OnGetVDomResult() {
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
