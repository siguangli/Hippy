/*
 * Tencent is pleased to support the open source community by making Hippy
 * available.
 * Copyright (C) 2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.tencent.mtt.hippy;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.ContextWrapper;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Rect;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import android.view.PixelCopy;
import android.view.PixelCopy.OnPixelCopyFinishedListener;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import androidx.annotation.MainThread;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.openhippy.connector.DomManager;
import com.openhippy.connector.JsDriver;
import com.openhippy.connector.NativeRenderConnector;
import com.openhippy.connector.RenderConnector;
import com.openhippy.framework.BuildConfig;
import com.tencent.devtools.DevtoolsManager;
import com.tencent.mtt.hippy.adapter.device.HippyDeviceAdapter;
import com.tencent.mtt.hippy.adapter.executor.HippyExecutorSupplierAdapter;
import com.tencent.mtt.hippy.adapter.thirdparty.HippyThirdPartyAdapter;
import com.tencent.mtt.hippy.bridge.HippyBridgeManager;
import com.tencent.mtt.hippy.bridge.HippyBridgeManagerImpl;
import com.tencent.mtt.hippy.bridge.bundleloader.HippyAssetBundleLoader;
import com.tencent.mtt.hippy.bridge.bundleloader.HippyBundleLoader;
import com.tencent.mtt.hippy.bridge.bundleloader.HippyFileBundleLoader;
import com.tencent.mtt.hippy.bridge.bundleloader.HippyRemoteBundleLoader;
import com.tencent.mtt.hippy.common.Callback;
import com.tencent.mtt.hippy.common.HippyJsException;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.common.LogAdapter;
import com.tencent.mtt.hippy.common.ThreadExecutor;
import com.tencent.mtt.hippy.devsupport.DevServerCallBack;
import com.tencent.mtt.hippy.devsupport.DevSupportManager;
import com.tencent.mtt.hippy.modules.HippyModuleManager;
import com.tencent.mtt.hippy.modules.HippyModuleManagerImpl;
import com.tencent.mtt.hippy.modules.HippyModulePromise.BridgeTransferType;
import com.tencent.mtt.hippy.modules.javascriptmodules.Dimensions;
import com.tencent.mtt.hippy.modules.javascriptmodules.EventDispatcher;
import com.tencent.mtt.hippy.modules.nativemodules.deviceevent.DeviceEventModule;
import com.tencent.mtt.hippy.runtime.builtins.array.JSDenseArray;
import com.tencent.mtt.hippy.uimanager.HippyCustomViewCreator;
import com.tencent.mtt.hippy.uimanager.RenderManager;
import com.tencent.mtt.hippy.utils.DimensionsUtil;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.mtt.hippy.utils.PixelUtil;
import com.tencent.mtt.hippy.utils.TimeMonitor;
import com.tencent.mtt.hippy.utils.UIThreadUtils;
import com.tencent.mtt.hippy.views.modal.HippyModalHostManager;
import com.tencent.mtt.hippy.views.modal.HippyModalHostView;
import com.tencent.renderer.FrameworkProxy;
import com.tencent.renderer.component.image.ImageDecoderAdapter;
import com.tencent.renderer.component.text.FontAdapter;
import com.tencent.renderer.node.RenderNode;
import com.tencent.vfs.DefaultProcessor;
import com.tencent.vfs.Processor;
import com.tencent.vfs.VfsManager;
import com.openhippy.connector.JsDriver.V8InitParams;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executor;

@SuppressWarnings({"deprecation", "unused"})
public abstract class HippyEngineManagerImpl extends HippyEngineManager implements
        DevServerCallBack, FrameworkProxy, ThreadExecutor.UncaughtExceptionHandler {

    static final String TAG = "HippyEngineManagerImpl";
    /**
     * global configuration
     */
    @NonNull
    final HippyGlobalConfigs mGlobalConfigs;
    /**
     * core bundle loader
     */
    HippyBundleLoader mCoreBundleLoader;
    /**
     * preload bundle loader
     */
    final HippyBundleLoader mPreloadBundleLoader;
    /**
     * providers
     */
    final List<HippyAPIProvider> mProviders;

    List<Processor> mProcessors;
    /**
     * Dev support manager
     */
    DevSupportManager mDevSupportManager;
    HippyEngineContextImpl mEngineContext;
    // 从网络上加载jsbundle
    final boolean mDebugMode;
    // Hippy Server的jsbundle名字，调试模式下有效
    final String mServerBundleName;
    // Hippy Server的host，调试模式下有效
    private final String mServerHost;
    // Hippy Server url using remote debug in no usb，only take effect in debugMode = true
    private final String mRemoteServerUrl;

    final boolean enableV8Serialization;
    private int mReloadRootId = -1;
    private long mInitStartTime = 0;
    private final TimeMonitor mMonitor;
    private final HippyThirdPartyAdapter mThirdPartyAdapter;
    private final V8InitParams v8InitParams;
    @Nullable
    private HashMap<Integer, Callback<Boolean>> mDestroyModuleListeners;
    private final ConcurrentHashMap<Integer, HippyInstanceInfo> mInstanceInfoMap = new ConcurrentHashMap<>();
    private static final ConcurrentHashMap<Integer, HippyGlobalConfigs> mGlobalConfigsGroup = new ConcurrentHashMap<>();

    HippyEngineManagerImpl(EngineInitParams params, HippyBundleLoader preloadBundleLoader) {
        // create core bundle loader
        HippyBundleLoader coreBundleLoader = null;
        if (!TextUtils.isEmpty(params.coreJSAssetsPath)) {
            coreBundleLoader = new HippyAssetBundleLoader(params.context, params.coreJSAssetsPath, params.codeCacheTag);
        } else if (!TextUtils.isEmpty(params.coreJSFilePath)) {
            coreBundleLoader = new HippyFileBundleLoader(params.coreJSFilePath, params.codeCacheTag);
        }
        if (params.groupId == -1) {
            mGlobalConfigs = new HippyGlobalConfigs(params);
        } else {
            HippyGlobalConfigs globalConfigs = mGlobalConfigsGroup.get(params.groupId);
            if (globalConfigs == null) {
                globalConfigs = new HippyGlobalConfigs(params);
                mGlobalConfigsGroup.put(params.groupId, globalConfigs);
            }
            mGlobalConfigs = globalConfigs;
        }
        mCoreBundleLoader = coreBundleLoader;
        mPreloadBundleLoader = preloadBundleLoader;
        mProviders = params.providers;
        mProcessors = params.processors;
        mDebugMode = params.debugMode;
        mServerBundleName = params.debugMode ? params.debugBundleName : "";
        enableV8Serialization = params.enableV8Serialization;
        mServerHost = params.debugServerHost;
        mRemoteServerUrl = params.remoteServerUrl;
        mGroupId = params.groupId;
        mThirdPartyAdapter = params.thirdPartyAdapter;
        v8InitParams = params.v8InitParams;
        mMonitor = new TimeMonitor();
    }

    @NonNull
    private HippyInstanceInfo ensureInstanceInfo(int rootId) {
        HippyInstanceInfo instanceInfo = mInstanceInfoMap.get(rootId);
        if (instanceInfo == null) {
            instanceInfo = new HippyInstanceInfo();
            mInstanceInfoMap.put(rootId, instanceInfo);
        }
        return instanceInfo;
    }

    @Override
    public void initEngine(EngineListener listener) throws IllegalStateException {
        if (mCurrentState != EngineState.UNINIT) {
            throw new IllegalStateException(
                    "Cannot repeatedly call engine initialization, current state=" + mCurrentState);
        }
        mInitStartTime = System.currentTimeMillis();
        mCurrentState = EngineState.INITING;
        if (listener != null) {
            mEventListeners.add(listener);
        }
        try {
            mDevSupportManager = new DevSupportManager(mDebugMode, mServerHost,
                    mServerBundleName, mRemoteServerUrl);
            mDevSupportManager.setDevCallback(this);
            if (mDebugMode) {
                String url = mDevSupportManager.createResourceUrl(mServerBundleName);
                mCoreBundleLoader = new HippyRemoteBundleLoader(url);
                ((HippyRemoteBundleLoader) mCoreBundleLoader).setIsDebugMode(true);
            }
            restartEngineInBackground(false);
        } catch (Throwable e) {
            mCurrentState = EngineState.INITERRORED;
            notifyEngineInitialized(EngineInitStatus.STATUS_INIT_EXCEPTION, e);
        }
    }

    @Nullable
    public View getDevButton(int rootId) {
        if (mDevSupportManager != null) {
            return mDevSupportManager.getDevImp().getDevButton(rootId);
        }
        return null;
    }

    @Override
    public void destroyEngine() {
        if (mEngineContext != null) {
            removeEngineFromGroup();
            mEngineContext.destroyBridge(false);
        }
    }

    private void removeEngineFromGroup() {
        ArrayList<Integer> engineList = mEngineGroup.get(mGroupId);
        if (engineList != null) {
            Integer engineId = getEngineId();
            engineList.remove(engineId);
            if (engineList.isEmpty()) {
                mEngineGroup.remove(mGroupId);
            }
        }
    }

    protected void onDestroyEngine() {
        mCurrentState = EngineState.DESTROYED;
        boolean isEngineGroupEmpty = true;
        if (mEngineContext != null) {
            isEngineGroupEmpty = mEngineContext.isEngineGroupEmpty();
            mEngineContext.destroy(false);
        }
        for (HippyInstanceInfo instanceInfo : mInstanceInfoMap.values()) {
            instanceInfo.onDestroy();
        }
        mInstanceInfoMap.clear();
        if (mDestroyModuleListeners != null) {
            mDestroyModuleListeners.clear();
            mDestroyModuleListeners = null;
        }
        if (mProviders != null) {
            mProviders.clear();
        }
        if (mProcessors != null) {
            mProcessors.clear();
        }
        if (isEngineGroupEmpty) {
            mGlobalConfigs.destroyIfNeed();
            mGlobalConfigsGroup.remove(mGroupId);
        }
        mExtendDatas.clear();
        mEventListeners.clear();
    }

    @Override
    public void onFirstPaint(int rootId) {
        mEngineContext.getJsDriver().recordFirstPaintEndTime(System.currentTimeMillis(), rootId);
        mEngineContext.getMonitor().addPoint(TimeMonitor.MONITOR_GROUP_PAINT,
                TimeMonitor.MONITOR_POINT_FIRST_CONTENTFUL_PAINT);
        mGlobalConfigs.getEngineMonitorAdapter().onFirstPaintCompleted(mEngineContext.getComponentName(rootId));
        HippyInstanceInfo instanceInfo = mInstanceInfoMap.get(rootId);
        if (instanceInfo != null && instanceInfo.moduleListener != null) {
            instanceInfo.moduleListener.onFirstViewAdded();
        }
    }

    @Override
    public void onFirstContentfulPaint(int rootId) {
        mEngineContext.getJsDriver().recordFirstContentfulPaintEndTime(System.currentTimeMillis());
        mEngineContext.getMonitor().endGroup(TimeMonitor.MONITOR_GROUP_PAINT);
        mGlobalConfigs.getEngineMonitorAdapter().onFirstContentfulPaintCompleted(mEngineContext.getComponentName(rootId));
    }

    @Override
    public void onSizeChanged(int rootId, int w, int h, int ow, int oh) {
        if (mEngineContext != null) {
            HippyModuleManager manager = mEngineContext.getModuleManager();
            if (manager != null) {
                HippyMap hippyMap = new HippyMap();
                hippyMap.pushDouble("width", PixelUtil.px2dp(w));
                hippyMap.pushDouble("height", PixelUtil.px2dp(h));
                hippyMap.pushDouble("oldWidth", PixelUtil.px2dp(ow));
                hippyMap.pushDouble("oldHeight", PixelUtil.px2dp(oh));
                manager.getJavaScriptModule(EventDispatcher.class)
                        .receiveNativeEvent("onSizeChanged", hippyMap);
            }
        }
    }

    @Override
    public void updateDimension(int width, int height) {
        if (mEngineContext == null) {
            return;
        }
        Context context = mEngineContext.getGlobalConfigs().getContext();
        HippyMap dimensionMap = DimensionsUtil
                .getDimensions(width, height, context);
        int dimensionW = 0;
        int dimensionH = 0;
        if (dimensionMap != null) {
            HippyMap windowMap = dimensionMap.getMap("windowPhysicalPixels");
            dimensionW = windowMap.getInt("width");
            dimensionH = windowMap.getInt("height");
            LogUtils.i(TAG, "updateDimension: " + dimensionMap);
        }
        if (height < 0 || dimensionW == dimensionH) {
            HippyDeviceAdapter deviceAdapter = mEngineContext.getGlobalConfigs().getDeviceAdapter();
            if (deviceAdapter != null) {
                deviceAdapter.reviseDimensionIfNeed(context, dimensionMap);
            }
        }
        DimensionsUtil.convertDimensionsToDp(dimensionMap);
        if (mEngineContext.getModuleManager() != null) {
            mEngineContext.getModuleManager().getJavaScriptModule(Dimensions.class)
                    .set(dimensionMap);
        }
    }

    @Override
    public FontAdapter getFontAdapter() {
        return mEngineContext.getGlobalConfigs().getFontScaleAdapter();
    }

    @Override
    public LogAdapter getLogAdapter() {
        return mEngineContext.getGlobalConfigs().getLogAdapter();
    }

    @Override
    public ImageDecoderAdapter getImageDecoderAdapter() {
        return mEngineContext.getGlobalConfigs().getImageDecoderAdapter();
    }

    @NonNull
    public VfsManager getVfsManager() {
        return mEngineContext.getVfsManager();
    }

    @Nullable
    public Executor getBackgroundExecutor() {
        HippyExecutorSupplierAdapter adapter = mEngineContext.getGlobalConfigs()
                .getExecutorSupplierAdapter();
        return (adapter != null) ? adapter.getBackgroundTaskExecutor() : null;
    }

    @Override
    public Object getCustomViewCreator(int rootId) {
        HippyInstanceInfo instanceInfo = mInstanceInfoMap.get(rootId);
        if (instanceInfo != null && instanceInfo.moduleLoadParams != null
                && instanceInfo.moduleLoadParams.nativeParams != null) {
            return instanceInfo.moduleLoadParams.nativeParams.get(HippyCustomViewCreator.HIPPY_CUSTOM_VIEW_CREATOR);
        }
        return null;
    }

    @Override
    public String getBundlePath(int rootId) {
        HippyInstanceInfo instanceInfo = mInstanceInfoMap.get(rootId);
        if (instanceInfo != null && instanceInfo.bundleLoader != null) {
            return instanceInfo.bundleLoader.getPath();
        }
        return null;
    }

    @Override
    public int getEngineId() {
        return super.getEngineId();
    }

    @Override
    public void handleNativeException(Exception exception) {
        mGlobalConfigs.getExceptionHandler().handleNativeException(exception, true);
    }

    public void recordSnapshot(@NonNull View rootView, @NonNull final Callback<byte[]> callback) {
        if (mEngineContext != null) {
            mEngineContext.getRenderer().recordSnapshot(rootView.getId(), callback);
        }
    }

    @Nullable
    public View replaySnapshot(@NonNull Context context, @NonNull byte[] buffer) {
        if (mEngineContext != null) {
            return mEngineContext.getRenderer().replaySnapshot(context, buffer);
        }
        return null;
    }

    @Nullable
    public View replaySnapshot(@NonNull Context context, @NonNull Map<String, Object> snapshotMap) {
        if (mEngineContext != null) {
            return mEngineContext.getRenderer().replaySnapshot(context, snapshotMap);
        }
        return null;
    }

    public void removeSnapshotView() {
        if (mEngineContext != null) {
            mEngineContext.getRenderer().removeSnapshotView();
        }
    }

    public void getScreenshotBitmapForView(@Nullable Context context, int rootId, int id,
            @NonNull final ScreenshotBuildCallback callback) {
        if (mEngineContext == null) {
            throw new IllegalArgumentException("engine context is null");
        }
        View view = mEngineContext.findViewById(rootId, id);
        if (view == null) {
            throw new IllegalArgumentException("can not find view by id");
        }
        getScreenshotBitmapForView(context, view, callback);
    }

    private Window getDialogWindow(@NonNull RenderNode node) {
        View hostView = mEngineContext.findViewById(node.getRootId(), node.getId());
        if (hostView instanceof HippyModalHostView) {
            Dialog dialog = ((HippyModalHostView) hostView).getDialog();
            if (dialog != null) {
                return dialog.getWindow();
            }
        }
        return null;
    }

    private Window getViewWindow(@NonNull Activity activity, @NonNull View view) {
        Window window = null;
        RenderNode node = RenderManager.getRenderNode(view);
        if (node == null) {
            return activity.getWindow();
        }
        if (node.getClassName().equals(HippyModalHostManager.CLASS_NAME)) {
            window = getDialogWindow(node);
        }
        if (window == null) {
            RenderNode parent = node.getParent();
            while (parent != null) {
                if (parent.getClassName().equals(HippyModalHostManager.CLASS_NAME)) {
                    window = getDialogWindow(parent);
                    break;
                }
                parent = parent.getParent();
            }
        }
        return window == null ? activity.getWindow() : window;
    }

    public void getScreenshotBitmapForView(@Nullable Context context, @NonNull View view,
            @NonNull final ScreenshotBuildCallback callback) {
        final int width = view.getWidth();
        final int height = view.getHeight();
        if (width <= 0 || height <= 0) {
            String error = "error view size: width " + width + ", height " + height;
            throw new IllegalArgumentException(error);
        }
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                if (!(context instanceof Activity)) {
                    context = view.getContext();
                    if (context instanceof ContextWrapper) {
                        context = ((ContextWrapper) context).getBaseContext();
                    }
                    if (!(context instanceof Activity)) {
                        throw new IllegalArgumentException("context is not activity");
                    }
                }
                // Above Android O, use PixelCopy, because another way view.draw will cause Software rendering
                // doesn't support hardware bitmaps
                int[] location = new int[2];
                view.getLocationInWindow(location);
                Window window = getViewWindow((Activity) context, view);
                final Bitmap finalBitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
                PixelCopy.request(window,
                        new Rect(location[0], location[1], location[0] + view.getWidth(),
                                location[1] + view.getHeight()),
                        finalBitmap, new OnPixelCopyFinishedListener() {
                            @Override
                            public void onPixelCopyFinished(int copyResult) {
                                callback.onScreenshotBuildCompleted(finalBitmap, copyResult);
                            }
                        }, new Handler(Looper.getMainLooper()));
            } else {
                Bitmap bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
                Canvas canvas = new Canvas(bitmap);
                canvas.drawColor(Color.WHITE);
                view.draw(canvas);
                callback.onScreenshotBuildCompleted(bitmap, PixelCopy.SUCCESS);
            }
        } catch (OutOfMemoryError e) {
            callback.onScreenshotBuildCompleted(null, PixelCopy.ERROR_DESTINATION_INVALID);
        }
    }

    public void addControllers(@NonNull List<HippyAPIProvider> providers) {
        if (mEngineContext != null) {
            List<Class<?>> controllers = null;
            for (HippyAPIProvider provider : providers) {
                if (provider != null && provider.getControllers() != null) {
                    if (controllers == null) {
                        controllers = new ArrayList<>();
                    }
                    controllers.addAll(provider.getControllers());
                }
            }
            if (controllers != null) {
                mEngineContext.getRenderer().addControllers(controllers);
            }
        }
    }

    public void addModules(@NonNull List<HippyAPIProvider> providers) {
        if (mEngineContext != null) {
            mEngineContext.getModuleManager().addModules(providers);
        }
    }

    private void checkModuleLoadParams(ModuleLoadParams loadParams) {
        if (loadParams == null) {
            throw new RuntimeException("Hippy: loadModule loadParams must no be null");
        }
        if (loadParams.context == null) {
            throw new RuntimeException("Hippy: loadModule loadParams.context must no be null");
        }
        if (!mDebugMode && TextUtils.isEmpty(loadParams.jsAssetsPath) && TextUtils
                .isEmpty(loadParams.jsFilePath)) {
            throw new RuntimeException(
                    "Hippy: loadModule debugMode=true, loadParams.jsAssetsPath and jsFilePath both null!");
        }
        if (loadParams.jsParams == null) {
            loadParams.jsParams = new HippyMap();
        }
        if (!TextUtils.isEmpty(loadParams.jsAssetsPath)) {
            loadParams.jsParams.pushString("sourcePath", loadParams.jsAssetsPath);
        } else {
            loadParams.jsParams.pushString("sourcePath", loadParams.jsFilePath);
        }
    }

    public ViewGroup loadInstance(ModuleLoadParams loadParams, ModuleListener listener) {
        if (mCurrentState == EngineState.DESTROYED) {
            LogUtils.e(TAG, "load instance error wrong state, Engine destroyed");
            return null;
        }
        checkModuleLoadParams(loadParams);
        ViewGroup rootView = (ViewGroup) mEngineContext.createRootView(loadParams.context);
        if (rootView == null) {
            LogUtils.e(TAG, "load instance error rootView==null");
            return null;
        }
        int rootId = rootView.getId();
        HippyInstanceInfo instanceInfo = ensureInstanceInfo(rootId);
        instanceInfo.rootView = rootView;
        instanceInfo.moduleLoadParams = loadParams;
        instanceInfo.moduleListener = listener;
        if (loadParams.bundleLoader != null) {
            instanceInfo.bundleLoader = loadParams.bundleLoader;
        } else {
            if (!TextUtils.isEmpty(loadParams.jsAssetsPath)) {
                instanceInfo.bundleLoader = new HippyAssetBundleLoader(loadParams.context, loadParams.jsAssetsPath,
                        loadParams.codeCacheTag);
            } else if (!TextUtils.isEmpty(loadParams.jsFilePath)) {
                instanceInfo.bundleLoader = new HippyFileBundleLoader(loadParams.jsFilePath, loadParams.codeCacheTag);
            }
        }
        mDevSupportManager.attachToHost(loadParams.context, rootId);
        mEngineContext.getBridgeManager()
                .loadInstance(instanceInfo.moduleLoadParams.componentName, instanceInfo.rootView.getId(),
                        instanceInfo.moduleLoadParams.jsParams);
        return rootView;
    }

    @Override
    public ViewGroup loadModule(ModuleLoadParams loadParams) {
        return loadModule(loadParams, null);
    }

    @Override
    public ViewGroup loadModule(ModuleLoadParams loadParams, ModuleListener listener) {
        if (mCurrentState == EngineState.DESTROYED) {
            notifyModuleLoaded(-1, ModuleLoadStatus.STATUS_ENGINE_UNINIT,
                    "load module error wrong state, Engine destroyed");
            return null;
        }
        checkModuleLoadParams(loadParams);
        ViewGroup rootView = (ViewGroup) mEngineContext.createRootView(loadParams.context);
        if (rootView == null) {
            notifyModuleLoaded(-1, ModuleLoadStatus.STATUS_VARIABLE_NULL,
                    "load module error rootView==null");
            return null;
        }
        int rootId = rootView.getId();
        HippyInstanceInfo instanceInfo = ensureInstanceInfo(rootId);
        instanceInfo.rootView = rootView;
        instanceInfo.moduleLoadParams = loadParams;
        instanceInfo.moduleListener = listener;
        if (loadParams.bundleLoader != null) {
            instanceInfo.bundleLoader = loadParams.bundleLoader;
        } else {
            if (!TextUtils.isEmpty(loadParams.jsAssetsPath)) {
                instanceInfo.bundleLoader = new HippyAssetBundleLoader(loadParams.context, loadParams.jsAssetsPath,
                        loadParams.codeCacheTag);
            } else if (!TextUtils.isEmpty(loadParams.jsFilePath)) {
                instanceInfo.bundleLoader = new HippyFileBundleLoader(loadParams.jsFilePath, loadParams.codeCacheTag);
            }
        }
        mDevSupportManager.attachToHost(loadParams.context, rootId);
        if (mCurrentState == EngineState.INITED) {
            loadJsModule(instanceInfo);
        } else {
            notifyModuleLoaded(rootId, ModuleLoadStatus.STATUS_ENGINE_UNINIT,
                    "error wrong state, Engine state not INITED, state:" + mCurrentState);
        }
        return rootView;
    }

    @Override
    public void destroyModule(@NonNull Callback<Boolean> callback) {
        List<Integer> ids = new ArrayList<>();
        ViewGroup rootView = null;
        for (HippyInstanceInfo instanceInfo : mInstanceInfoMap.values()) {
            if (instanceInfo.rootView != null) {
                ids.add(instanceInfo.rootView.getId());
                rootView = instanceInfo.rootView;
            }
        }
        if (rootView != null && callback != null) {
            if (mDestroyModuleListeners == null) {
                mDestroyModuleListeners = new HashMap<>();
            }
            mDestroyModuleListeners.put(rootView.getId(), callback);
        }
        if (mEngineContext != null && mEngineContext.getBridgeManager() != null) {
            mEngineContext.getBridgeManager().destroyInstance(ids);
        }
    }

    @Override
    public void destroyModule(int rootId, @NonNull Callback<Boolean> callback) {
        if (callback != null) {
            if (mDestroyModuleListeners == null) {
                mDestroyModuleListeners = new HashMap<>();
            }
            mDestroyModuleListeners.put(rootId, callback);
        }
        if (mEngineContext != null && mEngineContext.getBridgeManager() != null) {
            mEngineContext.getBridgeManager().destroyInstance(rootId);
        }
    }

    @MainThread
    @Override
    public void destroyModule(@Nullable ViewGroup rootView, @NonNull Callback<Boolean> callback) {
        if (rootView == null) {
            callback.callback(true, null);
        } else {
            destroyModule(rootView.getId(), callback);
        }
    }

    public HippyEngineContextImpl getEngineContext() {
        return mEngineContext;
    }

    @Override
    public void onEnginePause() {
        if (mEngineContext == null) {
            return;
        }
        if (mEngineContext.mEngineLifecycleEventListeners != null) {
            for (HippyEngineLifecycleEventListener listener : mEngineContext.mEngineLifecycleEventListeners) {
                listener.onEnginePause();
            }
        }
        mEngineContext.onInstancePause();
    }

    @Override
    public void onEngineResume() {
        if (mEngineContext == null) {
            return;
        }
        if (mEngineContext.mEngineLifecycleEventListeners != null) {
            for (HippyEngineLifecycleEventListener listener : mEngineContext.mEngineLifecycleEventListeners) {
                listener.onEngineResume();
            }
        }
        mEngineContext.onInstanceResume();
    }

    @Override
    public void sendEvent(String event, Object params, BridgeTransferType transferType) {
        if (mEngineContext != null && mEngineContext.getModuleManager() != null) {
            mEngineContext.getModuleManager().getJavaScriptModule(EventDispatcher.class)
                    .receiveNativeEvent(event, params, transferType);
        }
    }

    @Override
    public void sendEvent(String event, Object params) {
        sendEvent(event, params, BridgeTransferType.BRIDGE_TRANSFER_TYPE_NORMAL);
    }

    @Override
    public void preloadModule(HippyBundleLoader loader) {
        if (mEngineContext != null && mEngineContext.getBridgeManager() != null) {
            mEngineContext.getBridgeManager().runBundle(-1, loader);
        }
    }

    @Override
    public boolean onBackPressed(BackPressHandler handler) {
        if (mEngineContext != null
                && mEngineContext.getModuleManager().getNativeModule(DeviceEventModule.class)
                != null) {
            return mEngineContext.getModuleManager().getNativeModule(DeviceEventModule.class)
                    .onBackPressed(handler);
        } else {
            return false;
        }
    }

    @Override
    public boolean onBackPress(final DeviceEventModule.InvokeDefaultBackPress invokeImp) {
        BackPressHandler handler = new BackPressHandler() {
            @Override
            public void handleBackPress() {
                if (invokeImp != null) {
                    invokeImp.callSuperOnBackPress();
                }
            }
        };
        return onBackPressed(handler);
    }

    @Override
    public boolean isDebugMode() {
        return mDebugMode;
    }

    private void notifyModuleLoaded(int rootId, final ModuleLoadStatus statusCode, final String msg) {
        HippyInstanceInfo instanceInfo = mInstanceInfoMap.get(rootId);
        if (instanceInfo != null && instanceInfo.moduleListener != null) {
            final ModuleListener moduleListener = instanceInfo.moduleListener;
            Runnable runnable = new Runnable() {
                @Override
                public void run() {
                    if (moduleListener != null) {
                        moduleListener.onLoadCompleted(statusCode, msg);
                    }
                }
            };
            if (UIThreadUtils.isOnUiThread()) {
                runnable.run();
            } else {
                UIThreadUtils.runOnUiThread(runnable);
            }
        }
    }

    void notifyEngineInitialized(final EngineInitStatus statusCode, final Throwable error) {
        if (mPreloadBundleLoader != null) {
            LogUtils.d(TAG, "preload bundle loader");
            preloadModule(mPreloadBundleLoader);
        }
        onEngineInitialized(statusCode, error);
    }

    private void onEngineInitialized(EngineInitStatus statusCode, Throwable error) {
        mGlobalConfigs.getEngineMonitorAdapter().onEngineInitialized(statusCode);
        for (EngineListener listener : mEventListeners) {
            listener.onInitialized(statusCode, error == null ? null : error.toString());
        }
        mEventListeners.clear();
    }

    private synchronized void restartEngineInBackground(boolean onReLoad) {
        mMonitor.beginGroup(TimeMonitor.MONITOR_GROUP_INIT_ENGINE);
        mMonitor.addPoint(TimeMonitor.MONITOR_GROUP_INIT_ENGINE, TimeMonitor.MONITOR_POINT_INIT_NATIVE_ENGINE);
        if (mCurrentState == EngineState.DESTROYED) {
            String errorMsg =
                    "restartEngineInBackground... error STATUS_WRONG_STATE, state=" + mCurrentState;
            notifyEngineInitialized(EngineInitStatus.STATUS_WRONG_STATE, new Throwable(errorMsg));
            return;
        }
        if (mCurrentState != EngineState.INITING) {
            mCurrentState = EngineState.ONRESTART;
        }
        DomManager domManager = null;
        if (onReLoad && mEngineContext != null) {
            if (mDebugMode) {
                domManager = mEngineContext.getDomManager();
                mEngineContext.destroy(true);
            } else {
                mEngineContext.destroy(false);
            }
        }
        try {
            mEngineContext = new HippyEngineContextImpl(domManager);
        } catch (RuntimeException e) {
            LogUtils.e(TAG, "new HippyEngineContextImpl(): " + e.getMessage());
            notifyEngineInitialized(EngineInitStatus.STATUS_INIT_EXCEPTION, e);
            return;
        }
        mEngineContext.getBridgeManager().initBridge(new Callback<Boolean>() {
            @Override
            public void callback(Boolean result, Throwable e) {
                if (mCurrentState != EngineState.INITING
                        && mCurrentState != EngineState.ONRESTART) {
                    LogUtils.e(TAG,
                            "initBridge callback error STATUS_WRONG_STATE, state=" + mCurrentState);
                    notifyEngineInitialized(EngineInitStatus.STATUS_WRONG_STATE, e);
                    return;
                }
                if (mCurrentState == EngineState.ONRESTART) {
                    HippyInstanceInfo instanceInfo = mInstanceInfoMap.get(mReloadRootId);
                    if (instanceInfo != null) {
                        loadJsModule(instanceInfo);
                    } else {
                        mCurrentState = EngineState.INITERRORED;
                        notifyEngineInitialized(EngineInitStatus.STATUS_INIT_EXCEPTION,
                                new Throwable("reload instanceInfo==null rootId=" + mReloadRootId));
                        return;
                    }
                }
                EngineState state = mCurrentState;
                mCurrentState = result ? EngineState.INITED : EngineState.INITERRORED;
                if (state != EngineState.ONRESTART) {
                    notifyEngineInitialized(
                            result ? EngineInitStatus.STATUS_OK : EngineInitStatus.STATUS_ERR_BRIDGE, e);
                } else {
                    LogUtils.e(TAG,
                            "initBridge callback error STATUS_WRONG_STATE, state=" + mCurrentState);
                    notifyEngineInitialized(EngineInitStatus.STATUS_WRONG_STATE, e);
                }
            }
        }, onReLoad);
    }

    /**
     * After init engine callback, send load instance message to js invoke render If debug mode js bundle load with
     * common bundle after init engine
     */
    private void loadJsModule(@NonNull HippyInstanceInfo instanceInfo) {
        if (!mDebugMode) {
            if (instanceInfo.bundleLoader != null) {
                mEngineContext.getBridgeManager()
                        .runBundle(instanceInfo.rootView.getId(), instanceInfo.bundleLoader);
            } else {
                notifyModuleLoaded(instanceInfo.rootView.getId(), ModuleLoadStatus.STATUS_VARIABLE_NULL,
                        "load module error. bundleLoader==null");
                return;
            }
        }
        mEngineContext.getBridgeManager()
                .loadInstance(instanceInfo.moduleLoadParams.componentName, instanceInfo.rootView.getId(),
                        instanceInfo.moduleLoadParams.jsParams);
        if (mDebugMode) {
            notifyModuleLoaded(instanceInfo.rootView.getId(), ModuleLoadStatus.STATUS_OK, null);
        }
    }

    public List<Integer> getRootIds() {
        List<Integer> rootIds = null;
        for (HippyInstanceInfo info : mInstanceInfoMap.values()) {
            if (info.rootView != null) {
                if (rootIds == null) {
                    rootIds = new ArrayList<>();
                }
                rootIds.add(info.rootView.getId());
            }
        }
        return rootIds;
    }

    @Override
    public List<Integer> getRootAvailableForReload() {
        return getRootIds();
    }

    @Override
    public void onDebugReLoad(int rootId) {
        mReloadRootId = rootId;
        destroyModule(rootId, new Callback<Boolean>() {
            @Override
            public void callback(@Nullable Boolean result, @Nullable Throwable e) {
                mEngineContext.destroyBridge(true);
            }
        });
    }

    @Override
    public void onInitDevError(Throwable e) {
        mCurrentState = EngineState.INITED;
        notifyEngineInitialized(EngineInitStatus.STATUS_ERR_DEVSERVER, e);
    }

    public abstract ThreadExecutor getThreadExecutor();

    public abstract int getBridgeType();

    @Override
    public void handleThreadUncaughtException(Thread t, Throwable e, Integer groupId) {
        if (mDebugMode && mDevSupportManager != null) {
            mDevSupportManager.handleException(e);
        } else {
            mGlobalConfigs.getExceptionHandler()
                    .handleNativeException(new RuntimeException(e), false);
        }
    }

    @Deprecated
    public ViewGroup loadInstance(HippyRootViewParams params) {
        return loadInstance(params, null);
    }

    @Deprecated
    public ViewGroup loadInstance(HippyRootViewParams params, ModuleListener listener) {
        ModuleLoadParams loadParams = new ModuleLoadParams();
        loadParams.context = params.getActivity();
        loadParams.componentName = params.getName();
        // getBundleLoader可能为空，debugMode = false的时候
        HippyBundleLoader loader = params.getBundleLoader();
        if (loader instanceof HippyAssetBundleLoader) {
            loadParams.jsAssetsPath = params.getBundleLoader().getRawPath();
        } else if (loader instanceof HippyFileBundleLoader) {
            loadParams.jsFilePath = params.getBundleLoader().getRawPath();
        }
        loadParams.jsParams = params.getLaunchParams();
        loadParams.nativeParams = params.getNativeParams();
        loadParams.bundleLoader = params.getBundleLoader();
        return loadModule(loadParams, listener);
    }

    private class HippyInstanceInfo {

        public ViewGroup rootView;
        public ModuleLoadParams moduleLoadParams;
        public HippyBundleLoader bundleLoader;
        public ModuleListener moduleListener;

        public void onDestroy() {
            if (moduleLoadParams != null && moduleLoadParams.nativeParams != null) {
                moduleLoadParams.nativeParams.clear();
            }
            rootView = null;
            moduleLoadParams = null;
            bundleLoader = null;
            moduleListener = null;
        }
    }

    public class HippyEngineContextImpl implements HippyEngineContext,
            HippyInstanceLifecycleEventListener {

        @NonNull
        private final HippyModuleManager mModuleManager;
        @NonNull
        private final HippyBridgeManager mBridgeManager;
        @NonNull
        private final RenderConnector mRenderer;
        @NonNull
        private final DomManager mDomManager;
        @NonNull
        private final JsDriver mJsDriver;
        @NonNull
        private final VfsManager mVfsManager;
        @Nullable
        private DevtoolsManager mDevtoolsManager;
        @Nullable
        volatile CopyOnWriteArrayList<HippyEngineLifecycleEventListener> mEngineLifecycleEventListeners;

        public HippyEngineContextImpl(@Nullable DomManager domManager) throws RuntimeException {
            mVfsManager = (mProcessors != null) ? new VfsManager(mProcessors) : new VfsManager();
            mVfsManager.setId(onCreateVfs(mVfsManager));
            DefaultProcessor defaultProcessor = new DefaultProcessor(new HippyResourceLoader(this));
            PerformanceProcessor performanceProcessor = new PerformanceProcessor(this);
            mVfsManager.addProcessorAtFirst(performanceProcessor);
            mVfsManager.addProcessorAtLast(defaultProcessor);
            if (mDebugMode) {
                mDevtoolsManager = new DevtoolsManager(true);
                String localCachePath = getGlobalConfigs().getContext().getCacheDir()
                        .getAbsolutePath();
                mDevtoolsManager.create(localCachePath,
                        getDevSupportManager().createDebugUrl(mServerHost, mReloadRootId));
                //mVfsManager.addProcessorAtFirst(new DevtoolsProcessor(mDevtoolsManager.getId()));
            }
            mModuleManager = new HippyModuleManagerImpl(this, mProviders,
                    enableV8Serialization);
            mJsDriver = new JsDriver();
            mBridgeManager = new HippyBridgeManagerImpl(this, mCoreBundleLoader,
                    getBridgeType(), enableV8Serialization, mDebugMode,
                    mServerHost, mGroupId, mThirdPartyAdapter, v8InitParams, mJsDriver, mInitStartTime);
            mDomManager = (domManager != null) ? domManager : new DomManager(mGroupId);
            mRenderer = createRenderer(RenderConnector.NATIVE_RENDERER);
            mDomManager.attachToRenderer(mRenderer);
            mRenderer.attachToDom(mDomManager);
            mRenderer.setFrameworkProxy(HippyEngineManagerImpl.this, mGroupId);
            List<Class<?>> controllers = null;
            for (HippyAPIProvider provider : mProviders) {
                if (provider != null && provider.getControllers() != null) {
                    if (controllers == null) {
                        controllers = new ArrayList<>();
                    }
                    controllers.addAll(provider.getControllers());
                }
            }
            mRenderer.init(controllers, getDebugRootView());
        }

        private ViewGroup getDebugRootView() {
            if (mReloadRootId == -1) {
                return null;
            }
            for (HippyInstanceInfo info : mInstanceInfoMap.values()) {
                if (info.rootView != null && info.rootView.getId() == mReloadRootId) {
                    return info.rootView;
                }
            }
            return null;
        }

        private RenderConnector createRenderer(String rendererName) {
            RenderConnector renderer = null;
            try {
                Class rendererClass = Class.forName("com.openhippy.connector." + rendererName);
                renderer = (RenderConnector) (rendererClass.newInstance());
            } catch (Throwable e) {
                e.printStackTrace();
            }
            if (renderer == null) {
                throw new RuntimeException(
                        "Serious error: Failed to create renderer instance!");
            }
            return renderer;
        }

        @Override
        public void onRuntimeInitialized() {
            mJsDriver.attachToDom(mDomManager);
            ViewGroup rootView = getDebugRootView();
            if (rootView != null && (mDebugMode || BuildConfig.DEBUG)) {
                mDomManager.createRoot(rootView, PixelUtil.getDensity());
                mDomManager.attachToRoot(rootView);
                mJsDriver.attachToRoot(rootView);
                if (mDevtoolsManager != null) {
                    mDevtoolsManager.attachToRoot(rootView);
                }
                mRenderer.onRuntimeInitialized(rootView.getId());
            }
            if (mDevtoolsManager != null) {
                mDevtoolsManager.bind(mJsDriver, mDomManager, mRenderer);
            }
        }

        @Override
        public void onRootViewsRemoved(JSDenseArray roots) {
            if (roots != null && roots.size() > 0) {
                for (int i = 0; i < roots.size(); i++) {
                    Object rootObject = roots.get(i);
                    if (rootObject instanceof Integer) {
                        onInstanceDestroy(((Integer) rootObject));
                    }
                }
            } else {
                for (HippyInstanceInfo info : mInstanceInfoMap.values()) {
                    if (info.rootView != null) {
                        onInstanceDestroy(info.rootView.getId());
                    }
                }
            }
        }

        @Override
        @NonNull
        public JsDriver getJsDriver() {
            return mJsDriver;
        }

        @NonNull
        DomManager getDomManager() {
            return mDomManager;
        }

        @NonNull
        RenderConnector getRenderer() {
            return mRenderer;
        }

        @Override
        public String getComponentName(int rootId) {
            HippyInstanceInfo instanceInfo = mInstanceInfoMap.get(rootId);
            if (instanceInfo != null && instanceInfo.moduleLoadParams != null) {
                return instanceInfo.moduleLoadParams.componentName;
            } else {
                List<String> componentNames = new ArrayList<>();
                for (HippyInstanceInfo info : mInstanceInfoMap.values()) {
                    if (info.moduleLoadParams != null && !TextUtils.isEmpty(info.moduleLoadParams.componentName)) {
                        componentNames.add(info.moduleLoadParams.componentName);
                    }
                }
                return componentNames.isEmpty() ? "" : TextUtils.join(",", componentNames);
            }
        }

        @Override
        @Nullable
        public HashMap<String, Object> getNativeParams(int rootId) {
            HippyInstanceInfo instanceInfo = mInstanceInfoMap.get(rootId);
            if (instanceInfo != null && instanceInfo.moduleLoadParams != null) {
                return instanceInfo.moduleLoadParams.nativeParams;
            } else {
                HashMap<String, Object> nativeParams = new HashMap<>();
                for (HippyInstanceInfo info : mInstanceInfoMap.values()) {
                    if (info.moduleLoadParams != null && info.moduleLoadParams.nativeParams != null) {
                        nativeParams.putAll(info.moduleLoadParams.nativeParams);
                    }
                }
                return nativeParams;
            }
        }

        @Override
        public HippyGlobalConfigs getGlobalConfigs() {
            return mGlobalConfigs;
        }

        @Override
        @NonNull
        public TimeMonitor getMonitor() {
            return mMonitor;
        }

        @Override
        @NonNull
        public VfsManager getVfsManager() {
            return mVfsManager;
        }

        @Override
        public HippyModuleManager getModuleManager() {
            return mModuleManager;
        }

        @Override
        public DevSupportManager getDevSupportManager() {
            return mDevSupportManager;
        }

        @Override
        public DevtoolsManager getDevtoolsManager() {
            return mDevtoolsManager;
        }

        @Override
        public ThreadExecutor getThreadExecutor() {
            return HippyEngineManagerImpl.this.getThreadExecutor();
        }

        @Override
        public HippyBridgeManager getBridgeManager() {
            return mBridgeManager;
        }

        @Override
        public void addEngineLifecycleEventListener(HippyEngineLifecycleEventListener listener) {
            if (listener == null) {
                return;
            }
            if (mEngineLifecycleEventListeners == null) {
                synchronized (HippyEngineContextImpl.class) {
                    if (mEngineLifecycleEventListeners == null) {
                        mEngineLifecycleEventListeners = new CopyOnWriteArrayList<>();
                    }
                }
            }
            mEngineLifecycleEventListeners.add(listener);
        }

        @Override
        public void removeEngineLifecycleEventListener(HippyEngineLifecycleEventListener listener) {
            if (mEngineLifecycleEventListeners != null && listener != null) {
                mEngineLifecycleEventListeners.remove(listener);
            }
        }

        @Override
        public void onInstanceLoad(int rootId) {

        }

        @Override
        public void onInstanceResume() {
            mRenderer.onResume();
            if (getBridgeManager() != null) {
                List<Integer> rootIds = getRootIds();
                if (rootIds != null) {
                    getBridgeManager().resumeInstance(rootIds);
                }
            }
        }

        @Override
        public void onInstancePause() {
            mRenderer.onPause();
            if (getBridgeManager() != null) {
                List<Integer> rootIds = getRootIds();
                if (rootIds != null) {
                    getBridgeManager().pauseInstance(rootIds);
                }
            }
        }

        @Override
        public void onInstanceDestroy(int rootId) {
            mDomManager.releaseRoot(rootId);
            mDomManager.destroyRoot(rootId);
            mRenderer.destroyRoot(rootId);
            if (mDestroyModuleListeners != null) {
                Callback<Boolean> callback = mDestroyModuleListeners.get(rootId);
                if (callback != null) {
                    callback.callback(true, null);
                }
                mDestroyModuleListeners.remove(rootId);
            }
        }

        @Override
        public void handleException(Throwable throwable) {
            if (mDebugMode && mDevSupportManager != null) {
                mDevSupportManager.handleException(throwable);
            } else {
                if (throwable instanceof HippyJsException) {
                    mGlobalConfigs.getExceptionHandler()
                            .handleJsException((HippyJsException) throwable);
                    for (HippyInstanceInfo info : mInstanceInfoMap.values()) {
                        if (info.moduleListener != null) {
                            info.moduleListener.onJsException((HippyJsException) throwable);
                        }
                    }
                } else {
                    mGlobalConfigs.getExceptionHandler()
                            .handleNativeException(new RuntimeException(throwable), true);
                }
            }
        }

        @Override
        public int getEngineId() {
            return HippyEngineManagerImpl.this.getEngineId();
        }

        @Override
        public int getGroupId() {
            return HippyEngineManagerImpl.this.getGroupId();
        }

        @Override
        public boolean isEngineGroupEmpty() {
            ArrayList<Integer> engineList = mEngineGroup.get(mGroupId);
            return engineList == null || engineList.isEmpty();
        }

        @Override
        public int getDomManagerId() {
            return mDomManager.getInstanceId();
        }

        @Override
        public int getVfsId() {
            return mVfsManager.getId();
        }

        public int getDevtoolsId() {
            return mDevtoolsManager != null ? mDevtoolsManager.getId() : -1;
        }

        @Nullable
        public View findViewById(int rootId, int nodeId) {
            return (mRenderer instanceof NativeRenderConnector)
                    ? ((NativeRenderConnector) mRenderer).findViewById(nodeId, nodeId)
                    : null;
        }

        @Nullable
        public View createRootView(@NonNull Context context) {
            View rootView = mRenderer.createRootView(context);
            if (rootView != null) {
                mDomManager.createRoot(rootView, PixelUtil.getDensity());
                mDomManager.attachToRoot(rootView);
                mJsDriver.attachToRoot(rootView);
                if (mDevtoolsManager != null) {
                    mDevtoolsManager.attachToRoot(rootView);
                }
            }
            return rootView;
        }

        @Override
        public void onBridgeDestroyed(final boolean isReload, Throwable e) {
            UIThreadUtils.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (isReload) {
                        restartEngineInBackground(true);
                    } else {
                        onDestroyEngine();
                    }
                }
            });
        }

        @Override
        public void onLoadModuleCompleted(int rootId, ModuleLoadStatus statusCode, @Nullable String msg) {
            notifyModuleLoaded(rootId, statusCode, msg);
            mGlobalConfigs.getEngineMonitorAdapter()
                    .onLoadModuleCompleted(statusCode, mEngineContext.getComponentName(rootId));
        }

        @Override
        public void onLoadInstanceCompleted(long result, String reason) {

        }

        public void destroyBridge(boolean isReload) {
            mBridgeManager.destroyBridge(isReload);
        }

        public void destroy(boolean isReload) {
            if (mDevtoolsManager != null) {
                mDevtoolsManager.destroy(isReload);
            }
            if (mRenderer instanceof NativeRenderConnector) {
                ((NativeRenderConnector) mRenderer).destroy(isEngineGroupEmpty());
            } else {
                mRenderer.destroy();
            }
            if (!isReload) {
                mDomManager.destroy();
            }
            mModuleManager.destroy();
            mVfsManager.destroy();
            onDestroyVfs(mVfsManager.getId());
            if (mEngineLifecycleEventListeners != null) {
                mEngineLifecycleEventListeners.clear();
            }
        }
    }

    @SuppressWarnings("JavaJniMissingFunction")
    private native int onCreateVfs(VfsManager vfsManager);

    @SuppressWarnings("JavaJniMissingFunction")
    private native void onDestroyVfs(int id);
}
