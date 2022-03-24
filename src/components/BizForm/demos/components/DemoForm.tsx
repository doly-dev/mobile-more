import * as React from 'react';
import { Button } from 'antd-mobile';
import { BizForm, BizFormProps } from 'mobile-more';

const DemoForm: React.FC<BizFormProps> = (props) => {
  const uniqueFormName = React.useMemo(() => `form-${Math.random()}`, []);

  return (
    <BizForm
      name={uniqueFormName}
      layout="horizontal"
      onFinish={(values) => {
        console.log(values);
      }}
      footer={
        <Button type="submit" color="primary" block>
          提交
        </Button>
      }
      {...props}
    />
  );
};

export default DemoForm;
