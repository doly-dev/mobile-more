import * as React from 'react';
import { isMobile } from 'util-helpers';
import { sleep } from 'ut2';
import { Toast } from 'antd-mobile';
import { BizForm, BizFormItemInput, BizFormItemCaptcha } from 'mobile-more';
import DemoForm from './components/DemoForm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function sendCaptcha(mobile: string) {
  await sleep(2000);
  return;
}

function Demo() {
  const [form] = BizForm.useForm();

  const handleGetCaptcha = React.useCallback(async () => {
    try {
      // 验证手机号码
      await form.validateFields(['mobile']);
    } catch (err: any) {
      Toast.show({ content: err.errorFields[0].errors[0] });
      return false;
    }

    //  发送验证码
    return sendCaptcha(form.getFieldValue(['mobile']));
  }, [form]);

  return (
    <DemoForm
      form={form}
      hasFeedback={false}
      onFinishFailed={(errInfo) => {
        Toast.show({ content: errInfo.errorFields[0].errors[0] });
      }}
      initialValues={{
        mobile: '13000000000'
      }}
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
      <BizFormItemCaptcha name="captcha1" label="验证码" onGetCaptcha={handleGetCaptcha} />
      <BizFormItemCaptcha
        name="captcha2"
        label="自定义"
        second={120}
        initText="初始文本"
        runText="倒计时%ss"
        resetText="重新倒计时"
        placeholder="6位数验证码"
        captchaButtonProps={{
          size: 'small',
          color: 'default',
          fill: 'solid'
        }}
        onGetCaptcha={handleGetCaptcha}
      />
    </DemoForm>
  );
}

export default Demo;
