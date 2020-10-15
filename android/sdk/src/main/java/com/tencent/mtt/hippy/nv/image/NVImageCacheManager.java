package com.tencent.mtt.hippy.nv.image;

import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.nv.NVNodeTree;
import com.tencent.mtt.supportui.utils.struct.ArrayMap;

import java.util.Map;

/**
 * Created by kamlin on 2020/9/27.
 */
public class NVImageCacheManager {

  private Map<NVImageCacheEntry, NVImageCacheTask> cacheMap = new ArrayMap<>();

  public boolean tryGetImageResult(String url, HippyMap props, NVImageCacheCallback imageWaiter) {
    NVImageCacheEntry entry = new NVImageCacheEntry(url, props);
    boolean isFromNV = isFromNV(props);

    NVImageCacheTask task = cacheMap.get(entry);

    if (task == null && isFromNV) {
      NVImageCacheTask newTask = new NVImageCacheTask();
      cacheMap.put(entry, newTask);
      return false;
    }

    if (task != null && !isFromNV) {
      boolean success = task.tryGetImageResult(entry, imageWaiter);
      if (success) {
        cacheMap.remove(entry);
      } else {
        task.addImageWaiter(imageWaiter);
      }

      return true;
    }
    return false;
  }

  public void onGetFinalImage(String url, HippyMap props, NVImageCacheCallback resultCallback) {
    boolean isFromNV = isFromNV(props);
    if (!isFromNV) {
      return;
    }
    NVImageCacheEntry entry = new NVImageCacheEntry(url, props);
    NVImageCacheTask task = cacheMap.remove(entry);
    if (task == null) {
      return;
    }
    task.onGetImageResult(entry, resultCallback);
  }

  public static boolean isFromNV(HippyMap props) {
    if (props == null) {
      return false;
    }
    return props.getBoolean(NVNodeTree.IMAGE_FROM_NV);
  }
}
