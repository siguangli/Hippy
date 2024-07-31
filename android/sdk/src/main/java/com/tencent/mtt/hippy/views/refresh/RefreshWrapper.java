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

package com.tencent.mtt.hippy.views.refresh;

import static android.widget.LinearLayout.VERTICAL;

import android.animation.Animator;
import android.animation.ObjectAnimator;
import android.content.Context;
import android.view.MotionEvent;
import android.view.View;
import android.view.animation.AccelerateInterpolator;

import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.uimanager.HippyViewEvent;
import com.tencent.mtt.hippy.utils.LogUtils;
import com.tencent.mtt.hippy.utils.PixelUtil;
import com.tencent.mtt.hippy.views.hippylist.HippyRecyclerViewWrapper;
import com.tencent.mtt.hippy.views.view.HippyViewGroup;
import com.tencent.mtt.hippy.views.viewpager.HippyViewPager;
import com.tencent.mtt.supportui.views.recyclerview.RecyclerViewBase;

@SuppressWarnings({"deprecation", "unused"})
public class RefreshWrapper extends HippyViewGroup {

    RefreshWrapperItemView mRefreshWrapperItemView;
    RefreshWrapperFooterItemView mRefreshWrapperFooterItemView;
    View mContentView;

    float mTansY = -1;
    float mTansX = -1;
    float mStartHeaderTransY = 0;
    float mStartHeaderTransX = 0;
    float mStartFooterTransY = 0;
    float mStartFooterTransX = 0;
    float mStartY = 0;
    float mStartX = 0;
    float mStartDownY = -1;
    float mStartDownX = -1;

    RefreshState mHeaderState = RefreshState.Init;
    RefreshState mFooterState = RefreshState.Init;

    int mBounceTime = 300;
    protected int mOrientationMode = VERTICAL;
    protected boolean mScrollEventEnable = true;
    protected int mScrollEventThrottle = 400;  // 400ms最多回调一次
    private long mLastScrollEventTimeStamp = -1;

    public void onHeaderRefreshComplected() {
        if (isVertical()) {
            bounceToHeadY(0);
        } else {
            bounceToHeadX(0);
        }
        mHeaderState = RefreshState.Init;
    }

    public void onFooterRefreshCompleted() {
        if (isVertical()) {
            bounceToFooterY(0);
        } else {
            bounceToFooterX(0);
        }
        mFooterState = RefreshState.Init;
    }

    public void setTime(int time) {
        this.mBounceTime = time;
    }

    enum RefreshState {
        Init,
        Loading,
    }

    public RefreshWrapper(Context context) {
        super(context);
    }

    void setHeaderTranslationX(float x) {
        if (mRefreshWrapperItemView != null) {
            mRefreshWrapperItemView.setTranslationX(x > 0 ? x : 0);
        }
        if (mContentView != null) {
            mContentView.setTranslationX(x > 0 ? x : 0);
        }
    }

    void setFooterTranslationX(float x) {
        if (mRefreshWrapperFooterItemView != null) {
            mRefreshWrapperFooterItemView.setTranslationX(x < 0 ? x : 0);
        }
        if (mContentView != null) {
            mContentView.setTranslationX(x < 0 ? x : 0);
        }
    }

    void setChildrenTranslationY(float y) {
        if (mRefreshWrapperItemView != null) {
            mRefreshWrapperItemView.setTranslationY(y > 0 ? y : 0);
        }
        if (mContentView != null) {
            mContentView.setTranslationY(y > 0 ? y : 0);
        }
    }

    public void setOnScrollEventEnable(boolean enable) {
        mScrollEventEnable = enable;
    }

    public void setScrollEventThrottle(int scrollEventThrottle) {
        mScrollEventThrottle = scrollEventThrottle;
    }

    void bounceToFooterX(float toTransX) {
        if (mContentView != null && mRefreshWrapperFooterItemView != null) {
            Animator contentAnimator = ObjectAnimator
                    .ofFloat(mContentView, "TranslationX", mContentView.getTranslationX(), toTransX);
            contentAnimator.setDuration(mBounceTime);
            contentAnimator.setInterpolator(new AccelerateInterpolator());
            Animator wrapperAnimator = ObjectAnimator.ofFloat(mRefreshWrapperFooterItemView, "TranslationX",
                    mRefreshWrapperFooterItemView.getTranslationX(), toTransX);
            wrapperAnimator.setInterpolator(new AccelerateInterpolator());
            wrapperAnimator.setDuration(mBounceTime);
            contentAnimator.start();
            wrapperAnimator.start();
        }
    }

