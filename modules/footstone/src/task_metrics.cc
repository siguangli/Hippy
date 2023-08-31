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

#include <utility>

#include "footstone/logging.h"

namespace footstone {
inline namespace runner {

void TaskMetrics::Info() {
  FOOTSTONE_LOG(ERROR) << "******************* Task Metrics Start *******************";
  uint32_t task_count = 0;
  for (const auto& kv : task_ids_by_name_) {
    task_count += kv.second.size();
  }
  FOOTSTONE_LOG(ERROR) << "Task count " << task_count;
  FOOTSTONE_LOG(ERROR) << "";

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
      FOOTSTONE_LOG(ERROR) << "Task Name " << name << " Task Count " << ids.size() << ", task is still runing ";
    } else {
      FOOTSTONE_LOG(ERROR) << "Task Name " << name << " Task Count " << ids.size() << ", Run task time " << run_time
                           << " microseconds " << run_time / 1000 << " milliseconds";
    }
  }
  FOOTSTONE_LOG(ERROR) << "******************* Task Metrics End *******************";
}

void TaskMetrics::DelayInfo() {
  FOOTSTONE_LOG(ERROR) << "******************* Task Metrics Delay Task Start *******************";

  for (const auto& [id, map] : task_create_start_end_by_id_) {
    auto create_iter = map.find("create");
    auto start_iter = map.find("start");
    auto end_iter = map.find("end");
    auto create_time = create_iter->second;
    auto start_time = start_iter->second;

    std::string task_name;
    bool is_break = false;
    for (const auto& [name, ids] : task_ids_by_name_) {
      for (const auto& task_id : ids) {
        if (task_id == id) {
          task_name = name;
          is_break = true;
          break;
        }
      }
      if (is_break) break;
    }

    if (end_iter != map.end()) {
      auto end_time = end_iter->second;
      FOOTSTONE_LOG(ERROR) << "Task id " << id << " Task Name " << task_name
                           << ", task dealy milliseconds(microseconds) " << (start_time - create_time) / 1000 << "("
                           << start_time - create_time << ")"
                           << ", task create time microseconds " << create_time << ", task start time microseconds "
                           << start_time << ", task end time microseconds " << end_time
                           << ", running time milliseconds(microseconds) " << (end_time - start_time) / 1000 << "("
                           << end_time - start_time << ")";
    } else {
      FOOTSTONE_LOG(ERROR) << "Task id " << id << " Task Name " << task_name
                           << ", task dealy milliseconds(microseconds) " << (start_time - create_time) / 1000 << "("
                           << start_time - create_time << ")"
                           << ", task create time microseconds " << create_time << ", task start time microseconds "
                           << start_time << ", task is still running";
    }
  }
  FOOTSTONE_LOG(ERROR) << "******************* Task Metrics End *******************";
}

void TaskMetrics::Clear() {
  task_ids_by_name_.clear();
  task_runtime_by_id_.clear();
  task_create_start_end_by_id_.clear();
}

void TaskMetrics::AddTask(const uint32_t id, const std::string& name, uint64_t create_time) {
  auto iter = task_ids_by_name_.find(name);
  if (iter == task_ids_by_name_.end()) {
    task_ids_by_name_.insert({name, {id}});
  } else {
    iter->second.push_back(id);
  }

  auto id_iter = task_create_start_end_by_id_.find(id);
  if (id_iter == task_create_start_end_by_id_.end()) {
    task_create_start_end_by_id_.insert({{id, {{"create", create_time}}}});
  }
  return;
}

void TaskMetrics::AddStartTime(const uint32_t id, const uint64_t start_time) {
  auto iter = task_create_start_end_by_id_.find(id);
  if (iter != task_create_start_end_by_id_.end()) {
    iter->second.insert({{"start", start_time}});
  }
  return;
}

void TaskMetrics::AddEndTime(const uint32_t id, const uint64_t end_time) {
  auto iter = task_create_start_end_by_id_.find(id);
  if (iter != task_create_start_end_by_id_.end()) {
    iter->second.insert({{"end", end_time}});
  }
  return;
}

void TaskMetrics::AddRuntime(const uint32_t id, const uint64_t runtime) {
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
