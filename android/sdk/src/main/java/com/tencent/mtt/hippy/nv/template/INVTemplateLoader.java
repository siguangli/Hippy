package com.tencent.mtt.hippy.nv.template;

/**
 * Created by kamlin on 2020/9/17.
 */
public interface INVTemplateLoader {

  String getTemplate(String templateId);

  boolean parseTemplates(String templates);

}
