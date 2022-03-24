import * as React from 'react';
import { Button } from 'antd-mobile';
import { BizForm, BizFormItemInput } from 'mobile-more';

const itemStyle = {
  '--padding-left': '0'
};

function Demo() {
  return (
    <BizForm
      name="form-login1"
      layout="horizontal"
      requiredMarkStyle="text-optional"
      onFinish={(values) => {
        console.log(values);
      }}
      footer={
        <Button block color="primary" type="submit">
          登录
        </Button>
      }
      style={{
        '--border-top': '0 none'
      }}
    >
      <BizFormItemInput
        label="用户名"
        name="username"
        disabledWhiteSpace
        required
        style={itemStyle}
      />
      <BizFormItemInput label="密码" name="password" type="password" required style={itemStyle} />
    </BizForm>
  );
}

export default Demo;
