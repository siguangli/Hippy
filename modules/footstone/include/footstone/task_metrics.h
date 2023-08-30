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

#pragma once

#include "footstone/time_delta.h"

#include <chrono>
#include <string>
#include <unordered_map>
#include <vector>

namespace footstone {
inline namespace runner {

class TaskMetrics {
 public:
  TaskMetrics() = default;

  void Info();
  void DelayInfo();
  void AddTask(const uint32_t id, const std::string& name, const uint64_t create_time);
  void AddStartTime(const uint32_t id, const uint64_t start_time);
  void AddEndTime(const uint32_t id, const uint64_t end_time);
  void AddRuntime(const uint32_t id, const uint64_t runtime);

 private:
  std::unordered_map<std::string, std::vector<uint32_t>> task_ids_by_name_;  // 某类 task 对应的 task ids
  std::unordered_map<uint32_t, uint64_t> task_runtime_by_id_;  // 每个 task 消耗的时间， task id 唯一标识某个 task
  std::unordered_map<uint32_t, std::unordered_map<std::string, uint64_t>>
      task_create_start_end_by_id_;  // 每个 task 的创建时间、执行开始时间， task id 唯一标识某个 task
  std::chrono::time_point<std::chrono::system_clock> start_time_;  // 统计开始时间
};

}  // namespace runner
}  // namespace footstone
