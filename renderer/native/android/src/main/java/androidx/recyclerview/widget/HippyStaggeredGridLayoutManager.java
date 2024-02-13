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

package androidx.recyclerview.widget;

import android.view.View;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView.Adapter;
import androidx.recyclerview.widget.RecyclerView.State;
import androidx.recyclerview.widget.RecyclerView.ViewHolder;

import com.tencent.mtt.hippy.uimanager.RenderManager;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.mtt.hippy.views.hippylist.HippyRecyclerListAdapter;
import com.tencent.renderer.node.ListItemRenderNode;
import com.tencent.renderer.node.RenderNode;
import com.tencent.renderer.node.WaterfallItemRenderNode;

import java.util.Arrays;
import java.util.HashMap;

public class HippyStaggeredGridLayoutManager extends StaggeredGridLayoutManager {

    private static final String TAG = "HippyStaggeredGridLayoutManager";
    public static final int INVALID_SIZE = -1;
    protected HashMap<Integer, Integer> itemSizeMaps = new HashMap<>();
    private final int[] mSpanTotalHeight;

    private static final RecyclerView.LayoutParams ITEM_LAYOUT_PARAMS = new RecyclerView.LayoutParams(
            0, 0);

    public HippyStaggeredGridLayoutManager(int spanCount, int orientation) {
        super(spanCount, orientation);
        mSpanTotalHeight = new int[spanCount];
        Arrays.fill(mSpanTotalHeight, INVALID_SIZE);
    }

    @Override
    public void layoutDecoratedWithMargins(@NonNull View child, int left, int top, int right,
            int bottom) {
        super.layoutDecoratedWithMargins(child, left, top, right, bottom);
        StaggeredGridLayoutManager.LayoutParams lp = (StaggeredGridLayoutManager.LayoutParams) child.getLayoutParams();
        int size = getOrientation() == RecyclerView.VERTICAL
                ? bottom - top + lp.topMargin + lp.bottomMargin
                : right - left + lp.leftMargin + lp.rightMargin;
        RenderNode childNode = RenderManager.getRenderNode(child);
        if (childNode instanceof WaterfallItemRenderNode) {
            ((WaterfallItemRenderNode) childNode).setSpanIndex(lp.getSpanIndex());
            cacheItemLayoutParams(size, childNode.getId());
        }
    }

    @Override
    public int computeVerticalScrollRange(State state) {
        int maxH = INVALID_SIZE;
        if (mSpanTotalHeight[0] == INVALID_SIZE) {
            computeSpanTotalHeight();
        }
        for (int i = 0; i < getSpanCount(); i++) {
            if (mSpanTotalHeight[i] > maxH) {
                maxH = mSpanTotalHeight[i];
            }
        }
        int extent = computeVerticalScrollExtent(state);
        int range = maxH - extent;
        LogUtils.e("maxli", "computeVerticalScrollRange: maxH " + maxH
                + ", extent " + extent + ", range " + range);
        return maxH > 0 ? maxH : super.computeVerticalScrollRange(state);
    }

    @Override
    public int computeVerticalScrollOffset(State state) {
        if (getChildCount() <= 0 || getItemCount() <= 0) {
            return 0;
        }
        int[] positions = findFirstVisibleItemPositions(null);
        LogUtils.e("maxli", "computeVerticalScrollOffset: positions "
                + positions[0] + ", " + positions[1]);
        View firstVisibleView = null;
        int index = 0;
        LogUtils.e("maxli", "computeVerticalScrollOffset: mViews.size() "
                + mSpans[0].mViews.size());
        for (int i = 0; i < mSpans[0].mViews.size(); i++) {
            View child = mSpans[0].mViews.get(i);
            ViewHolder vh = mRecyclerView.getChildViewHolderInt(child);
            if (vh == null) {
                continue;
            }
            if (vh.getLayoutPosition() == positions[0] && !vh.shouldIgnore()
                    && (mRecyclerView.mState.isPreLayout() || !vh.isRemoved())) {
                firstVisibleView = child;
                index = i;
                break;
            }
        }
        if (firstVisibleView != null) {
            int end = mPrimaryOrientation.getDecoratedEnd(firstVisibleView);
            int total = computeSpanHeightUntilFirstVisibleView(0, firstVisibleView);
            LogUtils.e("maxli", "computeVerticalScrollOffset: index " + index
                    + ", end " + end + ", total " + total);
            if (firstVisibleView != null && total != INVALID_SIZE) {
                LogUtils.e("maxli", "computeVerticalScrollOffset: offset " + (total - end));
                return total - end;
            }
        }
        return super.computeVerticalScrollOffset(state);
    }

