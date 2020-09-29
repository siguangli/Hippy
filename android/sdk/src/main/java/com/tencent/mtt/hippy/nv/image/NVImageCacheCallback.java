package com.tencent.mtt.hippy.nv.image;

import com.tencent.mtt.supportui.adapters.image.IDrawableTarget;

/**
 * Created by kamlin on 2020/9/27.
 */
public interface NVImageCacheCallback {

  void onGetCacheResult(String url, IDrawableTarget drawableTarget);

  IDrawableTarget getDrawableTarget(String url);

}
