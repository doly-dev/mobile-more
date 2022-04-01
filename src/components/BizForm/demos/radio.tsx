import * as React from 'react';
import { Square, CheckSquareFill } from 'doly-icons';
import { BizFormItemRadio } from 'mobile-more';
import DemoForm from './components/DemoForm';
import FruiltOptions from './constants-options2';

function Demo() {
  return (
    <DemoForm
      initialValues={{
        radio4: 'apple'
      }}
    >
      <BizFormItemRadio name="radio1" label="单选框" options={FruiltOptions} />
      <BizFormItemRadio name="radio2" label="块级展示" options={FruiltOptions} block />
      <BizFormItemRadio
        name="radio3"
        label="自定义图标"
        options={FruiltOptions}
        icon={(checked) =>
          checked ? (
            <CheckSquareFill style={{ color: 'var(--adm-color-primary)', fontSize: '18px' }} />
          ) : (
            <Square style={{ color: 'var(--adm-color-light)', fontSize: '18px' }} />
          )
        }
      />
      <BizFormItemRadio
        name="radio4"
        label="禁用"
        options={FruiltOptions}
        radioGroupProps={{ disabled: true }}
      />
    </DemoForm>
  );
}

export default Demo;
