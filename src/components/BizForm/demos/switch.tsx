import * as React from 'react';
import { CheckLg, XLg } from 'doly-icons';
import { BizFormItemSwitch } from 'mobile-more';
import DemoForm from './components/DemoForm';

function Demo() {
  return (
    <DemoForm>
      <BizFormItemSwitch name="switch1" label="开关" />
      <BizFormItemSwitch
        name="switch2"
        label="图标"
        checkedText={<CheckLg />}
        uncheckedText={<XLg />}
      />
      <BizFormItemSwitch name="switch3" label="文字" checkedText="开" uncheckedText="关" />
      <BizFormItemSwitch name="switch4" label="禁用" switchProps={{ disabled: true }} />
      <BizFormItemSwitch
        name="switch5"
        label="自定义样式"
        switchProps={{ style: { '--checked-color': '#00b578' } }}
      />
    </DemoForm>
  );
}

export default Demo;
