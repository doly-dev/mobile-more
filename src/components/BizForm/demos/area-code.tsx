import * as React from 'react';
import { getPCA, getPC } from 'lcn';
import { BizFormItemAreaCode } from 'mobile-more';
import DemoForm from './components/DemoForm';

const pca = getPCA({ fieldNames: { code: 'value', name: 'label' }, inland: true });
const pc = getPC({ fieldNames: { code: 'value', name: 'label' }, inland: true });

function Demo() {
  return (
    <DemoForm
      initialValues={{
        areaCode3: '140524',
        areaCode4: '441900',
        areaCode5: '140524',
        areaCode6: '441900'
      }}
    >
      <BizFormItemAreaCode name="areaCode1" label="省市区" options={pca} title="请选择省市区" />
      <BizFormItemAreaCode name="areaCode2" label="省市" options={pc} />
      <BizFormItemAreaCode name="areaCode3" label="省市区" options={pca} />
      <BizFormItemAreaCode name="areaCode4" label="不设区的市" options={pca} />
      <BizFormItemAreaCode name="areaCode5" label="只读" options={pca} readOnly />
      <BizFormItemAreaCode name="areaCode6" label="禁用" options={pca} disabled />
      {/* <BizFormItemAreaCode
        name='areaCode7'
        label='自定义校验'
        options={pca}
        rules={[
          {
            validator(rule, value) {
              console.log(value);
              return Promise.resolve();
            }
          }
        ]}
      /> */}
    </DemoForm>
  );
}

export default Demo;
