package com.tencent.mtt.hippy.example;

import android.content.Context;

import com.tencent.mtt.hippy.HippyAPIProvider;
import com.tencent.mtt.hippy.HippyEngine;
import com.tencent.mtt.hippy.HippyRootView;
import com.tencent.mtt.hippy.adapter.exception.HippyExceptionHandlerAdapter;
import com.tencent.mtt.hippy.adapter.nv.NativeVueAdapter;
import com.tencent.mtt.hippy.common.HippyJsException;
import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.example.adapter.MyImageLoader;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager;
import com.tencent.mtt.hippy.views.wormhole.event.HippyEventObserverAdapter;


import java.util.ArrayList;
import java.util.List;

import static com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager.WORMHOLE_TAG;

public class HippyWormholeEngine
{
	private HippyEngine mHippyEngine;
	private HippyRootView mHippyRootView;

	public HippyWormholeEngine() {}

	public void init(final Context context) {
		// 1/3. 初始化hippy引擎
		{
			HippyEngine.EngineInitParams initParams = new HippyEngine.EngineInitParams();
			// 必须：宿主（Hippy的使用者）的Context
			// 若存在多个Activity加载多个业务jsbundle的情况，则这里初始化引擎时建议使用Application的Context
			initParams.context = context;
			// 必须：图片加载器
			initParams.imageLoader = new MyImageLoader();

			// 可选：是否设置为debug模式，默认为false。调试模式下，所有jsbundle都是从debug server上下载
			initParams.debugMode = true;
			// 可选：是否打印引擎的完整的log。默认为false
			initParams.enableLog = true;
			// 可选：debugMode = false 时必须设置coreJSAssetsPath或coreJSFilePath（debugMode = true时，所有jsbundle都是从debug server上下载）
			initParams.coreJSAssetsPath = "vendor.android.js";
			//虫洞引擎注册消息分发器
			initParams.eventObserverAdapter = new HippyEventObserverAdapter() {
				@Override
				public void onClientMessageReceived(HippyMap data) {
					//虫洞自己收到了这个数据之后需要广播给业务方
					HippyWormholeManager.getInstance().sendMessageToAllClient(data);
				}
			};
			// 可选：异常处理器
			initParams.exceptionHandler = new HippyExceptionHandlerAdapter() {
				// JavaScript执行异常
				@Override
				public void handleJsException(HippyJsException exception) {
					LogUtils.e("hippy", exception.getMessage() + exception.getStack());
				}

				// Native代码执行异常：包括sdk和业务定制代码
				@Override
				public void handleNativeException(Exception exception, boolean haveCaught) {
					LogUtils.e("hippy", exception.getMessage());
				}

				// JavaScript代码Trace，业务层一般不需要
				@Override
				public void handleBackgroundTracing(String details) {
					LogUtils.e("hippy", details);
				}
			};
			List<HippyAPIProvider> providers = new ArrayList<>();
			providers.add(new MyAPIProvider());
			// 可选：自定义的，用来提供Native modules、JavaScript modules、View controllers的管理器。1个或多个
			initParams.providers = providers;

			initParams.nativeVueAdapter = new NVAdapter();

			// 根据EngineInitParams创建引擎实例
			mHippyEngine = HippyEngine.create(initParams);
			// 异步初始化Hippy引擎
			mHippyEngine.initEngine(new HippyEngine.EngineListener() {
				// Hippy引擎初始化完成
				/**
				 * @param  statusCode
				 *         status code from initializing procedure
				 * @param  msg
				 *         Message from initializing procedure
				 */
				@Override
				public void onInitialized(int statusCode, String msg) {
					if (statusCode != 0)
						LogUtils.e("MyActivity", "hippy engine init failed code:" + statusCode + ", msg=" + msg);
					// else
					{
						// 2/3. 加载hippy前端模块

						HippyEngine.ModuleLoadParams loadParams = new HippyEngine.ModuleLoadParams();
						// 必须：该Hippy模块将要挂在的Activity or Dialog的context
						loadParams.context = context;
						/*
						  必须：指定要加载的Hippy模块里的组件（component）。componentName对应的是js文件中的"appName"，比如：
						  var hippy = new Hippy({
						      appName: "Demo",
						      entryPage: App
						  });
						  */
						loadParams.componentName = "AdsTemplates";
						/*
						  可选：二选一设置。自己开发的业务模块的jsbundle的assets路径（assets路径和文件路径二选一，优先使用assets路径）
						  debugMode = false 时必须设置jsAssetsPath或jsFilePath（debugMode = true时，所有jsbundle都是从debug server上下载）
						 */
						loadParams.jsAssetsPath = "index.android.js";
						/*
						  可选：二选一设置。自己开发的业务模块的jsbundle的文件路径（assets路径和文件路径二选一，优先使用assets路径）
						  debugMode = false 时必须设置jsAssetsPath或jsFilePath（debugMode = true时，所有jsbundle都是从debug server上下载）
						 */
						loadParams.jsFilePath = null;
						// 可选：发送给Hippy前端模块的参数
						loadParams.jsParams = new HippyMap();
						loadParams.jsParams.pushString("msgFromNative", "Hi js developer, I come from native code!");
						// 加载Hippy前端模块
						mHippyRootView = mHippyEngine.loadModule(loadParams, new HippyEngine.ModuleListener() {
							public void onInitialized(int statusCode, String msg, HippyRootView hippyRootView) {
								if (statusCode == HippyEngine.STATUS_OK) {
									HippyWormholeManager.getInstance().setServerEngine(mHippyEngine, hippyRootView);
								} else {
									LogUtils.e(WORMHOLE_TAG, "Hippy: init worm engine failed statusCode:" + statusCode + ",msg:" + msg);
								}
							}

							public boolean onJsException(HippyJsException exception) {
								LogUtils.e(WORMHOLE_TAG, "Hippy: loadModule onJsException:" + exception);
								return true;
							}
						});
					}
				}
			});
		}
	}

