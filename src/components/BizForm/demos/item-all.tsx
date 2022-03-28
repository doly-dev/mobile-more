import * as React from 'react';
import {
  BizForm,
  BizFormItemCaptcha,
  BizFormItemCascadePicker,
  BizFormItemCheckList,
  BizFormItemDatePicker,
  BizFormItemImageUploader,
  BizFormItemInput,
  BizFormItemTextArea,
  ImageUploader
} from 'mobile-more';
import DemoForm from './components/DemoForm';
import { MerchantTypeOptions } from './constants';
import options from './constants-options';
import mockUpload from './services/mockUpload';

function Demo() {
  return (
    <DemoForm>
      <BizForm.Header>验证码</BizForm.Header>
      <BizFormItemCaptcha name="captcha" label="验证码" />
      <BizForm.Header>级联选择器</BizForm.Header>
      <BizFormItemCascadePicker name="location" label="所在城市" options={options} />
      <BizForm.Header>勾选列表</BizForm.Header>
      <BizFormItemCheckList
        label="商户类型"
        title="请选择商户类型"
        name="merchantType"
        options={MerchantTypeOptions}
      />
      <BizForm.Header>日期</BizForm.Header>
      <BizFormItemDatePicker name="date1" label="日期" />
      <BizFormItemDatePicker name="date2" label="自定义格式" format="YYYY.MM.DD" />
      <BizFormItemDatePicker name="date3" label="只读" readOnly />
      <BizFormItemDatePicker name="date4" label="禁用" precision="second" disabled />
      <BizForm.Header>图片上传</BizForm.Header>
      <BizFormItemImageUploader label="图片上传" name="images1" upload={mockUpload} />
      <BizFormItemImageUploader
        label="自定义"
        name="images2"
        upload={mockUpload}
        imageUploaderProps={{ style: { '--cell-size': '60px' } }}
      >
        <ImageUploader.UploadCustom border="dashed" style={{ background: '#fff' }} />
      </BizFormItemImageUploader>
      <BizForm.Header>输入框</BizForm.Header>
      <BizFormItemInput label="文本" name="text" />
      <BizFormItemInput label="禁止空字符" name="noWhiteSpace" disabledWhiteSpace />
      <BizFormItemInput label="手机号码" name="mobile" type="mobile" />
      <BizFormItemInput label="银行卡号" name="bankCard" type="bankCard" />
      <BizFormItemInput label="身份证号" name="idCard" type="idCard" />
      <BizFormItemInput label="数字" name="number" type="number" />
      <BizFormItemInput label="密码" name="password" type="password" clearable />
      <BizForm.Header>文本域</BizForm.Header>
      <BizFormItemTextArea label="详细地址" name="address" />
    </DemoForm>
  );
}

export default Demo;
