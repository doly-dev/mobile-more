import React, { useState } from 'react';
import { sleep } from 'ut2';
import { Radio, Space, Toast } from 'antd-mobile';
import {
  BizConfigProvider,
  BizForm,
  BizFormItemAreaCode,
  BizFormItemCaptcha,
  BizFormItemCascadePicker,
  BizFormItemCascader,
  BizFormItemCheckList,
  BizFormItemCheckbox,
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
  BizFormItemTextArea
} from 'mobile-more';
import { getPCA } from 'lcn';
import zhCN from '../../../locale/zh_CN';
import enUS from '../../../locale/en_US';
import DemoForm from '../../BizForm/demos/components/DemoForm';
import options from '../../BizForm/demos/constants-options';
import { MerchantTypeOptions } from '../../BizForm/demos/constants';
import basicColumns from '../../BizForm/demos/constants-columns';
import FruiltOptions from '../../BizForm/demos/constants-options2';
import mockUpload from '../../BizForm/demos/services/mockUpload';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function sendCaptcha(mobile: string) {
  await sleep(2000);
  return;
}
const pca = getPCA({ fieldNames: { code: 'value', name: 'label' }, inland: true });

function FormDemo() {
  const [form] = BizForm.useForm();
  const handleGetCaptcha = async () => {
    try {
      // 验证手机号码
      await form.validateFields(['mobile']);
    } catch (err: any) {
      Toast.show({ content: err.errorFields[0].errors[0] });
      return false;
    }

    //  发送验证码
    return sendCaptcha(form.getFieldValue(['mobile']));
  };

  return (
    <div>
      <DemoForm>
        <BizFormItemAreaCode name="areaCode" label="省市区" options={pca} required />
        <BizFormItemCaptcha
          name="captcha"
          label="验证码"
          onGetCaptcha={handleGetCaptcha}
          required
        />
        <BizFormItemCascadePicker
          name="cascadePicker"
          label="级联选择器"
          options={options}
          required
        />
        <BizFormItemCascader name="cascade" label="级联选择" options={options} required />
        <BizFormItemCheckList
          label="勾选列表"
          title="请选择商户类型"
          name="checkList"
          options={MerchantTypeOptions}
          required
        />
        <BizFormItemCheckbox name="checkbox" label="复选框" options={FruiltOptions} required />
        <BizFormItemDatePicker name="date" label="日期" required />
        <BizFormItemDatePicker name="date-year" label="年" precision="year" required />
        <BizFormItemDatePicker name="date-month" label="月" precision="month" required />
        <BizFormItemDatePicker name="date-day" label="日" precision="day" required />
        <BizFormItemDatePicker name="date-hour" label="时" precision="hour" required />
        <BizFormItemDatePicker name="date-minute" label="分" precision="minute" required />
        <BizFormItemDatePicker name="date-second" label="秒" precision="second" required />
        <BizFormItemDatePicker name="date-week" label="周" precision="week" required />
        <BizFormItemDatePicker name="date-week-day" label="周-日" precision="week-day" required />
        <BizFormItemImageUploader label="图片上传" name="image1" upload={mockUpload} required />
        <BizFormItemInput label="文本" name="input" required />
        <BizFormItemPicker name="picker" label="选择器" columns={basicColumns} required />
        <BizFormItemRadio name="radio" label="单选框" options={FruiltOptions} required />
        <BizFormItemRate name="rate" label="评分" required />
        <BizFormItemSelector name="selector" label="选择组" options={FruiltOptions} required />
        <BizFormItemSlider name="slider" label="滑块" required />
        <BizFormItemStepper name="stepper" label="步进器" required />
        <BizFormItemSwitch name="switch" label="开关" required />
        <BizFormItemTextArea label="文本域" name="textarea" required />
      </DemoForm>
    </div>
  );
}

enum LocaleValue {
  zhCN,
  enUS
}
const LocaleOptions = [
  {
    label: '中文',
    value: LocaleValue.zhCN
  },
  {
    label: '英文',
    value: LocaleValue.enUS
  }
];

function Demo() {
  const [locale, setLocale] = useState<LocaleValue>(LocaleValue.zhCN);

  return (
    <>
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 16 }}>Change locale of components:</span>
          <Radio.Group value={locale} onChange={(val) => setLocale(val as LocaleValue)}>
            <Space>
              {LocaleOptions.map((item) => (
                <Radio key={item.value} value={item.value}>
                  {item.label}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
      </div>
      <BizConfigProvider locale={locale === LocaleValue.zhCN ? zhCN : enUS}>
        <FormDemo />
      </BizConfigProvider>
    </>
  );
}

export default Demo;
