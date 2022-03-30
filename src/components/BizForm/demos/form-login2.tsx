import * as React from 'react';
import { EnvelopeFill, PersonFill, ShieldLockFill } from 'doly-icons';
import { useAsync } from 'rc-hooks';
import { Button, Toast } from 'antd-mobile';
import { BizForm, BizFormItemInput, BizFormItemCheckList } from 'mobile-more';
import getOperator from './services/getOperator';

const itemStyle = {
  '--prefix-width': '1em',
  '--padding-left': '0'
};

function Demo() {
  const [form] = BizForm.useForm();
  const {
    run,
    data = [],
    mutate,
    loading
  } = useAsync(() => getOperator().then((res) => res.data), {
    autoRun: false
  });

  const handleClickOperator = React.useCallback(() => {
    if (!form.getFieldValue(['account'])) {
      return Toast.show({ content: '请输入账号' });
    }
    if (data.length <= 0) {
      run();
    }
  }, [data.length, form, run]);

  return (
    <BizForm
      name="form-login2"
      requiredMarkStyle="text-optional"
      hasFeedback={false}
      form={form}
      onFinish={(values) => {
        console.log(values);
      }}
      onFinishFailed={(errInfo) => {
        Toast.show(errInfo.errorFields[0].errors[0]);
      }}
      onValuesChange={(changeValues, values) => {
        // 修改账户时，清空操作员列表数据
        if (typeof changeValues.account !== 'undefined') {
          if (data.length > 0) {
            mutate([]);
          }
          if (values.user) {
            form.setFieldsValue({
              user: ''
            });
          }
        }
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
        label={<EnvelopeFill />}
        messageVariables={{ label: '账号' }}
        name="account"
        placeholder="请输入账号（邮箱或手机号码）"
        clearable
        disabledWhiteSpace
        style={itemStyle}
        required
      />
      <BizForm.Subscribe to={['account']}>
        {({ account }) => (
          <BizFormItemCheckList
            label={<PersonFill />}
            messageVariables={{ label: '操作员' }}
            name="user"
            placeholder="请选择操作员"
            title="请选择操作员"
            options={data}
            fieldNames={{ label: 'name', value: 'code' }}
            loading={loading}
            readOnly={!account}
            onClick={handleClickOperator}
            checkListPopupProps={{ bodyStyle: { height: '50vh' } }}
            style={itemStyle}
            required
            transform={(value) => value[0]}
          />
        )}
      </BizForm.Subscribe>
      <BizFormItemInput
        label={<ShieldLockFill />}
        messageVariables={{ label: '密码' }}
        name="password"
        placeholder="请输入密码"
        type="password"
        clearable
        style={itemStyle}
        required
      />
    </BizForm>
  );
}

export default Demo;
