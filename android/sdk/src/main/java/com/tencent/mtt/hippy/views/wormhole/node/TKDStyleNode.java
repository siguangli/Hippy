package com.tencent.mtt.hippy.views.wormhole.node;

import android.view.View;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.NodeProps;
import com.tencent.mtt.hippy.dom.node.StyleNode;
import com.tencent.mtt.hippy.nv.NVViewModel;
import com.tencent.mtt.hippy.utils.PixelUtil;
import com.tencent.mtt.hippy.views.wormhole.NativeVueManager;
import com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager;

public class TKDStyleNode extends StyleNode {

  private static final String TAG = "TKDStyleNode";

  private final boolean mIsVirtual;
  private NVViewModel nvViewModel;
  private String wormholeId;

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

    //build nv node tree and layout it
    nvViewModel.buildNVNodeTreeSync(props);

    //put layout width, height into style
    HippyMap style = props.getMap(NodeProps.STYLE);
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

    props.pushString(HippyWormholeManager.WORMHOLE_WORMHOLE_ID, wormholeId);
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

}
