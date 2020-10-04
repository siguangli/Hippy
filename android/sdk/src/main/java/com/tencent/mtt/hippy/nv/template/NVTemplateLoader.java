package com.tencent.mtt.hippy.nv.template;

import com.tencent.mtt.hippy.utils.LogUtils;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by kamlin on 2020/9/18.
 */
public class NVTemplateLoader implements INVTemplateLoader {

  private static final String TAG = "NVTemplateLoader";

  private Map<String, String> templateMap = new ConcurrentHashMap<>();

  @Override
  public boolean parseTemplates(String templates) {
    try {
      JSONObject jsonObject = new JSONObject(templates);
      Iterator<String> iterator = jsonObject.keys();
      while (iterator.hasNext()) {
        String key = iterator.next();
        String template = jsonObject.optString(key);
        templateMap.put(key, template);
      }
      return true;
    } catch (JSONException e) {
      LogUtils.e(TAG, "[parseTemplates]: " + e.getMessage());
    }
    return false;
  }

  @Override
  public String getTemplate(String templateId) {
    String template = templateMap.get(templateId);
    if (template != null) {
      return template;
    } else {
      LogUtils.e(TAG, "get template error, templateId: " + templateId);
      return null;
    }
  }
}
