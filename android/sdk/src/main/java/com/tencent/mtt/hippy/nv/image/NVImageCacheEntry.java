package com.tencent.mtt.hippy.nv.image;

import android.text.TextUtils;

import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.NodeProps;
import com.tencent.mtt.supportui.utils.struct.ArrayMap;

import java.util.Map;

/**
 * Created by kamlin on 2020/9/27.
 */
public class NVImageCacheEntry {

  private Map<String, Object> keyMap = new ArrayMap<>();

  public NVImageCacheEntry(String url, HippyMap props) {
    if (!TextUtils.isEmpty(url)) {
      keyMap.put("url", url);
    }

    keyMap.put(NodeProps.WIDTH, props.getInt(NodeProps.WIDTH));
    keyMap.put(NodeProps.HEIGHT, props.getInt(NodeProps.HEIGHT));
    if (props.containsKey(NodeProps.BORDER_RADIUS)) {
      keyMap.put(NodeProps.BORDER_RADIUS, props.get(NodeProps.BORDER_RADIUS));
    }
    if (props.containsKey(NodeProps.BORDER_TOP_LEFT_RADIUS)) {
      keyMap.put(NodeProps.BORDER_TOP_LEFT_RADIUS, props.get(NodeProps.BORDER_TOP_LEFT_RADIUS));
    }
    if (props.containsKey(NodeProps.BORDER_TOP_RIGHT_RADIUS)) {
      keyMap.put(NodeProps.BORDER_TOP_RIGHT_RADIUS, props.get(NodeProps.BORDER_TOP_RIGHT_RADIUS));
    }
    if (props.containsKey(NodeProps.BORDER_BOTTOM_LEFT_RADIUS)) {
      keyMap.put(NodeProps.BORDER_BOTTOM_LEFT_RADIUS, props.get(NodeProps.BORDER_BOTTOM_LEFT_RADIUS));
    }
    if (props.containsKey(NodeProps.BORDER_BOTTOM_RIGHT_RADIUS)) {
      keyMap.put(NodeProps.BORDER_BOTTOM_RIGHT_RADIUS, props.get(NodeProps.BORDER_BOTTOM_RIGHT_RADIUS));
    }
  }

  public String getUrl() {
    return (String) keyMap.get("url");
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof NVImageCacheEntry)) return false;
    NVImageCacheEntry cacheKey = (NVImageCacheEntry) o;
    return keyMap.equals(cacheKey.keyMap);
  }

  @Override
  public int hashCode() {
    return keyMap.hashCode();
  }

  @Override
  public String toString() {
    return "ImageCacheKey{" +
      "keyMap=" + keyMap +
      '}';
  }

}
