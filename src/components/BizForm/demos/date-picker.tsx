import * as React from 'react';
import { BizForm, BizFormItemDatePicker } from 'mobile-more';
import DemoForm from './components/DemoForm';

function Demo() {
  return (
    <DemoForm
      initialValues={{
        date2: '2020-10-10',
        date3: new Date(),
        dateStr1: '2020-10-10',
        dateStr2: '2020.10.10',
        dateStr3: '2020-10-10 10:10:10'
      }}
    >
      <BizFormItemDatePicker name="date1" label="日期" />
      <BizFormItemDatePicker name="date2" label="自定义格式" format="YYYY.MM.DD" />
      <BizFormItemDatePicker name="date3" label="只读" readOnly />
      <BizFormItemDatePicker name="date4" label="禁用" precision="second" disabled />
      <BizForm.Header>string 默认值</BizForm.Header>
      <BizFormItemDatePicker name="dateStr1" label="日期1" />
      <BizFormItemDatePicker name="dateStr2" label="日期2" />
      <BizFormItemDatePicker name="dateStr3" label="日期3" precision="second" />
      <BizForm.Header>日期精度</BizForm.Header>
      <BizFormItemDatePicker name="year" label="年" precision="year" />
      <BizFormItemDatePicker name="month" label="月" precision="month" />
      <BizFormItemDatePicker name="day" label="日" precision="day" />
      <BizFormItemDatePicker name="hour" label="时" precision="hour" />
      <BizFormItemDatePicker name="minute" label="分" precision="minute" />
      <BizFormItemDatePicker name="second" label="秒" precision="second" />
      <BizFormItemDatePicker name="week" label="周" precision="week" />
      <BizFormItemDatePicker name="week-day" label="周-日" precision="week-day" />
    </DemoForm>
  );
}

export default Demo;
