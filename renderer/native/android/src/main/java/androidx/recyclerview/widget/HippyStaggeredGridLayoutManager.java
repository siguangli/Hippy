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
    public static final int INVALID_SIZE = Integer.MIN_VALUE;
    protected HashMap<Integer, Integer> itemSizeMaps = new HashMap<>();
    private final int[] mSpanTotalSize;

    private static final RecyclerView.LayoutParams ITEM_LAYOUT_PARAMS = new RecyclerView.LayoutParams(
            0, 0);

    public HippyStaggeredGridLayoutManager(int spanCount, int orientation) {
        super(spanCount, orientation);
        mSpanTotalSize = new int[spanCount];
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
            ((WaterfallItemRenderNode) childNode).setFullSpan(lp.isFullSpan());
            cacheItemLayoutParams(size, childNode.getId());
        }
    }

    @Override
    public int computeVerticalScrollRange(State state) {
        int range = computeScrollRange();
        return range > 0 ? range : super.computeVerticalScrollRange(state);
    }

    @Override
    public int computeHorizontalScrollRange(RecyclerView.State state) {
        int range = computeScrollRange();
        return range > 0 ? range : super.computeHorizontalScrollRange(state);
    }

    private int computeScrollRange() {
        int max = 0;
        Arrays.fill(mSpanTotalSize, 0);
        computeSpanTotalSize();
        for (int i = 0; i < getSpanCount(); i++) {
            if (mSpanTotalSize[i] > max) {
                max = mSpanTotalSize[i];
            }
        }
        return max;
    }

    private View findFirstVisibleView() {
        try {
            int[] positions = findFirstVisibleItemPositions(null);
            for (int i = 0; i < mSpans[0].mViews.size(); i++) {
                View child = mSpans[0].mViews.get(i);
                ViewHolder vh = RecyclerView.getChildViewHolderInt(child);
                if (vh == null) {
                    continue;
                }
                if (vh.getLayoutPosition() == positions[0] && !vh.shouldIgnore()
                        && (mRecyclerView.mState.isPreLayout() || !vh.isRemoved())) {
                    return child;
                }
            }
        } catch (Exception e) {
            LogUtils.w(TAG, "findFirstVisibleView: " + e.getMessage());
        }
        return null;
    }

    @Override
    public int computeHorizontalScrollOffset(State state) {
        if (getChildCount() <= 0 || getItemCount() <= 0) {
            return 0;
        }
        int offset = computeScrollOffset();
        return (offset != INVALID_SIZE) ? offset : super.computeHorizontalScrollOffset(state);
    }

    @Override
    public int computeVerticalScrollOffset(State state) {
        if (getChildCount() <= 0 || getItemCount() <= 0) {
            return 0;
        }
        int offset = computeScrollOffset();
        return (offset != INVALID_SIZE) ? offset : super.computeVerticalScrollOffset(state);
    }

    private int computeScrollOffset() {
        if (getChildCount() <= 0 || getItemCount() <= 0) {
            return 0;
        }
        View firstVisibleView = findFirstVisibleView();
        if (firstVisibleView != null) {
            int end = mPrimaryOrientation.getDecoratedEnd(firstVisibleView);
            int total = computeSpanSizeUntilFirstVisibleView(0, firstVisibleView);
            return total - end;
        }
        return INVALID_SIZE;
    }

    private int getChildSize(@NonNull ListItemRenderNode child) {
        Integer size = itemSizeMaps.get(child.getId());
        if (size == null) {
            size = getItemSizeFromAdapter(child);
        }
        return Math.max(size, 0);
    }

    private void addSpanChildSize(@NonNull WaterfallItemRenderNode child) {
        if (child.isFullSpan()) {
            for (int i = 0; i < getSpanCount(); i++) {
                mSpanTotalSize[i] += getChildSize(child);
            }
        } else {
            int spanIndex = child.getSpanIndex();
            if (spanIndex < getSpanCount() && spanIndex >= 0) {
                mSpanTotalSize[spanIndex] += getChildSize(child);
            }
        }
    }

    private int getChildSizeWithSpanIndex(int spanIndex, @NonNull ListItemRenderNode child) {
        if (child instanceof WaterfallItemRenderNode) {
            WaterfallItemRenderNode node = (WaterfallItemRenderNode) child;
            if (node.getSpanIndex() == spanIndex || node.isFullSpan()) {
                return getChildSize(child);
            }
        }
        return 0;
    }

    void computeSpanTotalSize() {
        HippyRecyclerListAdapter adapter = (HippyRecyclerListAdapter) mRecyclerView.getAdapter();
        if (adapter != null) {
            for (int i = 0; i <= adapter.getItemCount(); i++) {
                ListItemRenderNode child = adapter.getChildNode(i);
                if (child instanceof WaterfallItemRenderNode) {
                    addSpanChildSize((WaterfallItemRenderNode) child);
                }
            }
        }
    }

    int computeSpanSizeUntilFirstVisibleView(int spanIndex, @NonNull View firstVisibleView) {
        HippyRecyclerListAdapter adapter = (HippyRecyclerListAdapter) mRecyclerView.getAdapter();
        if (spanIndex < 0 || adapter == null) {
            return 0;
        }
        int totalSize = 0;
        for (int i = 0; i <= adapter.getItemCount(); i++) {
            ListItemRenderNode child = adapter.getChildNode(i);
            totalSize += getChildSizeWithSpanIndex(spanIndex, child);
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
