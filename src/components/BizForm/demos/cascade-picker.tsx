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
      <BizFormItemCascadePicker name="address" label="所在城市" options={options} />
      <BizForm.Header>特殊自定义</BizForm.Header>
      <BizFormItemCascadePicker
        name="mcc"
        label="经营范围"
        options={data}
        fieldNames={{ label: 'name', value: 'code' }}
        renderCurrentValue={(_, valueFlatOptions) => valueFlatOptions.reverse()[0]?.name}
      />
      <ItemAreaCode name="areaCode" label="地区码" />
    </DemoForm>
  );
}

export default Demo;
