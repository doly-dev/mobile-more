import * as React from 'react';
import { BizFormItemPicker } from 'mobile-more';
import DemoForm from './components/DemoForm';
import basicColumns from './constants-columns';

function Demo() {
  return (
    <DemoForm
      initialValues={{
        picker2: ['Fri', 'pm'],
        picker3: ['Fri', 'pm']
      }}
    >
      <BizFormItemPicker name="picker1" label="选择" columns={basicColumns} />
      <BizFormItemPicker name="picker2" label="只读" columns={basicColumns} readOnly />
      <BizFormItemPicker name="picker3" label="禁用" columns={basicColumns} disabled />
      <BizFormItemPicker
        names={['week', 'time']}
        label="字段解构"
        columns={basicColumns}
        help="设置 names 将自动解构到对应字段名中"
      />
      <BizFormItemPicker name="picker4" label="分隔符" columns={basicColumns} separator=", " />
    </DemoForm>
  );
}

export default Demo;
