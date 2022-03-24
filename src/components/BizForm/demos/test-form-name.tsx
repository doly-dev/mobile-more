import * as React from 'react';
import { Form, Input, TextArea } from 'antd-mobile';

function Demo() {
  return (
    <div>
      <Form name="form-1">
        <Form.Item name="address" label="地址">
          <Input placeholder="请输入" />
        </Form.Item>
      </Form>
      <Form name="form-2">
        <Form.Item name="address" label="地址">
          <TextArea placeholder="请输入" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Demo;
