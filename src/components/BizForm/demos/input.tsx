import * as React from 'react';
import { BizForm, BizFormItemInput, Upload } from 'mobile-more';
import DemoForm from './components/DemoForm';
import IconScanCard from './images/icon-scan-card@3x.png';

function Demo() {
  const [form] = BizForm.useForm();
  const handleChange = (files: FileList | null) => {
    console.log(files);
    form.setFieldsValue({
      input5: '6222021001136398267'
    });
  };

  return (
    <DemoForm form={form}>
      <BizFormItemInput label="文本" name="input1" />
      <BizFormItemInput label="去除头尾空格" name="input2" disabledWhiteSpace />
      <BizForm.Header>自定义类型</BizForm.Header>
      <BizFormItemInput label="手机号码" name="input3" type="mobile" />
      <BizFormItemInput label="银行卡号" name="input4" type="bankCard" />
      <BizFormItemInput
        label="银行卡号2"
        name="input5"
        type="bankCard"
        inputProps={{
          suffix: (
            <Upload onChange={handleChange}>
              <img src={IconScanCard} alt="" width="24" height="24" />
            </Upload>
          )
        }}
      />
      <BizFormItemInput label="身份证号" name="input6" type="idCard" />
      <BizFormItemInput label="数字" name="input10" type="number" />
      <BizFormItemInput label="密码" name="input11" type="password" clearable />
      <BizForm.Header>格式化</BizForm.Header>
      <BizFormItemInput label="手机号码" name="input7" type="mobile" format />
      <BizFormItemInput label="银行卡号" name="input8" type="bankCard" format />
      <BizFormItemInput label="身份证号" name="input9" type="idCard" format />
    </DemoForm>
  );
}

export default Demo;
