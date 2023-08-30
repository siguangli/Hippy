/*
 *
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

#pragma once

#include "driver/modules/module_base.h"
#include "driver/napi/callback_info.h"

namespace hippy {
inline namespace driver {
inline namespace module {

class MetricsModule : public ModuleBase {
 public:
  using CallbackInfo = hippy::CallbackInfo;

  MetricsModule();
  void Info(CallbackInfo& info, void* data);
  void DelayInfo(CallbackInfo& info, void* data);

  virtual std::shared_ptr<CtxValue> BindFunction(std::shared_ptr<Scope> scope, std::shared_ptr<CtxValue> rest_args[]) override;
};

}  // namespace module
}  // namespace driver
}  // namespace hippy
