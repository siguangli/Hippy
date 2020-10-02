package com.tencent.mtt.hippy.nv.utils;

import com.tencent.mtt.hippy.common.HippyArray;
import com.tencent.mtt.hippy.common.HippyMap;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Iterator;

/**
 * Created by kamlin on 2020/9/15.
 *
 * JSONObject -> HippyMap
 * JSONArray -> HippyArray
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
      } else if (value instanceof String) {
        Object v = parseDigits((String) value);
        if (v != null) {
          value = v;
        }
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
      } else if (value instanceof String) {
        Object v = parseDigits((String) value);
        if (v != null) {
          value = v;
        }
      }
      map.pushObject(key, value);
    }
    return map;
  }


  private static Object parseDigits(String value) {
    try {
      return Integer.parseInt(value);
    } catch (NumberFormatException e) {
      try {
        return Double.parseDouble(value);
      } catch (NumberFormatException exx) {
        //do nothing
      }
    }
    return null;
  }
}