    private void computeChildHeight(@NonNull WaterfallItemRenderNode child) {
        int spanIndex = ((WaterfallItemRenderNode) child).getSpanIndex();
        if (spanIndex < getSpanCount() && spanIndex >= 0) {
            Integer size = itemSizeMaps.get(child.getId());
            if (size == null) {
                size = getItemSizeFromAdapter(child);
            }
            mSpanTotalHeight[spanIndex] += size;
        }
    }

    private int computeChildHeight(int span, @NonNull WaterfallItemRenderNode child) {
        int spanIndex = ((WaterfallItemRenderNode) child).getSpanIndex();
        if (spanIndex == span) {
            Integer size = itemSizeMaps.get(child.getId());
            if (size == null) {
                size = getItemSizeFromAdapter(child);
            }
            return size;
        }
        return 0;
    }

    void computeSpanTotalHeight() {
        HippyRecyclerListAdapter adapter = (HippyRecyclerListAdapter) mRecyclerView.getAdapter();
        if (adapter == null) {
            return;
        }
        for (int i = 0; i <= adapter.getItemCount(); i++) {
            ListItemRenderNode child = adapter.getChildNode(i);
            if (child instanceof WaterfallItemRenderNode) {
                computeChildHeight((WaterfallItemRenderNode) child);
            }
        }
    }

    int computeSpanHeightUntilFirstVisibleView(int span, @NonNull View firstVisibleView) {
        HippyRecyclerListAdapter adapter = (HippyRecyclerListAdapter) mRecyclerView.getAdapter();
        if (span < 0 || adapter == null) {
            return 0;
        }
        int totalSize = 0;
        for (int i = 0; i <= adapter.getItemCount(); i++) {
            ListItemRenderNode child = adapter.getChildNode(i);
            if (child instanceof WaterfallItemRenderNode) {
                totalSize += computeChildHeight(span, (WaterfallItemRenderNode) child);
            }
            if (firstVisibleView.getId() == child.getId()) {
                break;
            }
        }
        return totalSize;
    }

    int getItemSizeFromAdapter(ListItemRenderNode node) {
        Adapter adapter = mRecyclerView.getAdapter();
        if (adapter instanceof ItemLayoutParams) {
            ItemLayoutParams layoutInfo = (ItemLayoutParams) adapter;
            resetLayoutParams();
            layoutInfo.getItemLayoutParams(node, ITEM_LAYOUT_PARAMS);
            if (getOrientation() == RecyclerView.VERTICAL) {
                if (ITEM_LAYOUT_PARAMS.height >= 0) {
                    int size = ITEM_LAYOUT_PARAMS.height + ITEM_LAYOUT_PARAMS.bottomMargin
                            + ITEM_LAYOUT_PARAMS.topMargin;
                    cacheItemLayoutParams(size, node.getId());
                    return size;
                }
            } else {
                if (ITEM_LAYOUT_PARAMS.width >= 0) {
                    int size = ITEM_LAYOUT_PARAMS.width + ITEM_LAYOUT_PARAMS.leftMargin
                            + ITEM_LAYOUT_PARAMS.rightMargin;
                    cacheItemLayoutParams(size, node.getId());
                    return size;
                }
            }
        }
        return INVALID_SIZE;
    }

    public void resetCache() {
        itemSizeMaps.clear();
    }

    private void cacheItemLayoutParams(int size, int id) {
        itemSizeMaps.put(id, size);
    }

    private static void resetLayoutParams() {
        ITEM_LAYOUT_PARAMS.width = 0;
        ITEM_LAYOUT_PARAMS.height = 0;
        ITEM_LAYOUT_PARAMS.topMargin = 0;
        ITEM_LAYOUT_PARAMS.rightMargin = 0;
        ITEM_LAYOUT_PARAMS.leftMargin = 0;
        ITEM_LAYOUT_PARAMS.bottomMargin = 0;
    }

}
