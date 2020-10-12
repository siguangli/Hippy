package com.tencent.mtt.hippy.example.nv;

import com.tencent.mtt.hippy.adapter.nv.HippyNativeVueAdapter;
import com.tencent.mtt.hippy.bridge.libraryloader.LibraryLoader;
import com.tencent.nativevue.NativeVueEngine;
import com.tencent.nativevue.NativeVueLogAdapter;
import com.tencent.nativevue.NativeVuePreconditionAdapter;

import org.json.JSONObject;

/**
 * Created by kamlin on 2020/9/24.
 * TODO：keep住混淆 com.tencent.nativevue.NativeVueEngine
 */
public class NativeVueAdapter implements HippyNativeVueAdapter {

  @Override
  public void initNativeVueEngine(JSONObject globalConfig) {
    NativeVueEngine.Builder builder = new NativeVueEngine.Builder()
      .env(globalConfig)
      .preconditionAdapter(new NativeVuePreconditionAdapter() {
        @Override
        public void loadNativeVueSo(LoadSoResult loadSoResult) {
          try {
            LibraryLoader.loadLibraryIfNeed("mtt_shared");
            LibraryLoader.loadLibraryIfNeed("nativevue");
          } catch (Throwable e) {
            loadSoResult.onLoadError();
          }
          loadSoResult.onLoadSuccess();
        }
      })
      .logAdapter(new NativeVueLogAdapter() {
        @Override
        public void logD(String debug) {

        }

        @Override
        public void logE(String error) {

        }

        @Override
        public void onNativeVueError(String error) {

        }
      });
    NativeVueEngine.getInstance().init(builder);
  }

  @Override
  public void createVDom(String vueDom, String data, final OnGetVDomResult onGetVDomResult) {
    NativeVueEngine.getInstance().createVDom(data, vueDom, new NativeVueEngine.DomResult() {
      @Override
      public void onResult(String vdom) {
        onGetVDomResult.onResult(vdom);
      }
    });
  }
}
