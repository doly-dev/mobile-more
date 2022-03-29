import * as React from 'react';
import { useAsync } from 'rc-hooks';
import { BizForm, BizFormItemCascader } from 'mobile-more';
import DemoForm from './components/DemoForm';
import getMcc from './services/getMcc';
import options from './constants-options';

function Demo() {
  const { data = [] } = useAsync(() => getMcc().then((res) => res.data), {
    persisted: true,
    cacheKey: 'mcc',
    cacheTime: 60 * 60 * 1000
  });

  return (
    <DemoForm>
      <BizFormItemCascader name="cascadePicker1" label="级联选择" options={options} />
      <BizFormItemCascader name="cascadePicker2" label="只读" options={options} readOnly />
      <BizFormItemCascader name="cascadePicker3" label="禁用" options={options} disabled />
      <BizForm.Header>特殊自定义</BizForm.Header>
      <BizFormItemCascader
        name="mcc"
        label="经营范围"
        options={data}
        mapKeys={{ label: 'name', value: 'code' }}
        renderCurrentValue={(value, items) => (items[1]?.label as string) || ''}
        help="自定义渲染，只显示二级类目"
      />
    </DemoForm>
  );
}

export default Demo;
