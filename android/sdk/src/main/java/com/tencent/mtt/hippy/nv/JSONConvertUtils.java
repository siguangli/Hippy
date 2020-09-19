package com.tencent.mtt.hippy.nv;

import com.tencent.mtt.hippy.common.HippyArray;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.utils.LogUtils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.Map;

/**
 * Created by kamlin on 2020/9/15.
 *
 * JSONObject -> HippyMap
 * HippyMap -> JSONObject
 *
 * JSONArray -> HippyArray
 * HippyArray -> JSONArray
 */
public class JSONConvertUtils {

  private static final String TAG = "JSONConvertUtils";

  public static HippyArray toHippyArray(JSONArray jsonArray) {
    HippyArray hippyArray = new HippyArray();

    for (int i = 0; i < jsonArray.length(); i++) {
      Object value = jsonArray.opt(i);
      if (value instanceof JSONArray) {
        value = toHippyArray((JSONArray) value);
      } else if (value instanceof JSONObject) {
        value = toHippyMap((JSONObject) value);
      }
      hippyArray.pushObject(value);
    }
    return hippyArray;
  }

  public static HippyMap toHippyMap(JSONObject jsonObject) {
    HippyMap map = new HippyMap();
    if (jsonObject == null) {
      return map;
    }
    Iterator<String> it = jsonObject.keys();
    while (it.hasNext()) {
      String key = it.next();
      Object value = jsonObject.opt(key);
      if (value instanceof JSONArray) {
        value = toHippyArray((JSONArray) value);
      } else if (value instanceof JSONObject) {
        value = toHippyMap((JSONObject) value);
      }
      map.pushObject(key, value);
    }
    return map;
  }

  public static JSONArray toJSONArray(HippyArray hippyArray) {
    JSONArray jsonArray = new JSONArray();
    if (hippyArray == null) {
      return jsonArray;
    }
    int size = hippyArray.size();
    for (int i = 0; i < size; i++) {
      Object object = hippyArray.get(i);
      if (object instanceof HippyArray) {
        object = toJSONArray((HippyArray) object);
      } else if (object instanceof HippyMap) {
        object = toJSONObject((HippyMap) object);
      }
      jsonArray.put(object);
    }
    return jsonArray;
  }

  public static JSONObject toJSONObject(HippyMap hippyMap) {
    JSONObject jsonObject = new JSONObject();
    if (hippyMap == null) {
      return jsonObject;
    }

    for (Map.Entry<String, Object> entry : hippyMap.entrySet()) {
      String key = entry.getKey();
      Object value = entry.getValue();
      if (value instanceof HippyMap) {
        value = toJSONObject((HippyMap) value);
      } else if (value instanceof HippyArray) {
        value = toJSONArray((HippyArray) value);
      }
      try {
        jsonObject.put(key, value);
      } catch (JSONException e) {
        LogUtils.e(TAG, "[toJSONObject]: " + e.getMessage());
      }
    }
    return jsonObject;
  }
}
