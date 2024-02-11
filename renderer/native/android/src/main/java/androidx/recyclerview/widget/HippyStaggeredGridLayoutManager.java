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

import com.tencent.mtt.hippy.views.hippylist.HippyRecyclerListAdapter;

import java.util.Arrays;
import java.util.HashMap;

public class HippyStaggeredGridLayoutManager extends StaggeredGridLayoutManager {

    private static final String TAG = "HippyStaggeredGridLayoutManager";
    public static final int INVALID_SIZE = -1;
    protected HashMap<Integer, Integer> itemSizeMaps = new HashMap<>();
    private int[] mSpanTotalHeight;

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
        RecyclerView.LayoutParams lp = (RecyclerView.LayoutParams) child.getLayoutParams();
        int size = getOrientation() == RecyclerView.VERTICAL
                ? bottom - top + lp.topMargin + lp.bottomMargin
                : right - left + lp.leftMargin + lp.rightMargin;
        cacheItemLayoutParams(size, getPosition(child));
    }

    @Override
    public int computeVerticalScrollRange(State state) {
        int maxH = INVALID_SIZE;
        for (int i = 0; i < getSpanCount(); i++) {
            int sh = getSpanHeightBeforeIndex(i, mSpans[i].mViews.size() - 1);
            mSpanTotalHeight[i] = sh;
            if (sh > maxH) {
                maxH = sh;
            }
        }
        return maxH > 0 ? maxH : super.computeVerticalScrollRange(state);
    }

    @Override
    public int computeVerticalScrollOffset(State state) {
        if (getChildCount() <= 0 || getItemCount() <= 0) {
            return 0;
        }
        int[] positions = findLastVisibleItemPositions(null);
        View firstVisibleView = findViewByPosition(positions[0]);
        int index = mSpans[0].mViews.indexOf(firstVisibleView);
        int end = mPrimaryOrientation.getDecoratedEnd(firstVisibleView);
        int total = getSpanHeightBeforeIndex(0, index);
        if (firstVisibleView != null && total != INVALID_SIZE) {
            return total - end;
        }
        return super.computeVerticalScrollOffset(state);
    }

    int getSpanHeightBeforeIndex(int span, int index) {
        if (span < 0 || index < 0) {
            return 0;
        }
        HippyRecyclerListAdapter adapter = (HippyRecyclerListAdapter) mRecyclerView.getAdapter();
        if (adapter.hasHeader()) {

        }
        int totalSize = 0;
        for (int i = 0; i <= index; i++) {
            View child = mSpans[span].mViews.get(i);
            ViewHolder vh = RecyclerView.getChildViewHolderInt(child);
            if (vh == null) {
                continue;
            }
            if (!vh.shouldIgnore() && (mRecyclerView.mState.isPreLayout() || !vh.isRemoved())) {
                Integer size = itemSizeMaps.get(vh.getLayoutPosition());
                if (size == null) {
                    size = getItemSizeFromAdapter(vh.getLayoutPosition(), child);
                }
                if (size == INVALID_SIZE) {
                    return INVALID_SIZE;
                }
                totalSize += size;
            }
        }
        return totalSize;
    }

    int getItemSizeFromAdapter(int position, View itemView) {
        Adapter adapter = mRecyclerView.getAdapter();
        if (adapter instanceof ItemLayoutParams) {
            ItemLayoutParams layoutInfo = (ItemLayoutParams) adapter;
            resetLayoutParams();
            layoutInfo.getItemLayoutParams(itemView, ITEM_LAYOUT_PARAMS);
            if (getOrientation() == RecyclerView.VERTICAL) {
                if (ITEM_LAYOUT_PARAMS.height >= 0) {
                    int size = ITEM_LAYOUT_PARAMS.height + ITEM_LAYOUT_PARAMS.bottomMargin
                            + ITEM_LAYOUT_PARAMS.topMargin;
                    cacheItemLayoutParams(size, position);
                    return size;
                }
            } else {
                if (ITEM_LAYOUT_PARAMS.width >= 0) {
                    int size = ITEM_LAYOUT_PARAMS.width + ITEM_LAYOUT_PARAMS.leftMargin
                            + ITEM_LAYOUT_PARAMS.rightMargin;
                    cacheItemLayoutParams(size, position);
                    return size;
                }
            }
        }
        return INVALID_SIZE;
    }

    public void resetCache() {
        itemSizeMaps.clear();
    }

    private void cacheItemLayoutParams(int size, int position) {
        itemSizeMaps.put(position, size);
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