	public static class NVAdapter implements NativeVueAdapter {

    @Override
    public void createVDom(String vueDom, String data, OnGetVDomResult onGetVDomResult) {
      String hardCodeVueDom = "{\n" +
        "    \"style\":{\n" +
        "        \"width\":200,\n" +
        "        \"backgroundColor\":4283410490,\n" +
        "        \"alignItems\":\"center\"\n" +
        "    },\n" +
        "    \"name\":\"View\",\n" +
        "    \"id\":0,\n" +
        "    \"children\":[\n" +
        "        {\n" +
        "            \"name\":\"Text\",\n" +
        "            \"id\":-1,\n" +
        "            \"style\":{\n" +
        "                \"fontSize\":20,\n" +
        "                \"text\":\"我是NativeVue创建出来的文本\"\n" +
        "            }\n" +
        "        },\n" +
        "        {\n" +
        "            \"name\":\"Text\",\n" +
        "            \"id\":-2,\n" +
        "            \"style\":{\n" +
        "                \"fontSize\":20,\n" +
        "                \"text\":\"我是NativeVue创建出来的文本2\"\n" +
        "            }\n" +
        "        },\n" +
        "        {\n" +
        "            \"name\":\"Image\",\n" +
        "            \"id\":-3,\n" +
        "            \"attr\": {\n" +
        "\"src\":\"http://zxpic.imtt.qq.com/zxpic_imtt/2018/06/08/2000/originalimage/200721_3738332814_3_540_364.jpg\"\n" +
        "     },\n" +
        "            \"style\":{\n" +
        "                \"width\":100,\n" +
        "                \"source\":[\n" +
        "                    {\n" +
        "                       \n" +
        "                    }\n" +
        "                ],\n" +
        "                \"height\":100\n" +
        "            }\n" +
        "        }\n" +
        "    ]\n" +
        "}";
      hardCodeVueDom = "{\n" +
        "    \"name\":\"View\",\n" +
        "    \"id\":-1,\n" +
        "    \"props\":{\n" +
        "        \"style\":{\n" +
        "            \"top\":0,\n" +
        "            \"left\":0,\n" +
        "            \"position\":\"absolute\"\n" +
        "        }\n" +
        "    },\n" +
        "    \"children\":[\n" +
        "        {\n" +
        "            \"name\":\"View\",\n" +
        "            \"id\":-2,\n" +
        "            \"props\":{\n" +
        "                \"onClick\":true,\n" +
        "                \"onCustomEvent\":true,\n" +
        "                \"style\":{\n" +
        "                    \"width\":387,\n" +
        "                    \"params\":{\n" +
        "                        \"wormholeId\":1001\n" +
        "                    }\n" +
        "                }\n" +
        "            },\n" +
        "            \"children\":[\n" +
        "                {\n" +
        "                    \"name\":\"Text\",\n" +
        "                    \"id\":-3,\n" +
        "                    \"props\":{\n" +
        "                        \"style\":{\n" +
        "                            \"backgroundColor\":-3157548,\n" +
        "                            \"top\":2,\n" +
        "                            \"color\":-9737104,\n" +
        "                            \"fontSize\":12,\n" +
        "                            \"lineHeight\":16,\n" +
        "                            \"position\":\"absolute\",\n" +
        "                            \"right\":2\n" +
        "                        },\n" +
        "                        \"text\":\"广告\"\n" +
        "                    }\n" +
        "                },\n" +
        "                {\n" +
        "                    \"name\":\"View\",\n" +
        "                    \"id\":-4,\n" +
        "                    \"props\":{\n" +
        "                        \"onClick\":true,\n" +
        "                        \"style\":{\n" +
        "                            \"top\":50,\n" +
        "                            \"width\":20,\n" +
        "                            \"position\":\"absolute\",\n" +
        "                            \"right\":0,\n" +
        "                            \"height\":20\n" +
        "                        }\n" +
        "                    },\n" +
        "                    \"children\":[\n" +
        "                        {\n" +
        "                            \"name\":\"Image\",\n" +
        "                            \"id\":-5,\n" +
        "                            \"props\":{\n" +
        "                                \"src\":\"http://zxpic.imtt.qq.com/zxpic_imtt/2018/06/08/2000/originalimage/200721_3738332814_3_540_364.jpg\",\n" +
        "                                \"style\":{\n" +
        "                                    \"width\":20,\n" +
        "                                    \"height\":20\n" +
        "                                }\n" +
        "                            }\n" +
        "                        }\n" +
        "                    ]\n" +
        "                },\n" +
        "                {\n" +
        "                    \"name\":\"View\",\n" +
        "                    \"id\":-6,\n" +
        "                    \"props\":{\n" +
        "                        \"onClick\":true,\n" +
        "                        \"style\":{\n" +
        "                            \"top\":80,\n" +
        "                            \"width\":24,\n" +
        "                            \"position\":\"absolute\",\n" +
        "                            \"right\":-2,\n" +
        "                            \"height\":24\n" +
        "                        }\n" +
        "                    },\n" +
        "                    \"children\":[\n" +
        "                        {\n" +
        "                            \"name\":\"Image\",\n" +
        "                            \"id\":-7,\n" +
        "                            \"props\":{\n" +
        "                                \"src\":\"http://zxpic.imtt.qq.com/zxpic_imtt/2018/06/08/2000/originalimage/200721_3738332814_3_540_364.jpg\",\n" +
        "                                \"style\":{\n" +
        "                                    \"width\":20,\n" +
        "                                    \"height\":20\n" +
        "                                }\n" +
        "                            }\n" +
        "                        }\n" +
        "                    ]\n" +
        "                },\n" +
        "                {\n" +
        "                    \"name\":\"Text\",\n" +
        "                    \"id\":-8,\n" +
        "                    \"props\":{\n" +
        "                        \"style\":{\n" +
        "                            \"top\":105,\n" +
        "                            \"color\":-16744448,\n" +
        "                            \"textAlign\":\"right\",\n" +
        "                            \"width\":300,\n" +
        "                            \"lineHeight\":20,\n" +
        "                            \"fontSize\":12,\n" +
        "                            \"position\":\"absolute\",\n" +
        "                            \"right\":-20\n" +
        "                        },\n" +
        "                        \"text\":\"\"\n" +
        "                    }\n" +
        "                },\n" +
        "                {\n" +
        "                    \"name\":\"Text\",\n" +
        "                    \"id\":-9,\n" +
        "                    \"props\":{\n" +
        "                        \"style\":{\n" +
        "                            \"marginHorizontal\":12,\n" +
        "                            \"color\":-1819356,\n" +
        "                            \"numberOfLines\":1,\n" +
        "                            \"fontSize\":16,\n" +
        "                            \"marginTop\":12,\n" +
        "                            \"fontWeight\":\"bold\",\n" +
        "                            \"height\":30\n" +
        "                        },\n" +
        "                        \"text\":\"Foo Card! #[广告]--Nike,永不止步！\"\n" +
        "                    }\n" +
        "                },\n" +
        "                {\n" +
        "                    \"name\":\"Image\",\n" +
        "                    \"id\":-10,\n" +
        "                    \"props\":{\n" +
        "                        \"src\":\"https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1596476976953&amp;di=296ecd6b4a91719a814bfc0ff8d44904&amp;imgtype=0&amp;src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D756258046%2C2809017249%26fm%3D214%26gp%3D0.jpg, alt=, \",\n" +
        "                        \"style\":{\n" +
        "                            \"width\":117,\n" +
        "                            \"marginBottom\":6,\n" +
        "                            \"height\":70,\n" +
        "                            \"marginLeft\":12\n" +
        "                        }\n" +
        "                    }\n" +
        "                }\n" +
        "            ]\n" +
        "        }\n" +
        "    ]\n" +
        "}";
      onGetVDomResult.onResult(hardCodeVueDom);
    }
  }
}
