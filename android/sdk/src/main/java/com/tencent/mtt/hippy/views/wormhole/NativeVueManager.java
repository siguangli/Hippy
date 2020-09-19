package com.tencent.mtt.hippy.views.wormhole;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
import android.view.ViewGroup;

import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.mtt.hippy.views.wormhole.node.TKDStyleNode;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class NativeVueManager {

  private static final String TAG = "NativeVueManager";

  private static volatile NativeVueManager INSTANCE;
  private Map<String, TKDStyleNode> mTkdStyleNodeMap = new ConcurrentHashMap<>();

  private NativeVueManager() {
  }

  public static NativeVueManager getInstance() {
    if (INSTANCE == null) {
      synchronized (NativeVueManager.class) {
        if (INSTANCE == null) {
          INSTANCE = new NativeVueManager();
        }
      }
    }
    return INSTANCE;
  }

  public void registerNodeByWormholeId(String wormholeId, TKDStyleNode node) {
    if (!mTkdStyleNodeMap.containsKey(wormholeId)) {
      mTkdStyleNodeMap.put(wormholeId, node);
    }
  }

  public void unregisterTDKWormholeStyleNode(String wormholeId) {
    TKDStyleNode styleNode = mTkdStyleNodeMap.remove(wormholeId);
    if (styleNode == null) {
      return;
    }

    styleNode.destroyNV();
  }

  public View getNVView(HippyMap props) {
    return getNVView(TKDStyleNode.getWormholeId(props));
  }

  public View getNVView(String id) {
    TKDStyleNode styleNode = mTkdStyleNodeMap.get(id);
    if (styleNode == null) {
      return null;
    }
    return styleNode.getNVView();
  }

  public void hideNativeVueByWormholeId(String wormholeId){
    final TKDStyleNode styleNode = mTkdStyleNodeMap.remove(wormholeId);
    if (styleNode == null) {
      LogUtils.d(TAG, "styleNode is null, wormholeId: " + wormholeId);
      return;
    }

    final View view = styleNode.getNVView();
    if (view == null) {
      return;
    }

    view.postDelayed(new Runnable() {
      @Override
      public void run() {
        view.animate().alpha(0)
          .setDuration(200)
          .setListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
              destroyNVView(view, styleNode);
            }

            @Override
            public void onAnimationCancel(Animator animation) {
              destroyNVView(view, styleNode);
            }
          });
      }
    }, 100);
  }

  private void destroyNVView(View nvView, TKDStyleNode styleNode) {
    if (nvView != null && nvView.getParent() instanceof ViewGroup) {
      ViewGroup parent = (ViewGroup) nvView.getParent();
      parent.removeView(nvView);
    }

    if (styleNode != null) {
      styleNode.destroyNV();
    }
  }
}
