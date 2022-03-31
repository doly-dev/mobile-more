import * as React from 'react';
import { BizFormItemSelector } from 'mobile-more';
import DemoForm from './components/DemoForm';
import FruiltOptions from './constants-options2';

function Demo() {
  return (
    <DemoForm>
      <BizFormItemSelector name="selector1" label="单选" options={FruiltOptions} />
      <BizFormItemSelector
        name="selector2"
        label="支持取消"
        options={FruiltOptions}
        radioMode={false}
      />
      <BizFormItemSelector name="selector3" label="多选" options={FruiltOptions} multiple />
      <BizFormItemSelector
        name="selector4"
        label="禁用"
        options={FruiltOptions}
        selectorProps={{ disabled: true }}
      />
      <BizFormItemSelector
        name="selector5"
        label="自定义"
        options={FruiltOptions}
        showCheckMark={false}
        selectorProps={{
          style: {
            '--border-radius': '100px'
          }
        }}
      />
    </DemoForm>
  );
}

export default Demo;
