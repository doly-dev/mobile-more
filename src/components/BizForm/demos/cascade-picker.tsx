import * as React from 'react';
import { useAsync } from 'rc-hooks';
import { BizForm, BizFormItemCascadePicker } from 'mobile-more';
import DemoForm from './components/DemoForm';
import ItemAreaCode from './components/ItemAreaCode';
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
      <BizFormItemCascadePicker name="cascadePicker1" label="级联选择" options={options} />
      <BizFormItemCascadePicker name="cascadePicker2" label="只读" options={options} readOnly />
      <BizFormItemCascadePicker name="cascadePicker3" label="禁用" options={options} disabled />
      <BizForm.Header>特殊自定义</BizForm.Header>
      <BizFormItemCascadePicker
        name="mcc"
        label="经营范围"
        options={data}
        mapKeys={{ label: 'name', value: 'code' }}
        renderCurrentValue={(value, items) => (items[1]?.label as string) || ''}
        help="自定义渲染，只显示二级类目"
      />
      <ItemAreaCode name="areaCode" label="地区码" />
    </DemoForm>
  );
}

export default Demo;
