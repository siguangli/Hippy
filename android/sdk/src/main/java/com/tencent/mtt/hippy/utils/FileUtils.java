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
package com.tencent.mtt.hippy.utils;

import android.content.Context;
import android.text.TextUtils;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;

/**
 * @Description: TODO
 * @author: edsheng
 * @date: 2017/11/18 17:23
 * @version: V1.0
 */

public class FileUtils
{

	public static String readFile(String filePath)
	{
		String fileContent = "";
		File file = new File(filePath);
		if (!file.exists())
		{
			return fileContent;
		}
		else
		{
			FileInputStream fileReader = null;
			ByteArrayOutputStream byteArrayOutputStream = null;
			try
			{
				byteArrayOutputStream = new ByteArrayOutputStream();
				fileReader = new FileInputStream(file);
				byte buffer[] = new byte[4096];
				int len = -1;
				while ((len = fileReader.read(buffer, 0, buffer.length)) != -1)
				{
					byteArrayOutputStream.write(buffer, 0, len);
				}
				fileContent = byteArrayOutputStream.toString();
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}
			finally
			{
				if (fileReader != null)
				{
					try
					{
						fileReader.close();
					}
					catch (Throwable e)
					{
						e.printStackTrace();
					}
				}

				if (byteArrayOutputStream != null)
				{
					try
					{
						byteArrayOutputStream.close();
					}
					catch (Throwable e)
					{
						e.printStackTrace();
					}
				}
			}
		}
		return fileContent;
	}

	public static byte[] readFileToByteArray(String filePath)
	{
		byte[] data = null;
		File file = new File(filePath);
		if (!file.exists())
		{
			return data;
		}
		else
		{
			try
			{
				ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
				FileInputStream fileReader = new FileInputStream(file);
				try
				{
					byte buffer[] = new byte[4096];
					int len = -1;
					while ((len = fileReader.read(buffer, 0, buffer.length)) != -1)
					{
						byteArrayOutputStream.write(buffer, 0, len);
					}
				}
				catch (Throwable e)
				{

				}

				fileReader.close();
				data = byteArrayOutputStream.toByteArray();
				byteArrayOutputStream.close();
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}
		}
		return data;
	}

	public static long getModifiedTime(String filePath)
	{
		if (TextUtils.isEmpty(filePath))
		{
			return 0;
		}
		File file = new File(filePath);
		if (!file.exists())
		{
			return 0;
		}
		return file.lastModified();
	}

	public static File getHippyFile(Context context)
	{
		File baseFile = context.getApplicationContext() != null ? context.getApplicationContext().getFilesDir() : context.getFilesDir();
		if (baseFile == null)
			return null;

		return createDir(baseFile, "hippy");
	}

	public static File createDir(File parent, String dirName)
	{
		if (parent == null || dirName == null || dirName.length() == 0)
			return null;

		File childDir = new File(parent, dirName);
		if (!childDir.exists())
			childDir.mkdirs();

		return childDir;
	}

  public static String readFile(File file) {
    return readFileToStringEx(file, -1);
  }

  public static String readFileToStringEx(File file, int capacity) {
    if (null == file) {
      LogUtils.e("FileUtils", "readFileToStringEx file = null");
      return null;
    }
    if (!file.exists() || !file.canRead()) {
      LogUtils.e("FileUtils", "readFileToStringEx file exists = " + file.exists()
        + " canRead = " + file.canRead());
      return null;
    }

    BufferedInputStream fis = null;
    InputStreamReader reader = null;
    char[] buffer = null;
    String rtn = null;
    int n = 0;
    try {
      fis = new BufferedInputStream(new FileInputStream(file));
      reader = new InputStreamReader(fis, "UTF-8");
      int size = (int) file.length();

      //由于某些文件很大，如果capacity设置小了会导致StringBuilder扩容次数太多引发性能问题,这里控制扩容次数在5-6次左右
      if (size > 1024 * 12) {
        if (capacity == -1) { //没有发生过OOM
          capacity = size / (1024 * 6);
          if (capacity < 12) {
            capacity = 12; //小于72K
          } else if (capacity > 60) {
            capacity = 60;
          }
        }

        buffer = new char[1024 * 4];
        StringBuilder result = new StringBuilder(capacity * 1024);
        while (-1 != (n = reader.read(buffer))) {
          result.append(buffer, 0, n);
        }
        rtn = result.toString();
      } else {
        //12k以内，直接不要使用StringBuilder，解决出现两份内存问题
        buffer = new char[size];
        n = reader.read(buffer);
        rtn = new String(buffer, 0, n);
      }
    } catch (Exception e) {
      LogUtils.e("FileUtils", "readFileToStringEx error info: " + e.toString());
    } catch (OutOfMemoryError error) {
      LogUtils.d("FileUtils", "readSignatureFileToString OOM!! filename: " + file.getName());
      //发生一次OOM还是要再尝试一下
      if (capacity == -1) {
        rtn = readFileToStringEx(file, 6);
      }
    } finally {
      if (fis != null) {
        try {
          fis.close();
        } catch (Exception e) {
        }
      }
      if (reader != null) {
        try {
          reader.close();
        } catch (Exception e) {
        }
      }
    }
    return rtn;
  }
}
