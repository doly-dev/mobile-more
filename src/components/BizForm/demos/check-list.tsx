import * as React from 'react';
import { useAsync } from 'rc-hooks';
import { BizFormItemCheckList } from 'mobile-more';
import DemoForm from './components/DemoForm';
import getMerchantType from './services/getMerchantType';
import { MerchantTypeOptions } from './constants';

function Demo() {
  const { loading, data = [] } = useAsync(() => getMerchantType().then((res) => res.data));

  return (
    <DemoForm
      initialValues={{
        merchantType2: '5',
        merchantType3: '2',
        merchantType4: '3'
      }}
    >
      <BizFormItemCheckList
        label="商户类型"
        title="请选择商户类型"
        name="merchantType1"
        options={MerchantTypeOptions}
      />
      <BizFormItemCheckList
        label="异步"
        title="请选择商户类型"
        name="merchantType2"
        options={data}
        loading={loading}
      />
      <BizFormItemCheckList
        label="只读"
        name="merchantType3"
        options={MerchantTypeOptions}
        readOnly
        help="可以使用 readOnly 来处理点击异步请求或校验"
      />
      <BizFormItemCheckList
        label="禁用"
        name="merchantType4"
        options={MerchantTypeOptions}
        disabled
      />
    </DemoForm>
  );
}

export default Demo;
