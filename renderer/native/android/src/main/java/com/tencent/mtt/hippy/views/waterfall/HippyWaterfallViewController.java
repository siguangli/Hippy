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

package com.tencent.mtt.hippy.views.waterfall;

import static com.tencent.mtt.hippy.views.hippylist.HippyRecyclerViewController.HORIZONTAL;
import static com.tencent.renderer.NativeRenderer.SCREEN_SNAPSHOT_ROOT_ID;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.tencent.mtt.hippy.annotation.HippyController;
import com.tencent.mtt.hippy.dom.node.NodeProps;
import com.tencent.mtt.hippy.uimanager.ControllerManager;
import com.tencent.mtt.hippy.uimanager.ControllerRegistry;
import com.tencent.mtt.hippy.uimanager.HippyViewController;
import com.tencent.mtt.hippy.views.hippylist.HippyListUtils;
import com.tencent.mtt.hippy.views.hippylist.HippyRecyclerView;
import com.tencent.mtt.hippy.views.hippylist.HippyRecyclerViewWrapper;
import com.tencent.renderer.NativeRenderContext;
import com.tencent.renderer.node.RenderNode;
import com.tencent.renderer.node.WaterfallRenderNode;
import com.tencent.renderer.utils.MapUtils;
import java.util.Map;

@HippyController(name = HippyWaterfallViewController.CLASS_NAME, dispatchWithStandardType = true)
public class HippyWaterfallViewController<HRW extends HippyRecyclerViewWrapper> extends HippyViewController<HRW> {

    private static final String TAG = "HippyWaterfallViewController";
    public static final String CLASS_NAME = "WaterfallView";

    @Override
    protected View createViewImpl(Context context) {
        return createViewImpl(context, null);
    }

    @Override
    protected View createViewImpl(@NonNull Context context, @Nullable Map<String, Object> props) {
        return new HippyRecyclerViewWrapper(context, initWaterfallView(context, props));
    }

    @Override
    public RenderNode createRenderNode(int rootId, int id, @Nullable Map<String, Object> props,
            @NonNull String className, @NonNull ControllerManager controllerManager, boolean isLazyLoad) {
        return new WaterfallRenderNode(rootId, id, props, className, controllerManager, isLazyLoad);
    }

    @NonNull
    protected HippyRecyclerView initWaterfallView(@NonNull Context context, @Nullable Map<String, Object> props) {
        HippyWaterfallView waterfallView = new HippyWaterfallView(context);
        waterfallView.setItemAnimator(null);
        int orientation = RecyclerView.VERTICAL;
        boolean enableOverPull = true;
        boolean hasStableIds = true;
        if (props != null) {
            if (MapUtils.getBooleanValue(props, HORIZONTAL)) {
                orientation = RecyclerView.HORIZONTAL;
            }
            enableOverPull = MapUtils.getBooleanValue(props, NodeProps.OVER_PULL, true);
            hasStableIds = MapUtils.getBooleanValue(props, NodeProps.HAS_STABLE_IDS, true);
        }
        HippyStaggeredGridLayoutManager layoutManager = new HippyStaggeredGridLayoutManager(2, orientation);
        waterfallView.setLayoutManager(layoutManager);
        waterfallView.initRecyclerView(hasStableIds);
        if (HippyListUtils.isVerticalLayout(waterfallView)) {
            waterfallView.setEnableOverPull(enableOverPull);
        }
        if (context instanceof NativeRenderContext) {
            int rootId = ((NativeRenderContext) context).getRootId();
            if (rootId == SCREEN_SNAPSHOT_ROOT_ID) {
                waterfallView.setScrollEnable(false);
            }
        }
        return waterfallView;
    }

    @Override
    public void onViewDestroy(HRW viewGroup) {
        ((HRW) viewGroup).getRecyclerView().onDestroy();
    }

    @Override
    public int getChildCount(HRW viewGroup) {
        return viewGroup.getChildCountWithCaches();
    }

    @Override
    public View getChildAt(HRW viewGroup, int index) {
        return viewGroup.getChildAtWithCaches(index);
    }

    @Override
    protected void deleteChild(ViewGroup parentView, View childView) {
        super.deleteChild(parentView, childView);
        ((HRW) parentView).getRecyclerView().disableRecycle(childView);
    }

    @Override
    public void onBatchStart(@NonNull HRW view) {
        super.onBatchStart(view);
        view.onBatchStart();
    }

    @Override
    public void onBatchComplete(@NonNull HRW view) {
        super.onBatchComplete(view);
        view.onBatchComplete();
        view.setListData();
    }

    @Override
    public void updateLayout(int rootId, int id, int x, int y, int width, int height,
            ControllerRegistry componentHolder) {
        super.updateLayout(rootId, id, x, y, width, height, componentHolder);
        // nested list may not receive onBatchComplete, so we have to call dispatchLayout here
        View view = componentHolder.getView(rootId, id);
        if (view instanceof HippyRecyclerViewWrapper) {
            ((HippyRecyclerViewWrapper<?>) view).getRecyclerView().dispatchLayout();
        }
    }

}
