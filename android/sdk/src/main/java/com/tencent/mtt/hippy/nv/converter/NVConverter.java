package com.tencent.mtt.hippy.nv.converter;

import android.text.TextUtils;

import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.dom.node.NodeProps;
import com.tencent.mtt.hippy.modules.nativemodules.uimanager.UIManagerModule;
import com.tencent.mtt.hippy.nv.utils.ColorParseUtils;
import com.tencent.mtt.hippy.nv.utils.JSONConvertUtils;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.mtt.hippy.utils.PixelUtil;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Created by kamlin on 2020/9/24.
 */
public class NVConverter {

  private static final String TAG = "NVConverter";
  private static final Map<String, String> keyConvertMap = new HashMap<>();
  public static final String CHILDREN = "children";
  public static final String ATTR = "attr";
  public static final String SOURCE = "source";
  public static final String URI = "uri";
  public static final String SRC = "src";

  public static final String DIMENSIONS = "Dimensions";
  public static final String SCREEN_PHYSICAL_PIXELS = "screenPhysicalPixels";
  public static final String WINDOW_PHYSICAL_PIXELS = "windowPhysicalPixels";
  public static final String WINDOW = "window";
  public static final String SCREEN = "screen";
  static {
    keyConvertMap.put(UIManagerModule.ID, "ref");
    keyConvertMap.put(UIManagerModule.NAME, "type");
  }

  public static JSONObject convertNVConfig(String config) {
    try {
      JSONObject configJson = new JSONObject(config);
      Iterator<String> iterator = configJson.keys();
      while (iterator.hasNext()) {
        String key = iterator.next();
        if (key.equals(DIMENSIONS)) {
          JSONObject dimensions = configJson.optJSONObject(key);
          JSONObject screen = dimensions.optJSONObject(SCREEN_PHYSICAL_PIXELS);
          JSONObject window = dimensions.optJSONObject(WINDOW_PHYSICAL_PIXELS);
          dimensions.remove(SCREEN_PHYSICAL_PIXELS);
          dimensions.remove(SCREEN_PHYSICAL_PIXELS);
          dimensions.put(WINDOW, window);
          dimensions.put(SCREEN, screen);

          int w = window.optInt(NodeProps.WIDTH);
          int h = window.optInt(NodeProps.HEIGHT);
          window.put(NodeProps.WIDTH, PixelUtil.px2dp(w));
          window.put(NodeProps.HEIGHT, PixelUtil.px2dp(h));
        }
      }
      return configJson;
    } catch (Exception e) {
      LogUtils.e(TAG, e.getMessage());
    }
    return new JSONObject();
  }

  public static String convertKey(String rawKey) {
    return keyConvertMap.get(rawKey);
  }

  public static HippyMap convertProps(JSONObject jsonObject) {
    if (jsonObject == null) {
      return new HippyMap();
    }
    JSONObject attr = jsonObject.optJSONObject(ATTR);
    JSONObject style = jsonObject.optJSONObject(NodeProps.STYLE);
    HippyMap props = JSONConvertUtils.toHippyMap(attr);

    HippyMap styleMap = JSONConvertUtils.toHippyMap(style);
    props.pushObject(NodeProps.STYLE, styleMap);

    overwriteColor(NodeProps.COLOR, styleMap);
    overwriteColor(NodeProps.BACKGROUND_COLOR, styleMap);
    overwriteSource(props);
    return props;
  }

  private static void overwriteColor(String key, HippyMap styleMap) {
    String color = styleMap.getString(key);
    if (!TextUtils.isEmpty(color) && (color.contains("#") || color.contains(ColorParseUtils.RGB)
        || color.contains(ColorParseUtils.RGBA))) {
      styleMap.pushInt(key, ColorParseUtils.parseColor(color));
    }
  }

  private static void overwriteSource(HippyMap props) {
    if (props.containsKey(SOURCE)) {
      Object o = props.get(SOURCE);
      if (o instanceof HippyMap) {
        String uri = ((HippyMap)o).getString(URI);
        if (!TextUtils.isEmpty(uri)) {
          props.pushString(SRC, uri);
        }
      } else if (o instanceof String) {
        props.pushString(SRC, o.toString());
      }
    }
  }
}
