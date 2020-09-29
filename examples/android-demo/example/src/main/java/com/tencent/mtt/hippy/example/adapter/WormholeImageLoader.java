package com.tencent.mtt.hippy.example.adapter;

/**
 * Created by kamlin on 2020/9/28.
 */
public class WormholeImageLoader extends MyImageLoader {

  @Override
  public boolean supportNativeVue() {
    return true;
  }
}
