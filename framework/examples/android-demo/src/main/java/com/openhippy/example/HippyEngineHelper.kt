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

class HippyEngineHelper {

    companion object {

        private val hippyEngineList: MutableList<HippyEngineWrapper> = mutableListOf()
        private val abandonHippyEngineList: MutableList<HippyEngineWrapper> = mutableListOf()


        fun createHippyEngine(
            driverMode: PageConfiguration.DriverMode,
            isDebug: Boolean,
            debugServerHost: String
        ): HippyEngineWrapper {
            val hippyEngineWrapper = HippyEngineWrapper(driverMode, isDebug, debugServerHost)
            hippyEngineList.add(hippyEngineWrapper)
            return hippyEngineWrapper
        }

        fun getHippyEngineList(): MutableList<HippyEngineWrapper> {
            return hippyEngineList
        }

        fun destroyInstance(rootId: Int, hippyEngineWrapper: HippyEngineWrapper) {
            hippyEngineWrapper.destroyInstance(rootId)
            if (hippyEngineWrapper.getPageCount() == 0) {
                hippyEngineList.remove(hippyEngineWrapper)
                abandonHippyEngineList.add(hippyEngineWrapper)
            }
        }

        fun clearAbandonHippyEngine() {
            abandonHippyEngineList.clear()
        }
    }

}