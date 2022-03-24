import * as React from 'react';
import ItemBranchBank from '../components/BizForm/demos/components/ItemBranchBank';
import DemoForm from '../components/BizForm/demos/components/DemoForm';

const Demo = () => {
  return (
    <DemoForm
      initialValues={{
        bankBranch2: '测试名称'
      }}
    >
      <ItemBranchBank
        label="开户支行名称1"
        name="bankBranch"
        placeholder="请选择开户支行名称2"
        title="请选择开户支行名称2"
        areaCode="150221"
        required
        style={{ '--prefix-width': '7em' }}
      />
      <ItemBranchBank
        label="开户支行名称2"
        name="bankBranch2"
        placeholder="请选择开户支行名称2"
        title="请选择开户支行名称2"
        areaCode="150221"
        required
        style={{ '--prefix-width': '7em' }}
      />
    </DemoForm>
  );
};

export default Demo;
