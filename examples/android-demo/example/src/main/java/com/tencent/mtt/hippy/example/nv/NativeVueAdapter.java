package com.tencent.mtt.hippy.example.nv;

import com.tencent.mtt.hippy.adapter.nv.HippyNativeVueAdapter;
import com.tencent.nativevue.NativeVueEngine;

/**
 * Created by kamlin on 2020/9/24.
 */
public class NativeVueAdapter implements HippyNativeVueAdapter {

  @Override
  public void createVDom(String vueDom, String data, final OnGetVDomResult onGetVDomResult) {
    NativeVueEngine.getInstance().createVDom(data, vueDom, new NativeVueEngine.DomResult() {
      @Override
      public void onResult(String vdom) {
        onGetVDomResult.onResult(vdom);
      }
    });
  }
}
