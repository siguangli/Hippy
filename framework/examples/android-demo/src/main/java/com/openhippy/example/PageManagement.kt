/*
 * Tencent is pleased to support the open source community by making Hippy
 * available.
 * Copyright (C) 2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.openhippy.example

import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import android.widget.ImageView
import android.widget.ScrollView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.WindowInsetsControllerCompat
import com.openhippy.example.HippyEngineWrapper.EngineAttachInfo
import java.util.SortedMap
import kotlin.math.floor

class PageManagement : AppCompatActivity() {

    private lateinit var pageManagementRoot: View
    private lateinit var pageManagementContainer: View
    private lateinit var scrollerView: ScrollView
    private var pageAddItem: View? = null
    private var pageCount: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        WindowInsetsControllerCompat(window, window.decorView).isAppearanceLightStatusBars = true
        window.statusBarColor = Color.WHITE
        pageManagementRoot = layoutInflater.inflate(R.layout.activity_page_management, null)
        setContentView(pageManagementRoot)
        pageManagementContainer =
            pageManagementRoot.findViewById(R.id.page_management_container)
        val pageManagementBackButton =
            pageManagementRoot.findViewById<View>(R.id.page_management_navigation_back)
        pageManagementBackButton.setOnClickListener { v ->
            onBackPressedDispatcher.onBackPressed()
        }
        scrollerView = ScrollView(this)
        scrollerView.setBackgroundColor(resources.getColor(R.color.home_background))
        val constraintLayout = ConstraintLayout(this)
        constraintLayout.id = pageItemIdCounter.getAndIncrement()
        val constraintLayoutParams = ConstraintLayout.LayoutParams(MATCH_PARENT, WRAP_CONTENT)
        constraintLayout.setPadding(
            0,
            0,
            0,
            resources.getDimension(R.dimen.page_index_item_margin).toInt()
        )
        scrollerView.addView(constraintLayout, constraintLayoutParams)
        val layoutParams = ViewGroup.LayoutParams(MATCH_PARENT, MATCH_PARENT)
        (pageManagementContainer as? ViewGroup)?.addView(scrollerView, layoutParams)
        val hippyEngineList = HippyEngineHelper.getHippyEngineList()
        for (hippyEngineWrapper in hippyEngineList) {
            hippyEngineWrapper.resetPageItem()
        }
    }

    override fun onDestroy() {
        (pageManagementContainer as? ViewGroup)?.removeAllViews()
        super.onDestroy()
    }

    override fun onResume() {
        super.onResume()
        val count = getTotalPageCount()
        if (pageCount != count || count == 0) {
            pageCount = count
            relayoutPageItem()
        }
        resetPageItemImage()
    }

    private fun getTotalPageCount(): Int {
        var count = 0
        val hippyEngineList = HippyEngineHelper.getHippyEngineList()
        for (hippyEngineWrapper in hippyEngineList) {
            count += hippyEngineWrapper.getPageCount()
        }
        return count
    }

    private fun resetPageItemImage() {
        val hippyEngineList = HippyEngineHelper.getHippyEngineList()
        for (hippyEngineWrapper in hippyEngineList) {
            hippyEngineWrapper.resetPageItemImage()
        }
    }

    private fun resetPageItemSize() {
        val defaultWidth = resources.getDimension(R.dimen.page_item_default_width)
        val defaultHeight = resources.getDimension(R.dimen.page_item_default_height)
        val ratio: Float = defaultHeight / defaultWidth
        pageItemWidth = getPageIndexItemWidth()
        pageItemHeight = (pageItemWidth * ratio).toInt()
    }

    private fun collectEngineAttachInfo(): ArrayList<EngineAttachInfo> {
        val hippyEngineList = HippyEngineHelper.getHippyEngineList()
        val engineAttachInfoList: ArrayList<EngineAttachInfo>  = ArrayList()
        for (hippyEngineWrapper in hippyEngineList) {
            hippyEngineWrapper.collectEngineAttachInfo(engineAttachInfoList)
        }
        engineAttachInfoList.sortBy { engineAttachInfo -> engineAttachInfo.rootView.id }
        return engineAttachInfoList
    }

    private fun relayoutPageItem() {
        resetPageItemSize()
        val scrollerContainer = scrollerView.getChildAt(0)
        (scrollerContainer as ViewGroup).removeAllViews()
        val engineAttachInfos = collectEngineAttachInfo()
        for ((index, engineAttachInfo) in engineAttachInfos.withIndex()) {
            resetPageItemLayout(index, engineAttachInfo, engineAttachInfos)
        }
        resetPageItemLayout(pageCount, null, engineAttachInfos)
    }

    private fun resetPageItemLayout(
        index: Int,
        engineAttachInfo: EngineAttachInfo?,
        engineAttachInfos: ArrayList<EngineAttachInfo>
    ) {
        val currentEngineWrapper = engineAttachInfo?.engineWrapperRef?.get()
        val rootId = engineAttachInfo?.rootView?.id ?: -1
        val scrollerContainer = scrollerView.getChildAt(0)
        val margin = resources.getDimension(R.dimen.page_index_item_margin).toInt()
        val row = floor(index / 2.0f)
        val column = index % 2
        var pageItem =
            if (currentEngineWrapper == null) pageAddItem else engineAttachInfo.pageItem
        if (pageItem == null) {
            pageItem = initPageItem(rootId, currentEngineWrapper)
            if (currentEngineWrapper == null) {
                pageAddItem = pageItem
            }
        }
        var layoutParams = pageItem.layoutParams
        if (layoutParams == null) {
            layoutParams = ConstraintLayout.LayoutParams(WRAP_CONTENT, WRAP_CONTENT)
        }
        (layoutParams as ConstraintLayout.LayoutParams).topMargin = margin
        if (row.toInt() == 0) {
            layoutParams.topToTop = scrollerContainer.id
            layoutParams.topToBottom = ConstraintLayout.LayoutParams.UNSET
        } else {
            val before2EngineWrapper = engineAttachInfos[index - 2]
            before2EngineWrapper.pageItem?.let {
                layoutParams.topToBottom = it.id
                layoutParams.topToTop = ConstraintLayout.LayoutParams.UNSET
            }
            layoutParams.topMargin = 4
        }
        if (column == 0) {
            layoutParams.leftToLeft = scrollerContainer.id
            layoutParams.rightToRight = ConstraintLayout.LayoutParams.UNSET
            layoutParams.leftMargin = margin
            layoutParams.rightMargin = 0
        } else {
            layoutParams.rightToRight = scrollerContainer.id
            layoutParams.leftToLeft = ConstraintLayout.LayoutParams.UNSET
            layoutParams.rightMargin = margin
            layoutParams.leftMargin = 0
        }
        if (pageItem.parent != null) {
            (pageItem.parent as ViewGroup).removeView(pageItem)
        }
        (scrollerContainer as ViewGroup).addView(pageItem, layoutParams)
    }

//    private fun getDriverText(hippyEngineWrapper: HippyEngineWrapper): CharSequence {
//        return when (hippyEngineWrapper.driverMode) {
//            PageConfiguration.DriverMode.JS_REACT -> resources.getText(R.string.react)
//            PageConfiguration.DriverMode.JS_VUE_2 -> resources.getText(R.string.vue2)
//            PageConfiguration.DriverMode.JS_VUE_3 -> resources.getText(R.string.vue3)
//            PageConfiguration.DriverMode.VL -> resources.getText(R.string.driver_js_vl)
//        }
//    }

    private fun initPageItem(rootId: Int, hippyEngineWrapper: HippyEngineWrapper?): View {
        val pageItem = layoutInflater.inflate(R.layout.page_index_item, null)
        pageItem.id = pageItemIdCounter.getAndIncrement()
        val pageItemContainer = pageItem.findViewById<View>(R.id.page_item_container)
        val pageItemImage = pageItem.findViewById<ImageView>(R.id.page_item_image)
        val deletePageButton = pageItem.findViewById<View>(R.id.page_item_delete)
        val pageItemTips = pageItem.findViewById<TextView>(R.id.page_item_tips)
        if (hippyEngineWrapper == null) {
            deletePageButton.visibility = View.GONE
            pageItemImage.setImageResource(R.drawable.add_page_2x)
            pageItemImage.layoutParams?.let {
                it.width = resources.getDimension(R.dimen.page_item_add_image_width).toInt()
                it.height = resources.getDimension(R.dimen.page_item_add_image_height).toInt()
            }
            pageItemTips.text = resources.getText(R.string.page_add_item_tips_text)
        } else {
            hippyEngineWrapper.getScreenshot(rootId)?.let {
                pageItemImage.setImageBitmap(it)
            }
            deletePageButton.setOnClickListener { v ->
                HippyEngineHelper.destroyInstance(rootId, hippyEngineWrapper)
                pageCount = getTotalPageCount()
                relayoutPageItem()
            }
            var tips = "${hippyEngineWrapper.getEngineId()},  $rootId"
            pageItemTips.text = tips
        }
        pageItemContainer.layoutParams?.let {
            it.width = pageItemWidth
            it.height = pageItemHeight - resources.getDimension(R.dimen.page_item_attribute_prompt_height).toInt()
        }
        pageItemImage.setOnClickListener { v ->
            PageConfiguration.currentEngineId = hippyEngineWrapper?.getEngineId()?: -1
            PageConfiguration.currentRootId = rootId
            val intent = Intent(this, PageConfiguration::class.java)
            startActivity(intent)
        }
        hippyEngineWrapper?.setPageItem(rootId, pageItem)
        return pageItem
    }
}