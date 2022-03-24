import * as React from 'react';
import { safeDate } from 'util-helpers';
import ItemSpecialDatePicker from '../components/BizForm/demos/components/ItemSpecialDatePicker';
import DemoForm from '../components/BizForm/demos/components/DemoForm';

const Demo = () => {
  return (
    <DemoForm
      initialValues={{
        endDate3: '9999-12-31'
      }}
    >
      <ItemSpecialDatePicker
        label="证件终止日期1"
        name="endDate1"
        placeholder="请选择证件终止日期1"
        title="请选择证件终止日期1"
        required
        style={{ '--prefix-width': '7em' }}
      />
      <ItemSpecialDatePicker
        label="证件终止日期2"
        name="endDate2"
        placeholder="请选择证件终止日期2"
        title="请选择证件终止日期2"
        specialLabel="永久"
        specialValue={safeDate('2999-12-31')}
        required
        style={{ '--prefix-width': '7em' }}
      />
      <ItemSpecialDatePicker
        label="证件终止日期3"
        name="endDate3"
        placeholder="请选择证件终止日期3"
        title="请选择证件终止日期3"
        required
        style={{ '--prefix-width': '7em' }}
      />
    </DemoForm>
  );
};

export default Demo;
