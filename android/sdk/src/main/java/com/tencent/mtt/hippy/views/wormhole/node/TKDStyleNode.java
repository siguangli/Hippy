package com.tencent.mtt.hippy.views.wormhole.node;

import android.text.TextUtils;
import android.view.View;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.NodeProps;
import com.tencent.mtt.hippy.dom.node.StyleNode;
import com.tencent.mtt.hippy.nv.NVViewModel;
import com.tencent.mtt.hippy.utils.PixelUtil;
import com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager;
import com.tencent.mtt.hippy.views.wormhole.NativeVueManager;

import static com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager.WORMHOLE_WORMHOLE_ID;

public class TKDStyleNode extends StyleNode {

  private static final String TAG = "TKDStyleNode";
  private static final String TEMPLATE_TYPE = "templateType";
  private static final String DATA = "data";

  private final boolean mIsVirtual;
  private NVViewModel nvViewModel;
  private String wormholeId;
  private boolean hasLayoutNv;

  public TKDStyleNode(boolean isVirtual, HippyEngineContext engineContext, HippyRootView hippyRootView, String wormholeId) {
    this.mIsVirtual = isVirtual;
    nvViewModel = new NVViewModel(engineContext, hippyRootView);
    this.wormholeId = wormholeId;
    NativeVueManager.getInstance().registerNodeByWormholeId(wormholeId, this);
  }

  public boolean isVirtual() {
    return mIsVirtual;
  }

  @Override
  public void setProps(HippyMap props) {
    super.setProps(props);
    HippyMap p = getTotalProps();
    if (p == null) {
      return;
    }
    p.pushString(HippyWormholeManager.WORMHOLE_WORMHOLE_ID, wormholeId);

    if (hasLayoutNv) {
      return;
    }

    //build nv node tree and layout it
    HippyMap params = p.getMap(HippyWormholeManager.WORMHOLE_PARAMS);
    String templateType = getTemplateType(params);
    if (TextUtils.isEmpty(templateType)) {
      return;
    }
    String template = NativeVueManager.getInstance().getTemplate(templateType);
    if (TextUtils.isEmpty(template)) {
      return;
    }

    nvViewModel.buildNVNodeTreeSync(template, params);

    //put layout width, height into style
    HippyMap style = p.getMap(NodeProps.STYLE);
    if (style == null) {
      style = new HippyMap();
      props.pushMap(NodeProps.STYLE, style);
    }
    float nvWidth = nvViewModel.getLayoutWidth();
    float nvHeight = nvViewModel.getLayoutHeight();
    if (nvWidth != 0) {
      style.pushDouble(NodeProps.WIDTH, PixelUtil.px2dp(nvWidth));
    }
    if (nvHeight != 0) {
      style.pushDouble(NodeProps.HEIGHT, PixelUtil.px2dp(nvHeight));
    }
    hasLayoutNv = true;

    params.pushString(WORMHOLE_WORMHOLE_ID, wormholeId);
    HippyWormholeManager.getInstance().onTkdWormholeNodeSetProps(params, wormholeId, getId());

  }

  @Override
  public void layoutBefore(HippyEngineContext context) {
    super.layoutBefore(context);

    if (getChildCount() != 0) {
      //WormholeEngine has created DomNode and add into this，so TKDStyleNode can create view by itself
      //and we can remove NVNode and NVView
      NativeVueManager.getInstance().unregisterTDKWormholeStyleNode(wormholeId);
    }
  }

  public View getNVView() {
    return nvViewModel.getView();
  }

  public void destroyNV() {
    nvViewModel.destroy();
  }

  public static String getWormholeId(HippyMap props) {
    return props.getString(HippyWormholeManager.WORMHOLE_WORMHOLE_ID);
  }

  public static String getTemplateType(HippyMap params) {
    if (params == null) {
      return null;
    }
    HippyMap data = params.getMap(DATA);
    if (data == null) {
      return null;
    }
    return data.getString(TEMPLATE_TYPE);
  }
}
