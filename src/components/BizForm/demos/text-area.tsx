import * as React from 'react';
import { BizFormItemTextArea } from 'mobile-more';
import DemoForm from './components/DemoForm';

function Demo() {
  return (
    <DemoForm>
      <BizFormItemTextArea label="详细地址" name="address" />
    </DemoForm>
  );
}

export default Demo;
