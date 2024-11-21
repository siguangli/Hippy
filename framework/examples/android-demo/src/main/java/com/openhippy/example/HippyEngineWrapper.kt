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

package com.openhippy.example

import android.app.Activity
import android.content.Context
import android.graphics.Bitmap
import android.view.View
import android.view.ViewGroup
import android.view.ViewParent
import android.widget.ImageView
import com.tencent.mtt.hippy.HippyAPIProvider
import com.tencent.mtt.hippy.HippyEngine
import com.tencent.mtt.hippy.HippyEngine.*
import com.tencent.mtt.hippy.HippyEngineManagerImpl
import com.tencent.mtt.hippy.adapter.DefaultLogAdapter
import com.tencent.mtt.hippy.adapter.exception.HippyExceptionHandlerAdapter
import com.tencent.mtt.hippy.common.HippyJsException
import com.tencent.mtt.hippy.common.HippyMap
import com.tencent.mtt.hippy.utils.LogUtils
import com.tencent.mtt.hippy.utils.UIThreadUtils
import java.lang.ref.WeakReference

class HippyEngineWrapper(
    driverMode: PageConfiguration.DriverMode,
    isDebug: Boolean,
    debugServerHost: String
) {
    val hippyEngine: HippyEngine
    private var engineAttachInfos: HashMap<Int, EngineAttachInfo> = HashMap()
    var devButton: View? = null
    var destroyed: Boolean = false

    init {
        hippyEngine = createEngine(driverMode, isDebug, debugServerHost)
    }

    companion object {
        val renderNodeSnapshot: HashMap<PageConfiguration.DriverMode, ByteArray> = HashMap()
    }

    fun onStop(rootId: Int) {
        if (devButton == null) {
            getRootView(rootId)?.let {
                devButton = (hippyEngine as HippyEngineManagerImpl).getDevButton(it.id)
            }
        }
        devButton?.let {
            val parent: ViewParent? = it.parent
            parent?.let {
                (parent as ViewGroup).removeView(devButton)
            }
        }
    }

    fun onResume(context: Context, rootView: ViewGroup?) {
        rootView?.let {
            devButton = (hippyEngine as HippyEngineManagerImpl).getDevButton(it.id)
            if (devButton != null) {
                val parent: ViewParent? = devButton?.parent
                if (parent == null) {
                    val decorView = (context as Activity).window.decorView as ViewGroup
                    decorView.addView(devButton)
                }
            }
        }
    }

    fun destroyInstance(rootId: Int) {
        engineAttachInfos.remove(rootId)
        val doEngineDestroy = engineAttachInfos.isEmpty()
        if (doEngineDestroy) {
            destroyed = true
        }
        hippyEngine.destroyModule(rootId) { result, e ->
            if (doEngineDestroy) {
                hippyEngine.destroyEngine()
            }
        }
    }

    fun destroy() {
        hippyEngine.destroyModule { result, e ->
            hippyEngine.destroyEngine()
        }
        engineAttachInfos.clear()
    }

    fun recordRenderNodeSnapshot(rootId: Int) {
//        val engineAttachInfo = engineAttachInfos[rootId]
//        hippyEngine?.recordSnapshot(hippyRootView as View) {
//                buffer, e ->
//            run {
//                buffer?.let {
//                    renderNodeSnapshot[driverMode] = buffer
//                }
//            }
//        }
    }

    fun getRootView(rootId: Int): ViewGroup? {
        var engineAttachInfo = engineAttachInfos[rootId]
        return engineAttachInfo?.rootView
    }

    fun getScreenshot(rootId: Int): Bitmap? {
        var engineAttachInfo = engineAttachInfos[rootId]
        return engineAttachInfo?.screenshot
    }

    fun getEngineAttachInfo(rootId: Int): EngineAttachInfo? {
        return engineAttachInfos[rootId]
    }

    fun resetPageItem() {
        for (engineAttachInfo in engineAttachInfos.values) {
            engineAttachInfo.pageItem = null
        }
    }

    fun setPageItem(rootId: Int, pageItem: View) {
        var engineAttachInfo = engineAttachInfos[rootId]
        engineAttachInfo?.pageItem = pageItem
    }

    fun getEngineId(): Int {
        return hippyEngine.engineId
    }

    fun getPageCount(): Int {
        return engineAttachInfos.size
    }

    fun collectEngineAttachInfo(engineAttachInfoList: ArrayList<EngineAttachInfo>) {
        for (engineAttachInfo in engineAttachInfos.values) {
            engineAttachInfoList.add(engineAttachInfo)
        }
    }

    fun resetPageItemImage() {
        for (engineAttachInfo in engineAttachInfos.values) {
            engineAttachInfo.pageItem?.let {
                val pageItemImage = it.findViewById<ImageView>(R.id.page_item_image)
                engineAttachInfo.screenshot?.let {
                    pageItemImage.setImageBitmap(engineAttachInfo.screenshot)
                }
            }
        }
    }

    private fun buildModuleLoadParams(
        context: Context,
        driverMode: PageConfiguration.DriverMode
    ): ModuleLoadParams {
        val loadParams = ModuleLoadParams()
        loadParams.context = context
        loadParams.componentName = "Demo"
        loadParams.codeCacheTag = "Demo"
        when(driverMode) {
            PageConfiguration.DriverMode.JS_REACT -> {
                loadParams.jsAssetsPath = "react/index.android.js"
            }
            PageConfiguration.DriverMode.JS_VUE_2 -> {
                loadParams.jsAssetsPath = "vue2/index.android.js"
            }
            PageConfiguration.DriverMode.JS_VUE_3 -> {
                loadParams.jsAssetsPath = "vue3/index.android.js"
            }
            PageConfiguration.DriverMode.VL -> {
                //TODO: Coming soon
            }
        }
        loadParams.jsFilePath = null
        loadParams.jsParams = HippyMap()
        loadParams.jsParams.pushString(
            "msgFromNative",
            "Hi js developer, I come from native code!"
        )
        return loadParams
    }

    private fun buildAndRunCallbackTask(rootView: ViewGroup,
                                        driverMode: PageConfiguration.DriverMode,
                                        useSnapshot: Boolean,
                                        callback: HippyEngineLoadCallback) {
        val loadCallbackTask = Runnable {
            val engineAttachInfo = EngineAttachInfo(rootView, driverMode, useSnapshot, this@HippyEngineWrapper)
            engineAttachInfos[rootView.id] = engineAttachInfo;
            callback.onCreateRootView(rootView)
//            snapshotView?.let {
//                callback.onReplaySnapshotViewCompleted(snapshotView as ViewGroup)
//            }
        }
        if (UIThreadUtils.isOnUiThread()) {
            loadCallbackTask.run()
        } else {
            UIThreadUtils.runOnUiThread {
                loadCallbackTask.run()
            }
        }
    }

    fun loadInstance(context: Context,
                     driverMode: PageConfiguration.DriverMode,
                     isDebug: Boolean,
                     useSnapshot: Boolean,
                     callback: HippyEngineLoadCallback
    ) {
        val loadParams = buildModuleLoadParams(context, driverMode)
        val rootView = hippyEngine.loadInstance(loadParams, object : ModuleListener {
            override fun onLoadCompleted(statusCode: ModuleLoadStatus, msg: String?) {
                callback.onLoadModuleCompleted(statusCode, msg)
            }

            override fun onJsException(exception: HippyJsException): Boolean {
                return true
            }

            override fun onFirstViewAdded() {
//                snapshotView?.let {
//                    val handler = Handler(Looper.getMainLooper())
//                    handler.postDelayed({
//                        hippyEngine?.removeSnapshotView()
//                    }, 400)
//                }
            }
        })
        buildAndRunCallbackTask(rootView, driverMode, useSnapshot, callback)
    }

    fun loadModule(context: Context,
                   driverMode: PageConfiguration.DriverMode,
                   isDebug: Boolean,
                   useSnapshot: Boolean,
                   callback: HippyEngineLoadCallback
    ) {
        val loadParams = buildModuleLoadParams(context, driverMode)
        val rootView = hippyEngine.loadModule(loadParams, object : ModuleListener {
            override fun onLoadCompleted(statusCode: ModuleLoadStatus, msg: String?) {
                callback.onLoadModuleCompleted(statusCode, msg)
            }

            override fun onJsException(exception: HippyJsException): Boolean {
                return true
            }

            override fun onFirstViewAdded() {
//                snapshotView?.let {
//                    val handler = Handler(Looper.getMainLooper())
//                    handler.postDelayed({
//                        hippyEngine?.removeSnapshotView()
//                    }, 400)
//                }
            }
        })
        buildAndRunCallbackTask(rootView, driverMode, useSnapshot, callback)
    }

    private fun createEngine(
        driverMode: PageConfiguration.DriverMode,
        isDebug: Boolean,
        debugServerHost: String,
    ): HippyEngine {
        val initParams = EngineInitParams()
        initParams.context = applicationContext
        initParams.debugServerHost = debugServerHost
        initParams.debugMode = isDebug
        initParams.enableLog = true
        initParams.logAdapter = DefaultLogAdapter()
        initParams.groupId = 1
        when(driverMode) {
            PageConfiguration.DriverMode.JS_REACT -> {
                initParams.coreJSAssetsPath = "react/vendor.android.js"
            }
            PageConfiguration.DriverMode.JS_VUE_2 -> {
                initParams.coreJSAssetsPath = "vue2/vendor.android.js"
            }
            PageConfiguration.DriverMode.JS_VUE_3 -> {
                initParams.coreJSAssetsPath = "vue3/vendor.android.js"
            }
            PageConfiguration.DriverMode.VL -> {
                //TODO: Coming soon
            }
        }
        initParams.codeCacheTag = "common"
        initParams.exceptionHandler = object : HippyExceptionHandlerAdapter {
            override fun handleJsException(e: HippyJsException) {
                LogUtils.e("hippy", e.message)
            }
            override fun handleNativeException(e: Exception, haveCaught: Boolean) {
                LogUtils.e("hippy", e.message)
            }
            override fun handleBackgroundTracing(details: String) {
                LogUtils.e("hippy", details)
            }
        }
        val providers: MutableList<HippyAPIProvider> = ArrayList()
        providers.add(ExampleAPIProvider())
        initParams.providers = providers
        initParams.enableTurbo = true
        return create(initParams)
    }

    fun initEngine(context: Context,
                   driverMode: PageConfiguration.DriverMode,
                   isDebug: Boolean,
                   useSnapshot: Boolean,
                   callback: HippyEngineLoadCallback) {
        hippyEngine.initEngine { statusCode, msg ->
            callback.onInitEngineCompleted(statusCode, msg)
            if (statusCode == EngineInitStatus.STATUS_OK) {
                loadModule(context, driverMode, isDebug, useSnapshot, callback)
                //                    var snapshotView: View? = null
                //                    if (!isDebug && useSnapshot) {
                //                        val buffer = renderNodeSnapshot[driverMode]
                //                        buffer?.let {
                //                            snapshotView = hippyEngine.replaySnapshot(context, it)
                //                        }
                //                        snapshotView?.let {
                //                            hippySnapshotView = snapshotView as ViewGroup
                //                        }
                //                    }
            }
        }
    }

    fun buildRootViewScreenshot(context: Context, rootId: Int, callback: PageConfiguration.GenerateScreenshotCallback) {
        var engineAttachInfo = engineAttachInfos[rootId]
        if (engineAttachInfo != null) {
            try {
                hippyEngine.getScreenshotBitmapForView(context, engineAttachInfo.rootView as View
                ) { bitmap, result ->
                    run {
                        if (result == 0) {
                            engineAttachInfo.screenshot = bitmap
                        } else {
                            LogUtils.e("Demo", "buildRootViewScreenshot error code: $result")
                        }
                        callback.onScreenshotBuildFinished()
                    }
                }
            } catch (e: IllegalArgumentException) {
                LogUtils.e("Demo", "buildRootViewScreenshot exception message: ${e.message}")
                callback.onScreenshotBuildFinished()
            }
        } else {
            callback.onScreenshotBuildFinished()
        }
    }

    class EngineAttachInfo(
        root: ViewGroup,
        driver: PageConfiguration.DriverMode,
        snapshot: Boolean,
        engineWrapper: HippyEngineWrapper
    ) {
        var snapshotView: ViewGroup? = null
        var screenshot: Bitmap? = null
        var pageItem: View? = null
        val rootView: ViewGroup = root
        val driverMode: PageConfiguration.DriverMode = driver
        val useSnapshot: Boolean = snapshot
        val engineWrapperRef: WeakReference<HippyEngineWrapper> = WeakReference(engineWrapper)
    }

    interface HippyEngineLoadCallback {
        fun onInitEngineCompleted(statusCode: EngineInitStatus, msg: String?)
        fun onCreateRootView(hippyRootView: ViewGroup?)
        fun onReplaySnapshotViewCompleted(snapshotView: ViewGroup)
        fun onLoadModuleCompleted(statusCode: ModuleLoadStatus, msg: String?)
    }
}