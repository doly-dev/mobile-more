import * as React from 'react';
import { Button, Toast } from 'antd-mobile';
import { BizForm, BizFormItemInput, CaptchaButton } from 'mobile-more';
import { isMobile } from 'util-helpers';
import { sleep } from 'ut2';

async function sendCaptcha(mobile: string) {
  console.log(mobile);
  await sleep();
  return;
}

function Demo() {
  const [form] = BizForm.useForm();
  const [loading, setLoading] = React.useState(false);
  const [start, setStart] = React.useState(false);

  const handleClickCaptcha = React.useCallback(async () => {
    try {
      await form.validateFields(['mobile']);
    } catch (err: any) {
      Toast.show({ content: err.errorFields[0].errors[0] });
      return false;
    }

    setLoading(true);
    return sendCaptcha(form.getFieldValue(['mobile'])).finally(() => {
      setLoading(false);
      setStart(true);
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
        required
        extendRules={[
          {
            validator(_, value) {
              if (value && !isMobile(value)) {
                return Promise.reject('请输入正确的手机号码');
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
