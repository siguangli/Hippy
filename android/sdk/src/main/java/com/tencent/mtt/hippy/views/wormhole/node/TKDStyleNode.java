package com.tencent.mtt.hippy.views.wormhole.node;

import android.text.TextUtils;
import android.view.View;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.NodeProps;
import com.tencent.mtt.hippy.dom.node.StyleNode;
import com.tencent.mtt.hippy.nv.NVViewModel;
import com.tencent.mtt.hippy.utils.LogUtils;
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
  private volatile boolean mHasAddNVView;

  public TKDStyleNode(boolean isVirtual, HippyEngineContext engineContext, HippyRootView hippyRootView, String wormholeId) {
    this.mIsVirtual = isVirtual;
    nvViewModel = new NVViewModel(engineContext, hippyRootView);
    this.wormholeId = wormholeId;
    NativeVueManager.getInstance().registerNode(wormholeId, this);
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

    HippyMap params = p.getMap(HippyWormholeManager.WORMHOLE_PARAMS);
    if (params == null) {
      return;
    }

    params.pushString(WORMHOLE_WORMHOLE_ID, wormholeId);
    HippyWormholeManager.getInstance().onTkdWormholeNodeSetProps(params, wormholeId, getId());

    if (hasLayoutNv) {
      return;
    }

    //build nv node tree and layout it
    String templateType = getTemplateType(params);
    if (TextUtils.isEmpty(templateType)) {
      LogUtils.e(TAG, "[setProps]: template type is null, id: " + wormholeId);
      return;
    }
    String template = NativeVueManager.getInstance().getTemplate(templateType);
    if (TextUtils.isEmpty(template)) {
      LogUtils.e(TAG, "[setProps]: template is null, templateType: " + templateType + ", id: " + wormholeId);
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
      style.pushInt(NodeProps.WIDTH, (int) PixelUtil.px2dp(nvWidth));
    }
    if (nvHeight != 0) {
      style.pushInt(NodeProps.HEIGHT, (int) PixelUtil.px2dp(nvHeight));
    }
    hasLayoutNv = true;
  }

  public View getNVView() {
    return nvViewModel.getView();
  }

  public void destroyNV() {
    nvViewModel.destroy();
  }

  private static String getTemplateType(HippyMap params) {
    if (params == null) {
      return null;
    }
    HippyMap data = params.getMap(DATA);
    if (data == null) {
      return null;
    }
    return data.getString(TEMPLATE_TYPE);
  }

  public void markHasAddNVView() {
    mHasAddNVView = true;
  }

  public boolean hasAddNVView() {
    return mHasAddNVView;
  }
}
