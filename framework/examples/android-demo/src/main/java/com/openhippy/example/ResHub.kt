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

import android.app.Application
import android.content.Context
import android.graphics.Color
import android.text.SpannableString
import android.text.Spanned
import android.text.style.ForegroundColorSpan
import android.view.Gravity
import android.widget.Toast
import com.tencent.mtt.hippy.utils.LogUtils
import com.tencent.rdelivery.listener.FullReqResultListener
import com.tencent.rdelivery.reshub.api.*
import com.tencent.rdelivery.reshub.core.OriginDownloadStorageDelegateImpl
import com.tencent.rdelivery.reshub.core.ResHubCenter
import com.tencent.rdelivery.reshub.net.ResHubDefaultDownloadImpl
import com.tencent.rdelivery.reshub.report.ResHubDefaultReportImpl
import com.tencent.rdelivery.reshub.util.RFileImpl
import java.io.IOException
import java.util.*

object ResHub {
    enum class ResLoadState {
        LOADING, ALL_SUCCESS, HAS_FAILED
    }

    const val TAG = "ResHub"
    const val RES_VIDEO_ALBUM_SQUARE = "hippy_demo_video_albumSquare"
    private val resIdSet = setOf(RES_VIDEO_ALBUM_SQUARE)
    private var resLoadState: ResLoadState = ResLoadState.LOADING
    private var resLoadResultMap: BatchResult? = null
    private var resLoadErrorMap: BatchError? = null

    fun initResHub(context: Application) {
        ResHubCenter.init(
            context = context,
            params = getParams(),
            downloadDelegate = ResHubDefaultDownloadImpl(),
            reportDelegate = ResHubDefaultReportImpl()
        )
        ResHubCenter.downloadStorageDelegate = OriginDownloadStorageDelegateImpl()
        ResHubCenter.fileDelegate = RFileImpl(true)
    }

    private fun getParams(): ResHubParams {
        return ResHubParams(
            deviceId = "nodeserverrequest",
            appVersion = BuildConfig.APP_VERSION,
            isRdmTest = true,
            variantMap = mapOf(
                "is_64_bit" to "1"
            )
        )
    }

    private fun getResInfo(resId: String): IRes? {
        return resLoadResultMap?.get(resId)
    }

    fun getResLocalPath(resId: String): String? {
        return getResInfo(resId)?.getLocalPath()
    }

    fun checkResLoadState(): ResLoadState {
        return resLoadState
    }

    fun isResLoadFailed(resId: String): Boolean {
        val resLoadError: IResLoadError? = resLoadErrorMap?.get(resId)
        resLoadError?.apply {
            return true
        }
        return false
    }

    fun getResLoadErrorMessage(resId: String): String? {
        val resLoadError: IResLoadError? = resLoadErrorMap?.get(resId)
        resLoadError?.apply {
            return resId + " load failed: code ${code()}, message ${message()}"
        }
        return null
    }

    fun loadCustomResources(context: Context) {
        val props = Properties()
        var appId: String? = null
        var appKey: String? = null
        try {
            props.load(context.applicationContext.assets.open("res_hub_config.properties"))
            appId = props.getProperty("appId")
            appKey = props.getProperty("appKey")
        } catch (e: IOException) {
            showErrorMessage(context, "load custom resource failed: ${e.message}")
        }
        if (appId != null && appKey != null) {
            loadCustomResources(appId, appKey)
        } else {
            //showErrorMessage(context, "load custom resource failed: appId or appKey is null!")
        }
    }

    private fun showErrorMessage(context: Context, text: CharSequence) {
        val span = SpannableString(text)
        span.setSpan(
            ForegroundColorSpan(Color.BLACK),
            0,
            text.length,
            Spanned.SPAN_EXCLUSIVE_EXCLUSIVE
        )
        val toast: Toast =
            Toast.makeText(
                context,
                span,
                Toast.LENGTH_LONG
            )
        toast.setGravity(Gravity.CENTER, 0, 0)
        toast.show()
    }

    private fun loadCustomResources(appId: String, appKey: String) {
        val listener = object : FullReqResultListener {
            override fun onFail(reason: String) {
                LogUtils.d(TAG, "onFail reason: $reason")
            }

            override fun onSuccess() {
                LogUtils.d(TAG, "onSuccess: ")
            }
        }
        val resHub = ResHubCenter.getResHub(appId, appKey, listener = listener)
        resHub.requestFullRemoteResConfig(object : FullReqResultListener {
            override fun onFail(reason: String) {
                LogUtils.d(TAG, "onFail reason: $reason")
            }

            override fun onSuccess() {
                LogUtils.d(TAG, "onSuccess: ")
            }
        })
        resHub.batchLoad(resIdSet, object : IBatchCallback {
            override fun onProgress(completed: Int, total: Int, progress: Float) {

            }

            override fun onComplete(isAllSuccess: Boolean, resMap: BatchResult, errorMap: BatchError) {
                onResHubLoadFinish(isAllSuccess, resMap, errorMap)
            }
        })
    }

    private fun onResHubLoadFinish(
        isAllSuccess: Boolean,
        batchResult: BatchResult?,
        batchError: BatchError
    ) {
        resLoadState = if (isAllSuccess) {
            ResLoadState.ALL_SUCCESS
        } else {
            ResLoadState.HAS_FAILED
        }
        resLoadResultMap = batchResult
        resLoadErrorMap = batchError
        LogUtils.d(TAG, "onResHubLoadFinish: isAllSuccess $isAllSuccess")
        resIdSet.forEach(){
            LogUtils.d(TAG, "onResHubLoadFinish: =============resId $it")
            batchResult?.get(it)?.apply {
                LogUtils.d(TAG, "IRes: resId ${getResId()}, localPath ${getLocalPath()}, version: ${getVersion()}")
            }
            batchError.get(it)?.apply {
                LogUtils.d(TAG, "IResLoadError: code ${code()}, message: ${message()}")
            }
        }
    }
}
