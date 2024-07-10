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

package com.tencent.vfs;

import android.content.Context;
import android.text.TextUtils;
import androidx.annotation.IntDef;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import java.io.File;

public class UrlUtils {

    public static final String PREFIX_HTTP = "http://";
    public static final String PREFIX_HTTPS = "https://";
    public static final String PREFIX_FILE = "file://";
    public static final String PREFIX_ASSETS = "assets://";
    public static final String PREFIX_INTERNAL = "internal://";
    public static final String PREFIX_INTERNAL_FILES = PREFIX_INTERNAL + "files/";
    public static final String PREFIX_INTERNAL_CACHE = PREFIX_INTERNAL + "cache/";
    public static final String PREFIX_EXTERNAL = "external://";
    public static final String PREFIX_EXTERNAL_FILES = PREFIX_EXTERNAL + "files/";
    public static final String PREFIX_EXTERNAL_CACHE = PREFIX_EXTERNAL + "cache/";
    public static final String PREFIX_BASE64_DATA = "data:";
    public static final String PREFIX_BASE64 = ";base64,";
    public static final int FILES = 1;
    public static final int CACHE = 2;
    private static String sInternalFilesPath = null;
    private static String sExternalFilesPath = null;
    private static String sInternalCachePath = null;
    private static String sExternalCachePath = null;

    @IntDef({FILES, CACHE})
    @interface DirType {

    }

    /**
     * @return true if this url is an http link.
     */
    public static boolean isHttpUrl(@Nullable String url) {
        return (null != url) && (url.length() > PREFIX_HTTP.length()) && url.substring(0, PREFIX_HTTP.length())
                .equalsIgnoreCase(PREFIX_HTTP);
    }

    /**
     * @return true if this url is an https link.
     */
    public static boolean isHttpsUrl(@Nullable String url) {
        return (null != url) && (url.length() > PREFIX_HTTPS.length()) && url.substring(0, PREFIX_HTTPS.length())
                .equalsIgnoreCase(PREFIX_HTTPS);
    }

    /**
     * @return true if this url is an local file path.
     */
    public static boolean isFileUrl(@Nullable String url) {
        return (null != url) && (url.length() > PREFIX_FILE.length()) && url.substring(0, PREFIX_FILE.length())
                .equalsIgnoreCase(PREFIX_FILE);
    }

    /**
     * @return true if this url is an remote web link.
     */
    public static boolean isWebUrl(@Nullable String url) {
        return isHttpUrl(url) || isHttpsUrl(url);
    }

    /**
     * @return true if this url is an assets file path.
     */
    public static boolean isAssetsUrl(@Nullable String url) {
        return (null != url) && url.startsWith(PREFIX_ASSETS);
    }

    /**
     * @return true if this url is an local file path.
     */
    public static boolean isAppFileUrl(@Nullable String uri) {
        return uri != null && (uri.startsWith(PREFIX_INTERNAL) || uri.startsWith(PREFIX_EXTERNAL));
    }

    public static String getAppFilePath(@NonNull String uri, @NonNull Context appContext) {
        String filePath = "";
        if (uri.startsWith(PREFIX_INTERNAL_FILES)) {
            filePath = getInternalPath(FILES, appContext) + uri.substring(PREFIX_INTERNAL_FILES.length() - 1);
        } else if (uri.startsWith(PREFIX_INTERNAL_CACHE)) {
            filePath = getInternalPath(CACHE, appContext) + uri.substring(PREFIX_INTERNAL_CACHE.length() - 1);
        } else if (uri.startsWith(PREFIX_EXTERNAL_FILES)) {
            filePath = getExternalPath(FILES, appContext) + uri.substring(PREFIX_EXTERNAL_FILES.length() - 1);
        } else if (uri.startsWith(PREFIX_EXTERNAL_CACHE)) {
            filePath = getExternalPath(CACHE, appContext) + uri.substring(PREFIX_EXTERNAL_CACHE.length() - 1);
        }
        return filePath;
    }

    @NonNull
    private static String getInternalPath(@DirType int type, @NonNull Context appContext) {
        File path;
        if (type == FILES) {
            if (TextUtils.isEmpty(sInternalFilesPath)) {
                path = appContext.getFilesDir();
                if (path != null) {
                    sInternalFilesPath = path.getAbsolutePath();
                }
            }
            return sInternalFilesPath;
        } else if (type == CACHE) {
            if (TextUtils.isEmpty(sInternalCachePath)) {
                path = appContext.getCacheDir();
                if (path != null) {
                    sInternalCachePath = path.getAbsolutePath();
                }
            }
            return sInternalCachePath;
        }
        return "";
    }

    @Nullable
    private static String getExternalPath(@DirType int type, @NonNull Context appContext) {
        File path;
        if (type == FILES) {
            if (TextUtils.isEmpty(sExternalFilesPath)) {
                path = appContext.getExternalFilesDir(null);
                if (path != null) {
                    sExternalFilesPath = path.getAbsolutePath();
                }
            }
            return sExternalFilesPath;
        } else if (type == CACHE) {
            if (TextUtils.isEmpty(sExternalCachePath)) {
                path = appContext.getExternalCacheDir();
                if (path != null) {
                    sExternalCachePath = path.getAbsolutePath();
                }
            }
            return sExternalCachePath;
        }
        return null;
    }

    /**
     * @return true if this url is an local source.
     */
    public static boolean isLocalUrl(@Nullable String url) {
        if (isFileUrl(url) || isAssetsUrl(url) || isAppFileUrl(url)) {
            return true;
        }
        return isBase64Url(url);
    }

    /**
     * @return true if this url is an base64 source.
     */
    public static boolean isBase64Url(@Nullable String url) {
        return (null != url) && url.startsWith(PREFIX_BASE64_DATA) && url.contains(PREFIX_BASE64);
    }
}
