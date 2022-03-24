import * as React from 'react';
import { BizForm } from 'mobile-more';
import { parseAreaCode } from 'lcn';
import ItemAreaCode from '../components/BizForm/demos/components/ItemAreaCode';
import DemoForm from '../components/BizForm/demos/components/DemoForm';

const DefaultAreaCode = '150221';

const Demo = () => {
  const [form] = BizForm.useForm();

  React.useEffect(() => {
    const [province, city, area] = parseAreaCode(DefaultAreaCode);
    form.setFieldsValue({
      areaCode3: [province?.code, city?.code, area?.code]
    });
  }, [form]);

  return (
    <DemoForm form={form}>
      <ItemAreaCode
        label="地区码1"
        name="areaCode1"
        placeholder="请选择地区码1"
        title="请选择地区码1"
        required
      />
      <ItemAreaCode
        label="地区码2"
        name="areaCode2"
        placeholder="请选择地区码2"
        title="请选择地区码2"
        required
        showArea={false}
      />
      <ItemAreaCode
        label="地区码3"
        name="areaCode3"
        placeholder="请选择地区码3"
        title="请选择地区码3"
        required
      />
    </DemoForm>
  );
};

export default Demo;
