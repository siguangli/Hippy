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

#include <atomic>
#include <cstdint>
#include <functional>

#include "footstone/task_metrics.h"

namespace footstone {
inline namespace runner {

class Task {
 public:
  Task();
  explicit Task(std::function<void()> unit, const std::string& name = "Unknow");
  ~Task() = default;

  inline uint32_t GetId() { return id_; }
  inline void SetExecUnit(std::function<void()> unit) { unit_ = unit; }
  inline void Run() {
    auto task_metrics = task_metrics_.lock();
    auto start_time = std::chrono::high_resolution_clock::now();
    if (task_metrics) {
      task_metrics->AddTask(id_, name_, create_time_);
      auto time_span = std::chrono::duration_cast<std::chrono::microseconds>(start_time.time_since_epoch());
      task_metrics->AddStartTime(id_, static_cast<uint64_t>(time_span.count()));
    }
    if (unit_) {
      unit_();
    }
    if (task_metrics) {
      auto end_time = std::chrono::high_resolution_clock::now();
      auto time_span = std::chrono::duration_cast<std::chrono::microseconds>(end_time - start_time);
      task_metrics->AddRuntime(id_, static_cast<uint64_t>(time_span.count()));
      task_metrics->AddEndTime(id_, static_cast<uint64_t>(std::chrono::duration_cast<std::chrono::microseconds>(end_time.time_since_epoch()).count()));
    }
  }

  inline void SetMetrics(std::weak_ptr<TaskMetrics> task_metrics) { task_metrics_ = task_metrics; }

 private:
  static std::atomic<uint32_t> g_next_task_id;

  std::atomic<uint32_t> id_{};
  std::function<void()> unit_;               // A unit of work to be processed
  std::string name_;                         // The name of the task
  uint64_t create_time_;                     // Create time of task
  std::weak_ptr<TaskMetrics> task_metrics_;  // Weak reference pointer to task metrics for measuring task run time
};

}  // namespace runner
}  // namespace footstone
