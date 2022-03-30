import * as React from 'react';
import { Square, CheckSquareFill } from 'doly-icons';
import { BizFormItemCheckbox } from 'mobile-more';
import DemoForm from './components/DemoForm';
import FruiltOptions from './constants-options2';

function Demo() {
  return (
    <DemoForm
      initialValues={{
        checkbox4: ['apple']
      }}
    >
      <BizFormItemCheckbox name="checkbox1" label="复选框" options={FruiltOptions} />
      <BizFormItemCheckbox name="checkbox2" label="块级展示" options={FruiltOptions} block />
      <BizFormItemCheckbox
        name="checkbox3"
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
      <BizFormItemCheckbox
        name="checkbox4"
        label="禁用"
        options={FruiltOptions}
        checkboxGroupProps={{ disabled: true }}
      />
    </DemoForm>
  );
}

export default Demo;
