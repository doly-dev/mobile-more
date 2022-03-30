import * as React from 'react';
import { BizFormItemStepper } from 'mobile-more';
import DemoForm from './components/DemoForm';

function Demo() {
  return (
    <DemoForm>
      <BizFormItemStepper name="stepper1" label="步进器" />
      <BizFormItemStepper name="stepper2" label="步长" step={10} />
      <BizFormItemStepper name="stepper3" label="最大/最小" min={-5} max={5} />
      <BizFormItemStepper name="stepper4" label="格式化整数" digits={0} />
      <BizFormItemStepper name="stepper5" label="一位小数" digits={1} />
      <BizFormItemStepper name="stepper6" label="只读" stepperProps={{ inputReadOnly: true }} />
      <BizFormItemStepper name="stepper7" label="禁用" stepperProps={{ disabled: true }} />
      <BizFormItemStepper
        name="stepper8"
        label="自定义"
        stepperProps={{ style: { width: '200px', '--height': '36px' } }}
      />
    </DemoForm>
  );
}

export default Demo;
