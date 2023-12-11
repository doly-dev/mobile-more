import * as React from 'react';
import { useAsync } from 'rc-hooks';
import { BizFormItemCascader } from 'mobile-more';
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
    <DemoForm
      initialValues={{
        cascade2: ['浙江', '宁波'],
        cascade3: ['浙江', '宁波']
      }}
    >
      <BizFormItemCascader name="cascade1" label="级联选择" options={options} />
      <BizFormItemCascader name="cascade2" label="只读" options={options} readOnly />
      <BizFormItemCascader name="cascade3" label="禁用" options={options} disabled />
      <BizFormItemCascader
        names={['province', 'city']}
        label="字段解构"
        options={options}
        help="设置 names 将自动解构到对应字段名中"
      />
      <BizFormItemCascader
        name="mcc"
        label="自定义"
        options={data}
        mapKeys={{ label: 'name', value: 'code' }}
        renderCurrentValue={(value, items) => (items[1]?.label as string) || ''}
        help="自定义渲染，只显示二级类目"
      />
    </DemoForm>
  );
}

export default Demo;
