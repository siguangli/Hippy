package com.tencent.mtt.hippy.devsupport.inspector.domain;

import com.tencent.mtt.hippy.HippyEngineContext;
import com.tencent.mtt.hippy.devsupport.inspector.Inspector;
import com.tencent.mtt.hippy.devsupport.inspector.model.InspectEvent;
import org.json.JSONObject;

import java.lang.ref.WeakReference;

public abstract class InspectorDomain {

  private WeakReference<Inspector> mInspectorRef;

  public InspectorDomain(Inspector inspector) {
    mInspectorRef = new WeakReference<>(inspector);
  }

  /**
   * 处理 frontend 的 method 调用
   * @param method 调用方法
   * @param id 调用唯一自增ID
   * @param paramsObj 参数
   */
  public abstract void handleRequest(HippyEngineContext context, String method, int id, JSONObject paramsObj);

  /**
   * 获取 domain
   * @return domain 名称
   */
  public abstract String getDomainName();

  /**
   * 回包给 frontend
   * @param id 调用过来的自增id
   * @param result 回包数据 json
   */
  protected void sendRspToFrontend(int id, String result) {
    Inspector inspector = mInspectorRef.get();
    if (inspector != null) {
      inspector.rspToFrontend(id, result);
    }
  }

  /**
   * 主动抛事件给 frontend
   * @param event 事件数据
   */
  protected void sendEventToFrontend(InspectEvent event) {
    Inspector inspector = mInspectorRef.get();
    if (inspector != null) {
      inspector.sendEventToFrontend(event);
    }
  }

}
