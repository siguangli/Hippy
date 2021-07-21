package com.tencent.mtt.hippy.devsupport.inspector.model;

import android.graphics.Bitmap;
import android.text.TextUtils;
import android.util.Base64;
import android.util.DisplayMetrics;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.dom.DomManager;
import com.tencent.mtt.hippy.utils.LogUtils;

import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class PageModel {

  private static final String TAG = "PageModel";

  private volatile boolean isFramingScreenCast;
  private long lastSessionId;

  public JSONObject startScreenCast(HippyEngineContext context) {
    isFramingScreenCast = true;
    return getScreenCastData(context);
  }

  public void stopScreenCast() {
    isFramingScreenCast = false;
  }

  public JSONObject screenFrameAck(HippyEngineContext context, int sessionId) {
    if (isFramingScreenCast && sessionId == lastSessionId) {
      return getScreenCastData(context);
    }
    LogUtils.w(TAG, "screenFrameAck, isFramingScreenCast=" + isFramingScreenCast);
    return null;
  }

  private JSONObject getScreenCastData(HippyEngineContext context) {
    DomManager domManager = context.getDomManager();
    int rootNodeId = domManager.getRootNodeId();
    HippyRootView hippyRootView = context.getInstance(rootNodeId);
    hippyRootView.setDrawingCacheEnabled(true);
    hippyRootView.buildDrawingCache();
    Bitmap bitmap = hippyRootView.getDrawingCache();
    String bitmapBase64Str = bitmapToBase64Str(bitmap);
    JSONObject result = new JSONObject();
    try {
      DisplayMetrics windowDisplayMetrics = hippyRootView.getContext().getResources().getDisplayMetrics();
      final int sessionId = (int) (System.currentTimeMillis() / 1000);
      JSONObject meta = new JSONObject();
      meta.put("offsetTop", 0);
      meta.put("pageScaleFactor", 0);
      meta.put("deviceWidth", windowDisplayMetrics.widthPixels);
      meta.put("deviceHeight", windowDisplayMetrics.heightPixels);
      meta.put("scrollOffsetX", 0);
      meta.put("scrollOffsetY", 0);
      meta.put("timestamp", sessionId);
      result.put("data", TextUtils.isEmpty(bitmapBase64Str) ? "" : bitmapBase64Str);
      result.put("metadata", meta);
      result.put("sessionId", sessionId);
      lastSessionId = sessionId;
    } catch (Exception e) {
      LogUtils.e(TAG, "getScreenCastData, exception=", e);
      return null;
    }
    return result;
  }

  public static String bitmapToBase64Str(Bitmap bitmap) {
    String result = null;
    ByteArrayOutputStream baos = null;
    try {
      if (bitmap != null) {
        baos = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, baos);

        baos.flush();
        baos.close();

        byte[] bitmapBytes = baos.toByteArray();
        result = Base64.encodeToString(bitmapBytes, Base64.DEFAULT);
      }
    } catch (IOException e) {
      LogUtils.e(TAG, "screenFrameAck, exception1=", e);
    } finally {
      try {
        if (baos != null) {
          baos.flush();
          baos.close();
        }
      } catch (IOException e) {
        LogUtils.e(TAG, "screenFrameAck, exception2=", e);
      }
    }
    return result;
  }
}