    void bounceToHeadX(float toTransX) {
        if (mContentView != null && mRefreshWrapperItemView != null) {
            Animator contentAnimator = ObjectAnimator
                    .ofFloat(mContentView, "TranslationX", mContentView.getTranslationX(), toTransX);
            contentAnimator.setDuration(mBounceTime);
            contentAnimator.setInterpolator(new AccelerateInterpolator());
            Animator wrapperAnimator = ObjectAnimator.ofFloat(mRefreshWrapperItemView, "TranslationX",
                    mRefreshWrapperItemView.getTranslationX(), toTransX);
            wrapperAnimator.setInterpolator(new AccelerateInterpolator());
            wrapperAnimator.setDuration(mBounceTime);
            contentAnimator.start();
            wrapperAnimator.start();
        }
    }

    void bounceToFooterY(float toTransY) {
        if (mContentView != null && mRefreshWrapperFooterItemView != null) {
            Animator contentAnimator = ObjectAnimator
                    .ofFloat(mContentView, "TranslationY", mContentView.getTranslationY(), toTransY);
            contentAnimator.setDuration(mBounceTime);
            contentAnimator.setInterpolator(new AccelerateInterpolator());
            Animator wrapperAnimator = ObjectAnimator.ofFloat(mRefreshWrapperFooterItemView, "TranslationY",
                    mRefreshWrapperFooterItemView.getTranslationY(),
                    toTransY);
            wrapperAnimator.setInterpolator(new AccelerateInterpolator());
            wrapperAnimator.setDuration(mBounceTime);
            contentAnimator.start();
            wrapperAnimator.start();
        }
    }

    void bounceToHeadY(float toTransY) {
        if (mContentView != null && mRefreshWrapperItemView != null) {
            Animator contentAnimator = ObjectAnimator
                    .ofFloat(mContentView, "TranslationY", mContentView.getTranslationY(), toTransY);
            contentAnimator.setDuration(mBounceTime);
            contentAnimator.setInterpolator(new AccelerateInterpolator());
            Animator wrapperAnimator = ObjectAnimator.ofFloat(mRefreshWrapperItemView, "TranslationY",
                    mRefreshWrapperItemView.getTranslationY(),
                    toTransY);
            wrapperAnimator.setInterpolator(new AccelerateInterpolator());
            wrapperAnimator.setDuration(mBounceTime);
            contentAnimator.start();
            wrapperAnimator.start();
        }
    }

    float getCompactScrollY() {
        if (mContentView instanceof RecyclerViewBase) {
            return ((RecyclerViewBase) mContentView).getOffsetY();
        }
        if (mContentView instanceof HippyRecyclerViewWrapper) {
            return ((HippyRecyclerViewWrapper) mContentView).computeVerticalScrollOffset();
        }
        return mContentView.getScrollY();
    }

