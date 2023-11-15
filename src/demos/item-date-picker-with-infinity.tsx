import * as React from 'react';
import { safeDate } from 'util-helpers';
import ItemDatePickerWithInfinity from '../components/BizForm/demos/components/ItemDatePickerWithInfinity';
import DemoForm from '../components/BizForm/demos/components/DemoForm';

const Demo = () => {
  return (
    <DemoForm
      initialValues={{
        endDate3: '9999-12-31',
        endDate4: '2012-12-12',
        endDate5: '2012-12-12'
      }}
    >
      <ItemDatePickerWithInfinity
        label="证件终止日期"
        name="endDate1"
        placeholder="请选择证件终止日期"
        title="请选择证件终止日期"
        required
      />
      <ItemDatePickerWithInfinity
        label="自定义"
        name="endDate2"
        infinityLabel="永久"
        infinityValue={safeDate('2999-12-31')}
        required
      />
      <ItemDatePickerWithInfinity
        label="初始值"
        name="endDate3"
        required
        style={{ '--prefix-width': '7em' }}
      />
      <ItemDatePickerWithInfinity label="禁用" name="endDate4" disabled />
      <ItemDatePickerWithInfinity label="只读" name="endDate5" readOnly />
    </DemoForm>
  );
};

export default Demo;
