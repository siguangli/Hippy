package com.tencent.mtt.hippy.views.nativevue;

import com.tencent.mtt.hippy.views.wormhole.node.TKDStyleNode;

import java.util.concurrent.ConcurrentHashMap;

public class NativeVueManager {
  private static volatile NativeVueManager INSTANCE;
  private ConcurrentHashMap<String, TKDStyleNode> mTkdStyleNodeMap = new ConcurrentHashMap<String, TKDStyleNode>();

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

  public void hideNativeVueByWormholeId(String wormholeId){
    TKDStyleNode targetNode = mTkdStyleNodeMap.get(wormholeId);
  }
}
