package com.tencent.mtt.hippy.views.wormhole;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;

import com.tencent.mtt.hippy.HippyEngine;
import com.tencent.mtt.hippy.HippyGlobalConfigs;
import com.tencent.mtt.hippy.bridge.HippyBridgeManagerImpl;
import com.tencent.mtt.hippy.nv.converter.NVConverter;
import com.tencent.mtt.hippy.devsupport.BundleFetchCallBack;
import com.tencent.mtt.hippy.devsupport.DevServerConfig;
import com.tencent.mtt.hippy.devsupport.DevServerHelper;
import com.tencent.mtt.hippy.nv.template.INVTemplateLoader;
import com.tencent.mtt.hippy.nv.template.NVTemplateLoader;
import com.tencent.mtt.hippy.nv.converter.NVConverter;
import com.tencent.mtt.hippy.utils.ContextHolder;
import com.tencent.mtt.hippy.utils.FileUtils;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.mtt.hippy.views.wormhole.node.TKDStyleNode;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager.WORMHOLE_TAG;

public class NativeVueManager {

  private static final String TAG = "NativeVueManager";

  private static volatile NativeVueManager INSTANCE;
  private Map<String, TKDStyleNode> mTkdStyleNodeMap = new ConcurrentHashMap<>();
  private INVTemplateLoader mTemplateLoader;

  private NativeVueManager() {
    mTemplateLoader = new NVTemplateLoader();
  }

  public static NativeVueManager getInstance() {
    if (INSTANCE == null) {
      synchronized (NativeVueManager.class) {
        if (INSTANCE == null) {
          INSTANCE = new NativeVueManager();
        }
      }
    }
    return INSTANCE;
  }

  public JSONObject getNVConfig(HippyEngine engine) {
    HippyBridgeManagerImpl hippyBridgeManager = (HippyBridgeManagerImpl) engine.getEngineContext().getBridgeManager();
    return NVConverter.convertNVConfig(hippyBridgeManager.getGlobalConfigs());
  }

  public void registerNode(String wormholeId, TKDStyleNode node) {
    if (!mTkdStyleNodeMap.containsKey(wormholeId)) {
      mTkdStyleNodeMap.put(wormholeId, node);
    }
  }

  public View getNVView(String id) {
    TKDStyleNode styleNode = mTkdStyleNodeMap.get(id);
    if (styleNode == null) {
      LogUtils.d(TAG, "[getNVView]: styleNode is null, id: " + id);
      return null;
    }
    return styleNode.getNVView();
  }

  public boolean parseTemplates(String templates) {
    return mTemplateLoader.parseTemplates(templates);
  }

  public String getTemplate(String templateId) {
    return mTemplateLoader.getTemplate(templateId);
  }

  public void markAddNVView(String wormholeId) {
    if (TextUtils.isEmpty(wormholeId)) {
      LogUtils.e(TAG, "[markAddNVView]: wormhole id is null");
      return;
    }

    TKDStyleNode styleNode = mTkdStyleNodeMap.get(wormholeId);
    if (styleNode == null) {
      LogUtils.e(TAG, "[markAddNVView]: styleNode is null, id: " + wormholeId);
      return;
    }
    styleNode.markHasAddNVView();
  }


  public void hideNVView(final String wormholeId){
    if (TextUtils.isEmpty(wormholeId)) {
      LogUtils.e(TAG, "[hideNVView]: wormhole id is null");
      return;
    }

    final TKDStyleNode styleNode = mTkdStyleNodeMap.remove(wormholeId);
    if (styleNode == null) {
      LogUtils.e(TAG, "[hideNVView]: styleNode is null, id: " + wormholeId);
      return;
    }

    if (!styleNode.hasAddNVView()) {
      styleNode.destroyNV();
    } else {
      final View view = styleNode.getNVView();
      if (view == null) {
        LogUtils.e(TAG, "[hideNVView]: view is null, id: " + wormholeId);
        return;
      }

      if (view.getParent() == null) {
        styleNode.destroyNV();
      } else {
        view.postDelayed(new Runnable() {
          @Override
          public void run() {
            view.animate().alpha(0)
              .setDuration(200)
              .setListener(new AnimatorListenerAdapter() {
                @Override
                public void onAnimationEnd(Animator animation) {
                  destroyNVView(view, styleNode);
                }

                @Override
                public void onAnimationCancel(Animator animation) {
                  destroyNVView(view, styleNode);
                }
              });
          }
        }, 100);
      }
    }
  }

  private void destroyNVView(View nvView, TKDStyleNode styleNode) {
    if (nvView != null && nvView.getParent() instanceof ViewGroup) {
      ViewGroup parent = (ViewGroup) nvView.getParent();
      parent.removeView(nvView);
    }

    if (styleNode != null) {
      styleNode.destroyNV();
    }
  }

  public void loadNativeVueJS(final OnLoadNativeVueJSListener onLoadNativeVueJSListener,HippyEngine.EngineInitParams params,String nvUrl){
    if(nvUrl.startsWith("http")){
      HippyGlobalConfigs configs = new HippyGlobalConfigs(params);
      DevServerHelper devServerHelper = new DevServerHelper(configs,params.debugServerHost);
      devServerHelper.dealfetchBundleFromURL(new BundleFetchCallBack()
      {
        @Override
        public void onSuccess(File file)
        {
          String template = FileUtils.readFile(file);
          onLoadNativeVueJSListener.onLoadSucess(template);
        }

        @Override
        public void onFail(Exception exception) {
          onLoadNativeVueJSListener.onLoadFailed(exception);
          LogUtils.e(TAG, "loadNativeVueJS exception:" + exception.getMessage());
        }
      },nvUrl, new File(ContextHolder.getAppContext().getFilesDir(), DevServerConfig.NATIVE_VUE_BUNDLE_FILE_NAME));
    }else {
      File file = new File(nvUrl);
      if (file != null && file.exists()) {
        //认为是直接打开指定目录下的文件
        String template = FileUtils.readFile(file);
        onLoadNativeVueJSListener.onLoadSucess(template);
      } else {
        //认为是直接打开在asset下面的文件，直接读出来即可
        InputStream inputStream = null;
        try {
          inputStream = ContextHolder.getAppContext().getAssets().open("nativevue.json");
        } catch (IOException e) {
          LogUtils.e(TAG, "loadNativeVueJS io exception:" + e.getMessage());
        }
        String template = getString(inputStream);
        onLoadNativeVueJSListener.onLoadSucess(template);
      }
    }
  }

  public interface OnLoadNativeVueJSListener {
    void onLoadSucess(String result);
    void onLoadFailed(Exception exception);
  }

  public static String getString(InputStream inputStream) {
    InputStreamReader inputStreamReader = null;
    try {
      inputStreamReader = new InputStreamReader(inputStream, "UTF-8");
    } catch (UnsupportedEncodingException e1) {
      e1.printStackTrace();
    }
    BufferedReader reader = new BufferedReader(inputStreamReader);
    StringBuffer sb = new StringBuffer("");
    String line;
    try {
      while ((line = reader.readLine()) != null) {
        sb.append(line);
        sb.append("\n");
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
    return sb.toString();
  }
}
