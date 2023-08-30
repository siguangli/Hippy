/*
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2022 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "footstone/task_metrics.h"

#include "footstone/logging.h"

namespace footstone {
inline namespace runner {

void TaskMetrics::Info() {
  FOOTSTONE_DLOG(INFO) << "******************* Task Metrics Start *******************";
  uint32_t task_count = 0;
  for (const auto& kv : task_ids_by_name_) {
    task_count += kv.second.size();
  }
  FOOTSTONE_DLOG(INFO) << "Task count " << task_count;
  FOOTSTONE_DLOG(INFO) << "";

  for (const auto& kv : task_ids_by_name_) {
    auto name = kv.first;
    auto ids = kv.second;
    uint64_t run_time;
    bool is_running = true;
    for (auto iter = ids.begin(); iter != ids.end(); ++iter) {
      auto runtime_iter = task_runtime_by_id_.find(*iter);
      if (runtime_iter != task_runtime_by_id_.end()) {
        run_time = runtime_iter->second;
        is_running = false;
      }
    }
    if (is_running) {
      FOOTSTONE_DLOG(INFO) << "Task Name " << name << ", task is still runing ";
    } else {
      FOOTSTONE_DLOG(INFO) << "Task Name " << name << ", Run task time " << run_time << " microseconds "
                           << run_time / 1000 << " milliseconds";
    }
  }
  FOOTSTONE_DLOG(INFO) << "******************* Task Metrics End *******************";
}

void TaskMetrics::AddTask(const uint32_t id, const std::string& name) {
  auto iter = task_ids_by_name_.find(name);
  if (iter == task_ids_by_name_.end()) {
    task_ids_by_name_.insert({name, {id}});
  } else {
    iter->second.push_back(id);
  }
  return;
}

void TaskMetrics::AddRuntime(const uint32_t id, uint64_t runtime) {
  auto iter = task_runtime_by_id_.find(id);
  if (iter == task_runtime_by_id_.end()) {
    task_runtime_by_id_.insert({id, runtime});
  } else {
    iter->second = iter->second + runtime;
  }
  return;
}

}  // namespace runner
}  // namespace footstone
