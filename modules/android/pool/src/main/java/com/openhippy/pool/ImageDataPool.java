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

package com.openhippy.pool;

import android.util.LruCache;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.tencent.mtt.hippy.utils.LogUtils;
import java.lang.ref.WeakReference;

public class ImageDataPool extends BasePool<ImageDataKey, ImageRecycleObject> {

    private static final int DEFAULT_IMAGE_POOL_SIZE = 8;
    private final Object mLock = new Object();
    private LruCache<ImageDataKey, WeakReference<ImageRecycleObject>> mPools;

    public ImageDataPool() {
        init(DEFAULT_IMAGE_POOL_SIZE);
    }

    @SuppressWarnings("unused")
    public ImageDataPool(int size) {
        init(Math.max(DEFAULT_IMAGE_POOL_SIZE, size));
    }

    private void init(int size) {
        mPools = new LruCache<ImageDataKey, WeakReference<ImageRecycleObject>>(
                size) {
            @Override
            protected void entryRemoved(boolean evicted, @NonNull ImageDataKey key,
                    @NonNull WeakReference<ImageRecycleObject> oldValue, @Nullable WeakReference<ImageRecycleObject> newValue) {
                if (evicted) {
                    onEntryEvicted(oldValue);
                }
            }
        };
    }

    @Override
    @Nullable
    public ImageRecycleObject acquire(@NonNull ImageDataKey key) {
        synchronized (mLock) {
            WeakReference<ImageRecycleObject> dataRef = mPools.get(key);
            if (dataRef == null) {
                return null;
            }
            ImageRecycleObject data = dataRef.get();
            if (data == null || (data != null && data.isScraped())) {
                // Bitmap may have been recycled, must be removed from the cache and not
                // returned to the component.
                mPools.remove(key);
                if (data != null) {
                    data.evicted();
                }
                return null;
            }
            return data;
        }
    }

    @Override
    public void release(@NonNull ImageRecycleObject data) {
        ImageDataKey key = data.getCacheKey();
        if (key != null) {
            release(data.getCacheKey(), data);
        }
    }

    @Override
    public void release(@NonNull ImageDataKey key, @NonNull ImageRecycleObject data) {
        synchronized (mLock) {
            mPools.put(key, new WeakReference<>(data));
            data.cached();
        }
    }

    @Override
    public void clear() {
        synchronized (mLock) {
            mPools.evictAll();
        }
    }

    @Override
    public void remove(@NonNull ImageDataKey key) {
        synchronized (mLock) {
            mPools.remove(key);
        }
    }

    private void onEntryEvicted(@NonNull WeakReference<ImageRecycleObject> dataRef) {
        ImageRecycleObject data = dataRef.get();
        if (data != null) {
            data.evicted();
        }
    }
}
