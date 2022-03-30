import * as React from 'react';
import { PlusCircle } from 'doly-icons';
import { BizForm, BizFormItemInput } from 'mobile-more';
import DemoForm from './components/DemoForm';

function Demo() {
  return (
    <DemoForm
      mode="card"
      initialValues={{
        contacts: [{}]
      }}
    >
      <BizForm.Array
        name="contacts"
        renderAdd={() => (
          <span>
            <PlusCircle /> 添加
          </span>
        )}
        renderHeader={({ index }, { remove }) => (
          <>
            <span>联系人{index + 1}</span>
            <a onClick={() => remove(index)} style={{ float: 'right' }}>
              删除
            </a>
          </>
        )}
      >
        {(fields) =>
          fields.map(({ index }) => (
            <>
              <BizFormItemInput
                name={[index, 'name']}
                label="姓名"
                placeholder="请输入姓名"
                rules={[{ required: true, message: '姓名不能为空' }]}
              />
              <BizFormItemInput
                name={[index, 'mobile']}
                label="手机号码"
                placeholder="请输入手机号码"
                extendRules={[{ required: true, message: '手机号码不能为空' }]}
                type="mobile"
              />
            </>
          ))
        }
      </BizForm.Array>
    </DemoForm>
  );
}

export default Demo;
