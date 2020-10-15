package com.tencent.mtt.hippy.nv.image;

import com.tencent.mtt.supportui.utils.struct.ArrayMap;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Created by kamlin on 2020/9/27.
 */
public class NVImageCacheTask {

  private Set<NVImageCacheCallback> waitingList = new HashSet<>();
  private Map<NVImageCacheEntry, NVImageCacheCallback> imageReadyMap = new ArrayMap<>();

  public boolean tryGetImageResult(NVImageCacheEntry entry, NVImageCacheCallback waiter) {
    NVImageCacheCallback resultCallback = imageReadyMap.remove(entry);
    if (resultCallback == null) {
      return false;
    }
    waitingList.add(waiter);
    dispatchImageResult(entry, resultCallback);
    return true;
  }

  public void addImageWaiter(NVImageCacheCallback imageCacheWaiter) {
    waitingList.add(imageCacheWaiter);
  }

  public void onGetImageResult(NVImageCacheEntry entry, NVImageCacheCallback callback) {
    if (waitingList.isEmpty()) {
      imageReadyMap.put(entry, callback);
    } else {
      dispatchImageResult(entry, callback);
    }
  }

  private void dispatchImageResult(NVImageCacheEntry entry, NVImageCacheCallback callback) {
    for (NVImageCacheCallback imageWaiter : waitingList) {
      String url = entry.getUrl();
      imageWaiter.onGetCacheResult(url, callback.getDrawableTarget(url));
    }
    waitingList.clear();
  }

}