    private boolean handleVerticalMoveEvent(MotionEvent event, float nowMoveX, float nowMoveY) {
        if (nowMoveY - mStartY > 0) {
            float scrollY = getCompactScrollY();
            if (scrollY == 0) {
                if (mStartDownY == -1) {
                    mStartDownY = nowMoveY;
                } else {
                    mTansY = (nowMoveY - mStartDownY) / 3;
                    setChildrenTranslationY(mTansY + mStartHeaderTransY);
                    //把y的偏移值返回给js侧,这里把偏移值转换为负数，方便前端理解
                    sendOnScrollEvent(-mTansY);
                }

                //如果垂直滚动得比水平滚动得多，就认为当前用户手势是一个上下拉，RefreshWrapper就把事件吃掉，RefreshWrapper里面的孩子就收不到事件了
                //否则RefreshWrapper里面的孩子能收到事件，ViewPager还能继续处理左右滚动事件。
                if (Math.abs(nowMoveX - mStartX) < Math.abs((nowMoveY - mStartY))) {
                    return true;
                }
            }
        } else if (mHeaderState == RefreshState.Loading) {
            float dis = nowMoveY - mStartY;
            if (mRefreshWrapperItemView.getTranslationY() > 0) {
                setChildrenTranslationY(mStartHeaderTransY + dis);
                //如果垂直滚动得比水平滚动得多，就认为当前用户手势是一个上下拉，RefreshWrapper就把事件吃掉，RefreshWrapper里面的孩子就收不到事件了
                //否则RefreshWrapper里面的孩子能收到事件，ViewPager还能继续处理左右滚动事件。
                if (Math.abs(nowMoveX - mStartX) < Math.abs(dis)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean handleHorizontalHeaderMoveEvent(MotionEvent event, float nowMoveX) {
        float distance = nowMoveX - mStartX;
        if (distance > 0) {
            mTansX = distance / 3;
            setHeaderTranslationX(mTansX + mStartHeaderTransX);
            //把y的偏移值返回给js侧,这里把偏移值转换为负数，方便前端理解
            sendOnScrollEvent(-mTansX);
            return true;
        } else if (mHeaderState == RefreshState.Loading) {
            if (mRefreshWrapperItemView.getTranslationX() > 0) {
                setHeaderTranslationX(mStartHeaderTransX + distance);
                return true;
            }
        }
        return false;
    }

    private boolean handleHorizontalFooterMoveEvent(MotionEvent event, float nowMoveX) {
        float distance = mStartX - nowMoveX;
        if (distance > 0) {
            mTansX = distance / 3;
            setFooterTranslationX(-(mTansX + mStartFooterTransX));
            //把y的偏移值返回给js侧,这里把偏移值转换为负数，方便前端理解
            sendOnScrollEvent(mTansX);
            return true;
        } else if (mFooterState == RefreshState.Loading) {
            if (mRefreshWrapperFooterItemView.getTranslationX() < 0) {
                setFooterTranslationX(mStartFooterTransX - distance);
                return true;
            }
        }
        return false;
    }

    private boolean handleHorizontalMoveEvent(MotionEvent event, float nowMoveX) {
        boolean canScrollRight = true;
        boolean canScrollLeft = true;
        if (mContentView instanceof HippyViewPager) {
            canScrollRight = mContentView.canScrollHorizontally(-1);
            canScrollLeft = mContentView.canScrollHorizontally(1);
        }
        if (!canScrollRight && handleHorizontalHeaderMoveEvent(event, nowMoveX)) {
            return true;
        } else if (!canScrollLeft && handleHorizontalFooterMoveEvent(event, nowMoveX)) {
            return true;
        }
        return false;
    }

    private void handleVerticalUpEvent(MotionEvent event, float nowMoveX, float nowMoveY) {
        if (mHeaderState == RefreshState.Init) {
            if (mTansY < mRefreshWrapperItemView.getHeight()
                    && mRefreshWrapperItemView.getTranslationY() > 0) {
                bounceToHeadY(0);
                //如果是水平滚动，不发送cancle事件。
                if (Math.abs(nowMoveX - mStartX) < Math.abs((nowMoveY - mStartY))) {
                    sendCancelEvent(event);
                }
            } else if (mTansY > mRefreshWrapperItemView.getHeight()) {
                startHeaderRefresh();
                //如果是水平滚动，不发送cancle事件。
                if (Math.abs(nowMoveX - mStartX) < Math.abs((nowMoveY - mStartY))) {
                    sendCancelEvent(event);
                }
            }
        } else if (mHeaderState == RefreshState.Loading) {
            if (mRefreshWrapperItemView.getTranslationY() > mRefreshWrapperItemView.getHeight()) {
                startHeaderRefresh();
                //如果是水平滚动，不发送cancle事件。
                if (Math.abs(nowMoveX - mStartX) < Math.abs((nowMoveY - mStartY))) {
                    sendCancelEvent(event);
                }
            }
        }
        mStartDownY = -1;
    }

    private void handleHorizontalHeaderUpEvent(MotionEvent event, float nowMoveX) {
        if (mHeaderState == RefreshState.Init) {
            if (mTansX < mRefreshWrapperItemView.getWidth()
                    && mRefreshWrapperItemView.getTranslationX() > 0) {
                bounceToHeadX(0);
                sendCancelEvent(event);
            } else if (mTansX > mRefreshWrapperItemView.getWidth()) {
                startHeaderRefresh();
                sendCancelEvent(event);
            }
        } else if (mHeaderState == RefreshState.Loading) {
            if (mRefreshWrapperItemView.getTranslationX() > mRefreshWrapperItemView.getWidth()) {
                startHeaderRefresh();
                sendCancelEvent(event);
            }
        }
    }

    private void handleHorizontalFooterUpEvent(MotionEvent event, float nowMoveX) {
        LogUtils.e("maxli", "handleHorizontalFooterUpEvent: mTansX " + mTansX + ", TranslationX " + mRefreshWrapperFooterItemView.getTranslationX());
        if (mFooterState == RefreshState.Init) {
            if (mTansX < mRefreshWrapperFooterItemView.getWidth()
                    && mRefreshWrapperFooterItemView.getTranslationX() < 0) {
                bounceToFooterX(0);
                sendCancelEvent(event);
            } else if (mTansX > mRefreshWrapperFooterItemView.getWidth()) {
                startFooterRefresh();
                sendCancelEvent(event);
            }
        } else if (mFooterState == RefreshState.Loading) {
            if (mRefreshWrapperFooterItemView.getTranslationX() > mRefreshWrapperFooterItemView.getWidth()) {
                startFooterRefresh();
                sendCancelEvent(event);
            }
        }
    }

    private void handleHorizontalUpEvent(MotionEvent event, float nowMoveX, float nowMoveY) {
        boolean canScrollRight = true;
        boolean canScrollLeft = true;
        if (mContentView instanceof HippyViewPager) {
            canScrollRight = mContentView.canScrollHorizontally(-1);
            canScrollLeft = mContentView.canScrollHorizontally(1);
        }
        if (!canScrollRight) {
            handleHorizontalHeaderUpEvent(event, nowMoveX);
        } else if (!canScrollLeft) {
            handleHorizontalFooterUpEvent(event, nowMoveX);
        }
    }

    @Override
    public boolean dispatchTouchEvent(MotionEvent event) {
        float nowMoveY = event.getRawY();
        float nowMoveX = event.getRawX();
        if (mContentView != null && mRefreshWrapperItemView != null) {
            switch (event.getAction()) {
                case MotionEvent.ACTION_DOWN:
                    mStartY = event.getRawY();
                    mStartX = event.getRawX(); //记录首次DOWN的位置
                    if (isVertical()) {
                        mStartHeaderTransY = mRefreshWrapperItemView.getTranslationY();
                        mStartFooterTransY = mRefreshWrapperFooterItemView.getTranslationX();
                    } else {
                        mStartHeaderTransX = mRefreshWrapperItemView.getTranslationX();
                        mStartFooterTransX = mRefreshWrapperFooterItemView.getTranslationX();
                    }
                    break;
                case MotionEvent.ACTION_MOVE:
                    if (isVertical()) {
                        if (handleVerticalMoveEvent(event, nowMoveX, nowMoveY)) {
                            return true;
                        }
                    } else {
                        if (handleHorizontalMoveEvent(event, nowMoveX)) {
                            return true;
                        }
                    }
                    break;
                case MotionEvent.ACTION_UP:
                    if (isVertical()) {
                        handleVerticalUpEvent(event, nowMoveX, nowMoveY);
                    } else {
                        handleHorizontalUpEvent(event, nowMoveX, nowMoveY);
                    }
                    break;
            }
        }
        return super.dispatchTouchEvent(event);
    }

    public void sendCancelEvent(MotionEvent event) {
        MotionEvent motionEvent = MotionEvent.obtain(event);
        motionEvent.setAction(MotionEvent.ACTION_CANCEL);
        mContentView.dispatchTouchEvent(motionEvent);
    }

    public void startFooterRefresh() {
        if (isVertical()) {
            mTansY = -1;
            bounceToFooterY(-mRefreshWrapperItemView.getHeight());
        } else {
            mTansX = -1;
            bounceToFooterX(-mRefreshWrapperItemView.getWidth());
        }
        mFooterState = RefreshState.Loading;
        new HippyViewEvent("onFooterRefresh").send(this, null);
    }

    public void startHeaderRefresh() {
        if (isVertical()) {
            mTansY = -1;
            bounceToHeadY(mRefreshWrapperItemView.getHeight());
        } else {
            mTansX = -1;
            bounceToHeadX(mRefreshWrapperItemView.getWidth());
        }
        mHeaderState = RefreshState.Loading;
        new HippyViewEvent("onRefresh").send(this, null);
    }

    public void sendOnScrollEvent(float y) {
        if (mScrollEventEnable) {
            long currTime = System.currentTimeMillis();
            if (currTime - mLastScrollEventTimeStamp < mScrollEventThrottle) {
                return;
            }
            new HippyViewEvent("onScroll").send(this, generateScrollEvent(y));
            mLastScrollEventTimeStamp = currTime;
        }
    }

    private HippyMap generateScrollEvent(float y) {
        HippyMap contentOffset = new HippyMap();
        contentOffset.pushDouble("x", PixelUtil.px2dp(0));
        contentOffset.pushDouble("y", PixelUtil.px2dp(y));
        HippyMap event = new HippyMap();
        event.pushMap("contentOffset", contentOffset);
        return event;
    }

    private boolean isVertical() {
        return mOrientationMode == VERTICAL;
    }

    @Override
    public void addView(View child, int index) {
        if (child instanceof RefreshWrapperItemView) {
            if (child instanceof RefreshWrapperFooterItemView) {
                mRefreshWrapperFooterItemView = (RefreshWrapperFooterItemView) child;
                if (mContentView instanceof HippyViewPager) {
                    mRefreshWrapperFooterItemView.setOrientation(((HippyViewPager) mContentView).getOrientationMode());
                    mRefreshWrapperFooterItemView.setContentView(mContentView);
                }
            } else {
                mRefreshWrapperItemView = (RefreshWrapperItemView) child;
            }
        } else {
            mContentView = child;
            if (mContentView instanceof HippyViewPager) {
                mOrientationMode = ((HippyViewPager) mContentView).getOrientationMode();
                if (mRefreshWrapperItemView != null) {
                    mRefreshWrapperItemView.setOrientation(mOrientationMode);
                }
            }
        }
        super.addView(child, index);
    }
}
