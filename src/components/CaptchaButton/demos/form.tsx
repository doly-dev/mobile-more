import * as React from 'react';
import { Button, Toast } from 'antd-mobile';
import { BizForm, BizFormItemInput, CaptchaButton } from 'mobile-more';
import { isMobile, waitTime } from 'util-helpers';

async function sendCaptcha(mobile: string) {
  console.log(mobile);
  await waitTime();
  return;
}

function Demo() {
  const [form] = BizForm.useForm();
  const [loading, setLoading] = React.useState(false);
  const [start, setStart] = React.useState(false);

  const handleClickCaptcha = React.useCallback(() => {
    form
      .validateFields(['mobile'])
      .then(async () => {
        setLoading(true);
        await sendCaptcha(form.getFieldValue(['mobile']));
        setStart(true);
      })
      .catch(() => {
        Toast.show({ content: '请输入正确的手机号码' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [form]);

  return (
    <BizForm
      name="form-captcha"
      form={form}
      layout="horizontal"
      hasFeedback={false}
      requiredMarkStyle="text-optional"
      onFinish={(values) => {
        console.log(values);
      }}
      onFinishFailed={(errInfo) => {
        Toast.show({ content: errInfo.errorFields[0].errors[0] });
      }}
      footer={
        <Button type="submit" color="primary" block>
          登录
        </Button>
      }
    >
      <BizFormItemInput
        name="mobile"
        label="手机号码"
        type="number"
        maxLength={11}
        rules={[
          {
            required: true,
            message: '请输入手机号码'
          },
          {
            validator(_, value) {
              let errMsg = '';
              if (value && !isMobile(value)) {
                errMsg = '请输入正确的手机号码';
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      />
      <BizFormItemInput
        name="captcha"
        label="短信验证码"
        extra={
          <CaptchaButton
            size="small"
            color="primary"
            fill="none"
            onClick={handleClickCaptcha}
            start={start}
            loading={loading}
          />
        }
        maxLength={6}
        rules={[
          {
            required: true,
            message: '请输入短信验证码'
          }
        ]}
      />
    </BizForm>
  );
}

export default Demo;
