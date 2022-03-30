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
        checkList2: '5',
        checkList3: ['3', '5'],
        checkList4: '2',
        checkList5: '3'
      }}
    >
      <BizFormItemCheckList
        label="勾选列表"
        title="请选择商户类型"
        name="checkList1"
        options={MerchantTypeOptions}
      />
      <BizFormItemCheckList
        label="异步"
        title="请选择商户类型"
        name="checkList2"
        options={data}
        loading={loading}
      />
      <BizFormItemCheckList
        label="多选"
        title="请选择商户类型"
        name="checkList3"
        options={MerchantTypeOptions}
        multiple
        // separator=' - '
      />
      <BizFormItemCheckList
        label="只读"
        name="checkList4"
        options={MerchantTypeOptions}
        readOnly
        help="可以使用 readOnly 来处理点击异步请求或校验"
      />
      <BizFormItemCheckList label="禁用" name="checkList5" options={MerchantTypeOptions} disabled />
    </DemoForm>
  );
}

export default Demo;
