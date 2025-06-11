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

import android.content.Context
import android.graphics.Color
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowInsetsControllerCompat
import com.openhippy.example.PageConfiguration.Companion.currentEngineId
import com.tencent.mtt.hippy.HippyEngine
import com.tencent.mtt.hippy.utils.LogUtils

var appContext: Context? = null

class MainActivity : AppCompatActivity() {

    private lateinit var activityMainRoot: View
    private var mStartButton: View? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        appContext = applicationContext
        setAppContext(this.applicationContext)
        WindowInsetsControllerCompat(window, window.decorView).isAppearanceLightStatusBars = true
        activityMainRoot = layoutInflater.inflate(R.layout.activity_main, null)
        val rootContainer = activityMainRoot.findViewById<FrameLayout>(R.id.root_container)
        mStartButton = View(this)
        val subLayoutParams = FrameLayout.LayoutParams(500, 500)
        mStartButton?.layoutParams = subLayoutParams
        mStartButton?.isClickable = true
        mStartButton?.setBackgroundColor(Color.RED)
        mStartButton?.setOnClickListener(View.OnClickListener {
            rootContainer.removeAllViews()
            rootContainer.post {
                val engineWrapper = HippyEngineHelper.createHippyEngine(
                    PageConfiguration.DriverMode.JS_REACT,
                    PageConfiguration.RenderMode.NATIVE, false, false, "localhost:38989"
                )
                engineWrapper?.let {
                    currentEngineId = it.engineId
                }
                engineWrapper?.load(this, object : HippyEngineWrapper.HippyEngineLoadCallback {
                    override fun onInitEngineCompleted(
                        statusCode: HippyEngine.EngineInitStatus,
                        msg: String?
                    ) {
                        LogUtils.e("hippy", "onInitEngineCompleted: statusCode $statusCode, msg $msg")
                    }

                    override fun onCreateRootView(hippyRootView: ViewGroup?) {
                        hippyRootView?.let {
                            rootContainer.addView(it)
                        }
                    }

                    override fun onReplaySnapshotViewCompleted(snapshotView: ViewGroup) {

                    }

                    override fun onLoadModuleCompleted(
                        statusCode: HippyEngine.ModuleLoadStatus,
                        msg: String?
                    ) {
                        LogUtils.e("hippy", "onLoadModuleCompleted: statusCode $statusCode, msg $msg")
                    }
                })
            }
        })
        rootContainer.addView(mStartButton)
        setContentView(activityMainRoot)
    }

    override fun onResume() {
        super.onResume()
        HippyEngineHelper.clearAbandonHippyEngine()
    }

}