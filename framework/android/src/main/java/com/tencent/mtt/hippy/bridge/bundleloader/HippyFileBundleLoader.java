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
package com.tencent.mtt.hippy.bridge.bundleloader;

import static com.tencent.mtt.hippy.bridge.HippyBridge.URI_SCHEME_FILE;

import android.text.TextUtils;
import com.tencent.mtt.hippy.bridge.HippyBridge;
import com.openhippy.connector.NativeCallback;
import com.tencent.mtt.hippy.utils.LogUtils;

@SuppressWarnings({"unused"})
public class HippyFileBundleLoader implements HippyBundleLoader {

  private static final String FILE_STR = "file://";

  final String mFilePath;

  private String mCodeCacheTag;

  @SuppressWarnings("unused")
  public HippyFileBundleLoader(String filePath) {
    this(filePath, "");
  }

  public HippyFileBundleLoader(String filePath, String codeCacheTag) {
    this.mFilePath = filePath;
    this.mCodeCacheTag = codeCacheTag;
  }

  @SuppressWarnings("unused")
  public void setCodeCache(String codeCacheTag) {
    this.mCodeCacheTag = codeCacheTag;
  }

  @Override
  public void load(HippyBridge bridge, NativeCallback callback) {
    if (TextUtils.isEmpty(mFilePath)) {
      return;
    }

    String uri =
        (!mFilePath.startsWith(URI_SCHEME_FILE)) ? (URI_SCHEME_FILE + mFilePath) : mFilePath;
    boolean ret = bridge.runScriptFromUri(uri, null, !TextUtils.isEmpty(mCodeCacheTag), mCodeCacheTag, callback);
    LogUtils.d("HippyFileBundleLoader", "load: ret" + ret);
  }

  @Override
  public String getPath() {
    if (mFilePath != null && !mFilePath.startsWith(FILE_STR)) {
      return FILE_STR + mFilePath;
    } else {
      return mFilePath;
    }
  }

  @Override
  public String getRawPath() {
    return mFilePath;
  }

  @Override
  public String getBundleUniKey() {
    return getPath();
  }

  @Override
  public boolean canUseCodeCache() {
    return !TextUtils.isEmpty(mCodeCacheTag);
  }

  @Override
  public String getCodeCacheTag() {
    return mCodeCacheTag;
  }


}
