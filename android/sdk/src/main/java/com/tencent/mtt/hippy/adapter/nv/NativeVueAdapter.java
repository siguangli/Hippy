package com.tencent.mtt.hippy.adapter.nv;

/**
 * Created by kamlin on 2020/9/15.
 */
public interface NativeVueAdapter {

  void createVDom(String vueDom, String data, OnGetVDomResult onGetVDomResult);

  interface OnGetVDomResult {

    void onResult(String vdom);

  }
}
