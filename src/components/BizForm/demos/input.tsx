import * as React from 'react';
import { BizForm, BizFormItemInput, Upload } from 'mobile-more';
import DemoForm from './components/DemoForm';
import IconScanCard from './images/icon-scan-card@3x.png';

function Demo() {
  const [form] = BizForm.useForm();
  const handleChange = (files: FileList | null) => {
    console.log(files);
    form.setFieldsValue({
      bankCard2: '6222021001136398267'
    });
  };

  return (
    <DemoForm>
      <BizFormItemInput label="文本" name="text" />
      <BizFormItemInput label="禁止空字符" name="noWhiteSpace" disabledWhiteSpace />
      <BizForm.Header>自定义类型</BizForm.Header>
      <BizFormItemInput label="手机号码" name="mobile" type="mobile" />
      <BizFormItemInput label="银行卡号" name="bankCard" type="bankCard" />
      <BizFormItemInput
        label="银行卡号2"
        name="bankCard2"
        type="bankCard2"
        inputProps={{
          suffix: (
            <Upload onChange={handleChange}>
              <img src={IconScanCard} alt="" width="24" height="24" />
            </Upload>
          )
        }}
      />
      <BizFormItemInput label="身份证号" name="idCard" type="idCard" />
      <BizFormItemInput label="数字" name="number" type="number" />
      <BizFormItemInput label="密码" name="password" type="password" clearable />
    </DemoForm>
  );
}

export default Demo;
