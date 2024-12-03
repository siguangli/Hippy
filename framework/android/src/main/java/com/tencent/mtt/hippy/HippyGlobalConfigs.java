/* Tencent is pleased to support the open source community by making Hippy available.
 * Copyright (C) 2018 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.tencent.mtt.hippy;

import android.content.Context;

import com.tencent.mtt.hippy.adapter.DefaultLogAdapter;
import com.tencent.mtt.hippy.adapter.HippyLogAdapter;
import com.tencent.mtt.hippy.adapter.device.DefaultDeviceAdapter;
import com.tencent.mtt.hippy.adapter.device.HippyDeviceAdapter;
import com.tencent.mtt.hippy.adapter.exception.DefaultExceptionHandler;
import com.tencent.mtt.hippy.adapter.exception.HippyExceptionHandlerAdapter;
import com.tencent.mtt.hippy.adapter.executor.DefaultExecutorSupplierAdapter;
import com.tencent.mtt.hippy.adapter.executor.HippyExecutorSupplierAdapter;
import com.tencent.mtt.hippy.adapter.font.DefaultFontScaleAdapter;
import com.tencent.mtt.hippy.adapter.font.HippyFontScaleAdapter;
import com.tencent.mtt.hippy.adapter.http.DefaultHttpAdapter;
import com.tencent.mtt.hippy.adapter.http.HippyHttpAdapter;
import com.tencent.mtt.hippy.adapter.monitor.DefaultEngineMonitorAdapter;
import com.tencent.mtt.hippy.adapter.monitor.HippyEngineMonitorAdapter;
import com.tencent.mtt.hippy.adapter.sharedpreferences.DefaultSharedPreferencesAdapter;
import com.tencent.mtt.hippy.adapter.sharedpreferences.HippySharedPreferencesAdapter;
import com.tencent.mtt.hippy.adapter.snapshot.HippySnapshotAdapter;
import com.tencent.mtt.hippy.adapter.soloader.DefaultSoLoaderAdapter;
import com.tencent.mtt.hippy.adapter.soloader.HippySoLoaderAdapter;
import com.tencent.mtt.hippy.adapter.storage.DefaultStorageAdapter;
import com.tencent.mtt.hippy.adapter.storage.HippyStorageAdapter;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.renderer.component.image.ImageDecoderAdapter;

@SuppressWarnings({"deprecation", "unused"})
public class HippyGlobalConfigs {

    /**
     * SharedPreferences
     */
    private final HippySharedPreferencesAdapter mSharedPreferencesAdapter;

    private Context mContext;

    /**
     * Crash Handler
     */
    private final HippyExceptionHandlerAdapter mExceptionHandler;

    /**
     * Http request adapter
     */
    private final HippyHttpAdapter mHttpAdapter;

    /**
     * Storage adapter
     */
    private final HippyStorageAdapter mStorageAdapter;

    /**
     * Executor Supplier adapter
     */
    private final HippyExecutorSupplierAdapter mExecutorSupplierAdapter;

    /**
     * Engine Monitor adapter
     */
    private final HippyEngineMonitorAdapter mEngineMonitorAdapter;


    /**
     * font scale adapter
     */
    private final HippyFontScaleAdapter mFontScaleAdapter;

    private final ImageDecoderAdapter mImageDecoderAdapter;

    private final HippySnapshotAdapter mSnapshotAdapter;

    private final HippySoLoaderAdapter mSoLoaderAdapter;

    /**
     * device adapter
     */
    private final HippyDeviceAdapter mDeviceAdapter;


    private final HippyLogAdapter mLogAdapter;

    private boolean mEnableTurbo;

    public HippyGlobalConfigs(HippyEngine.EngineInitParams params) {
        mContext = params.context;
        mSharedPreferencesAdapter = params.sharedPreferencesAdapter;
        mExceptionHandler = params.exceptionHandler;
        mHttpAdapter = params.httpAdapter;
        mStorageAdapter = params.storageAdapter;
        mExecutorSupplierAdapter = params.executorSupplier;
        mEngineMonitorAdapter = params.engineMonitor;
        mFontScaleAdapter = params.fontScaleAdapter;
        mSoLoaderAdapter = params.soLoader;
        mDeviceAdapter = params.deviceAdapter;
        mLogAdapter = params.logAdapter;
        mEnableTurbo = params.enableTurbo;
        mImageDecoderAdapter = params.imageDecoderAdapter;
        mSnapshotAdapter = params.snapshotAdapter;
    }

    public void destroyIfNeed() {
        try {
            if (mHttpAdapter != null) {
                mHttpAdapter.destroyIfNeed();
            }
            if (mStorageAdapter != null) {
                mStorageAdapter.destroyIfNeed();
            }
            if (mExecutorSupplierAdapter != null) {
                mExecutorSupplierAdapter.destroyIfNeed();
            }
            if (mImageDecoderAdapter != null) {
                mImageDecoderAdapter.destroyIfNeeded();
            }
            mContext = null;
        } catch (Throwable e) {
            LogUtils.d("HippyGlobalConfigs", "destroyIfNeed: " + e.getMessage());
        }
    }

    public HippyLogAdapter getLogAdapter() {
        return mLogAdapter;
    }

    public HippySoLoaderAdapter getSoLoaderAdapter() {
        return mSoLoaderAdapter;
    }

    public HippySharedPreferencesAdapter getSharedPreferencesAdapter() {
        return mSharedPreferencesAdapter;
    }

    public HippyExceptionHandlerAdapter getExceptionHandler() {
        return mExceptionHandler;
    }

    public HippyFontScaleAdapter getFontScaleAdapter() {
        return mFontScaleAdapter;
    }

    public ImageDecoderAdapter getImageDecoderAdapter() {
        return mImageDecoderAdapter;
    }

    public HippyDeviceAdapter getDeviceAdapter() {
        return mDeviceAdapter;
    }

    public HippyHttpAdapter getHttpAdapter() {
        return mHttpAdapter;
    }

    public Context getContext() {
        return mContext;
    }

    public HippyStorageAdapter getStorageAdapter() {
        return mStorageAdapter;
    }

    public HippyExecutorSupplierAdapter getExecutorSupplierAdapter() {
        return mExecutorSupplierAdapter;
    }

    public HippyEngineMonitorAdapter getEngineMonitorAdapter() {
        return mEngineMonitorAdapter;
    }

    public HippySnapshotAdapter getSnapshotAdapter() {
        return mSnapshotAdapter;
    }

    @Deprecated
    public void toDebug(HippyEngine.EngineInitParams params) {
        params.context = mContext;
        params.sharedPreferencesAdapter = mSharedPreferencesAdapter;
        params.exceptionHandler = mExceptionHandler;
        params.httpAdapter = mHttpAdapter;
        params.storageAdapter = mStorageAdapter;
        params.executorSupplier = mExecutorSupplierAdapter;
        params.engineMonitor = mEngineMonitorAdapter;
        params.fontScaleAdapter = mFontScaleAdapter;
        params.soLoader = mSoLoaderAdapter;
        params.deviceAdapter = mDeviceAdapter;
        params.logAdapter = mLogAdapter;
        params.enableTurbo = true;
    }

    public boolean enableTurbo() {
        return mEnableTurbo;
    }
}
