import * as React from 'react';
import { BizFormItemDatePicker, BizFormItemCheckList } from 'mobile-more';
import DemoForm from '../components/BizForm/demos/components/DemoForm';

// 身份证有效期
// 五年、十年、二十年、长期
enum IdCardExpireDate {
  Five = '5',
  Ten = '10',
  Twenty = '20',
  Forever = 'Infinity'
}
const IdCardExpireDateOptions = [
  {
    label: '五年',
    value: IdCardExpireDate.Five
  },
  {
    label: '十年',
    value: IdCardExpireDate.Ten
  },
  {
    label: '二十年',
    value: IdCardExpireDate.Twenty
  },
  {
    label: '长期',
    value: IdCardExpireDate.Forever
  }
];

const Demo = () => {
  return (
    <DemoForm>
      <BizFormItemDatePicker
        label="身份证有效期起始日期"
        name="beginDate"
        title="身份证有效期起始日期"
        required
      />
      <BizFormItemCheckList
        label="身份证有效期结束日期"
        name="expireDate"
        title="身份证有效期结束日期"
        options={IdCardExpireDateOptions}
        required
      />
    </DemoForm>
  );
};

export default Demo;
