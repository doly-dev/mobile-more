import * as React from 'react';
import { BizFormItemPicker } from 'mobile-more';
import DemoForm from './components/DemoForm';

const basicColumns = [
  [
    { label: '周一', value: 'Mon' },
    { label: '周二', value: 'Tues' },
    { label: '周三', value: 'Wed' },
    { label: '周四', value: 'Thur' },
    { label: '周五', value: 'Fri' }
  ],
  [
    { label: '上午', value: 'am' },
    { label: '下午', value: 'pm' }
  ]
];

function Demo() {
  return (
    <DemoForm>
      <BizFormItemPicker name="picker1" label="选择" columns={basicColumns} />
      <BizFormItemPicker name="picker2" label="只读" columns={basicColumns} readOnly />
      <BizFormItemPicker name="picker3" label="禁用" columns={basicColumns} disabled />
      <BizFormItemPicker name="picker4" label="分隔符" columns={basicColumns} separator=", " />
    </DemoForm>
  );
}

export default Demo;
