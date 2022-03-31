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
        checkList4: ['3', '5'],
        checkList5: '2',
        checkList6: '3'
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
        label="支持取消"
        title="请选择商户类型"
        name="checkList3"
        options={MerchantTypeOptions}
        radioMode={false}
      />
      <BizFormItemCheckList
        label="多选"
        title="请选择商户类型"
        name="checkList4"
        options={MerchantTypeOptions}
        multiple
        // separator=' - '
      />
      <BizFormItemCheckList
        label="只读"
        name="checkList5"
        options={MerchantTypeOptions}
        readOnly
        help="可以使用 readOnly 来处理点击异步请求或校验"
      />
      <BizFormItemCheckList label="禁用" name="checkList6" options={MerchantTypeOptions} disabled />
      <BizFormItemCheckList
        label="自定义"
        title="请选择商户类型"
        name="checkList7"
        options={MerchantTypeOptions}
        checkListPopupProps={{
          style: { '--adm-color-primary': '#f54d4f' } as React.CSSProperties
        }}
      />
    </DemoForm>
  );
}

export default Demo;
