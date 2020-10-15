package com.tencent.mtt.hippy.adapter.nv;

import org.json.JSONObject;

/**
 * Created by kamlin on 2020/9/15.
 */
public interface HippyNativeVueAdapter {

  void initNativeVueEngine(JSONObject globalConfig);

  void createVDom(String vueDom, String data, OnGetVDomResult onGetVDomResult);

  interface OnGetVDomResult {

    void onResult(String vdom);

  }
}
