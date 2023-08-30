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

#include "driver/modules/metrics_module.h"

#include "driver/modules/module_register.h"

using TaskRunner = footstone::runner::TaskRunner;
using Ctx = hippy::Ctx;
using CallbackInfo = hippy::CallbackInfo;

namespace hippy {
inline namespace driver {
inline namespace module {

GEN_INVOKE_CB(MetricsModule, Info)  // NOLINT(cert-err58-cpp)

MetricsModule::MetricsModule() {}

void MetricsModule::Info(CallbackInfo& info, void* data) {
  auto scope_wrapper = reinterpret_cast<ScopeWrapper*>(std::any_cast<void*>(info.GetSlot()));
  auto scope = scope_wrapper->scope.lock();
  FOOTSTONE_CHECK(scope);
  std::shared_ptr<TaskRunner> runner = scope->GetTaskRunner();
  FOOTSTONE_DCHECK(runner);
  runner->TaskMetricsInfo();
  return;
}

std::shared_ptr<CtxValue> MetricsModule::BindFunction(std::shared_ptr<Scope> scope,
                                                      std::shared_ptr<CtxValue>* rest_args) {
  auto context = scope->GetContext();
  auto object = context->CreateObject();

  auto key = context->CreateString("Info");
  auto wrapper = std::make_unique<hippy::napi::FunctionWrapper>(InvokeMetricsModuleInfo, nullptr);
  auto value = context->CreateFunction(wrapper);
  scope->SaveFunctionWrapper(std::move(wrapper));
  context->SetProperty(object, key, value);

  return object;
}

}  // namespace module
}  // namespace driver
}  // namespace hippy
