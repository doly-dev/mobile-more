import * as React from 'react';
import {
  BizForm,
  BizFormItemAreaCode,
  BizFormItemCaptcha,
  BizFormItemCascadePicker,
  BizFormItemCascader,
  BizFormItemCheckbox,
  BizFormItemCheckList,
  BizFormItemDatePicker,
  BizFormItemImageUploader,
  BizFormItemInput,
  BizFormItemPicker,
  BizFormItemRadio,
  BizFormItemRate,
  BizFormItemSelector,
  BizFormItemSlider,
  BizFormItemStepper,
  BizFormItemSwitch,
  BizFormItemTextArea,
  ImageUploader
} from 'mobile-more';
import DemoForm from './components/DemoForm';
import { MerchantTypeOptions } from './constants';
import options from './constants-options';
import mockUpload from './services/mockUpload';
import basicColumns from './constants-columns';
import FruiltOptions from './constants-options2';

function Demo() {
  return (
    <DemoForm>
      <BizForm.Header>地区码</BizForm.Header>
      <BizFormItemAreaCode name="areaCode" label="地区码" options={options} />
      <BizForm.Header>验证码</BizForm.Header>
      <BizFormItemCaptcha name="captcha" label="验证码" />
      <BizForm.Header>级联选择器</BizForm.Header>
      <BizFormItemCascadePicker name="cascadePicker" label="所在城市" options={options} />
      <BizForm.Header>级联选择</BizForm.Header>
      <BizFormItemCascader name="cascader" label="所在城市" options={options} />
      <BizForm.Header>复选框</BizForm.Header>
      <BizFormItemCheckbox name="checkbox" label="复选框" options={FruiltOptions} />
      <BizForm.Header>勾选列表</BizForm.Header>
      <BizFormItemCheckList
        label="勾选列表"
        title="请选择商户类型"
        name="checkList"
        options={MerchantTypeOptions}
      />
      <BizForm.Header>日期</BizForm.Header>
      <BizFormItemDatePicker name="date1" label="日期" />
      <BizFormItemDatePicker name="date2" label="自定义格式" format="YYYY.MM.DD" />
      <BizFormItemDatePicker name="date3" label="只读" readOnly />
      <BizFormItemDatePicker name="date4" label="禁用" precision="second" disabled />
      <BizForm.Header>图片上传</BizForm.Header>
      <BizFormItemImageUploader label="图片上传" name="image1" upload={mockUpload} />
      <BizFormItemImageUploader
        label="自定义"
        name="image2"
        upload={mockUpload}
        imageUploaderProps={{ style: { '--cell-size': '60px' } }}
      >
        <ImageUploader.UploadCustom border="dashed" style={{ background: '#fff' }} />
      </BizFormItemImageUploader>
      <BizForm.Header>输入框</BizForm.Header>
      <BizFormItemInput label="文本" name="input1" />
      <BizFormItemInput label="禁止空字符" name="input2" disabledWhiteSpace />
      <BizFormItemInput label="手机号码" name="input3" type="mobile" />
      <BizFormItemInput label="银行卡号" name="input4" type="bankCard" />
      <BizFormItemInput label="身份证号" name="input5" type="idCard" />
      <BizFormItemInput label="数字" name="input6" type="number" />
      <BizFormItemInput label="密码" name="input7" type="password" clearable />
      <BizForm.Header>选择器</BizForm.Header>
      <BizFormItemPicker name="picker" label="选择" columns={basicColumns} />
      <BizForm.Header>单选框</BizForm.Header>
      <BizFormItemRadio name="radio" label="单选框" options={FruiltOptions} />
      <BizForm.Header>评分</BizForm.Header>
      <BizFormItemRate name="rate" label="评分" />
      <BizForm.Header>选项组</BizForm.Header>
      <BizFormItemSelector name="selector" label="选项组" options={FruiltOptions} />
      <BizForm.Header>滑块输入条</BizForm.Header>
      <BizFormItemSlider name="slider" label="滑块" />
      <BizForm.Header>步进器</BizForm.Header>
      <BizFormItemStepper name="stepper" label="步进器" />
      <BizForm.Header>开关</BizForm.Header>
      <BizFormItemSwitch name="switch" label="开关" />
      <BizForm.Header>文本域</BizForm.Header>
      <BizFormItemTextArea label="详细地址" name="textArea" />
    </DemoForm>
  );
}

export default Demo;
