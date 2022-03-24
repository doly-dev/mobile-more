import * as React from 'react';
import { BizForm, BizFormItemInput } from 'mobile-more';
import DemoForm from './components/DemoForm';

function Demo() {
  return (
    <DemoForm name="abc">
      <BizFormItemInput label="文本" name="text" />
      <BizFormItemInput label="禁止空字符" name="noWhiteSpace" disabledWhiteSpace />
      <BizForm.Header>自定义类型</BizForm.Header>
      <BizFormItemInput label="手机号码" name="mobile" type="mobile" />
      <BizFormItemInput label="银行卡号" name="bankCard" type="bankCard" />
      <BizFormItemInput label="身份证号" name="idCard" type="idCard" />
      <BizFormItemInput label="数字" name="number" type="number" />
      <BizFormItemInput label="密码" name="password" type="password" clearable />
    </DemoForm>
  );
}

export default Demo;
