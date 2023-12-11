import * as React from 'react';
import classnames from 'classnames';
import BizFormItemInput, { BizFormItemInputProps, InputRef } from '../ItemInput';
import CaptchaButton, { CaptchaButtonProps } from '../../CaptchaButton';
import { formPrefixCls } from '../config';
import './index.less';

const prefixCls = `${formPrefixCls}-item-captcha`;

const checkResult = async (fn: () => boolean | Promise<boolean>) => {
  try {
    const ret = await fn();
    if (ret !== false) {
      return ret;
    }
  } catch (err) {
    console.error(err);
  }
  return Promise.reject();
};

export interface BizFormItemCaptchaProps
  extends BizFormItemInputProps,
    Pick<CaptchaButtonProps, 'initText' | 'runText' | 'resetText' | 'second'> {
  onGetCaptcha?: () => boolean | Promise<any>;
  captchaButtonProps?: CaptchaButtonProps;
}

const BizFormItemCaptcha: React.FC<BizFormItemCaptchaProps> = ({
  initText,
  runText,
  resetText,
  second,
  onGetCaptcha = () => true,
  captchaButtonProps,

  className,
  inputProps,
  ...restProps
}) => {
  const inputRef = React.useRef<InputRef>(null);

  // 倒计时按钮状态
  const [start, setStart] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // 点击按钮
  const onButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    captchaButtonProps?.onClick?.(e);

    setLoading(true);
    try {
      // 验证手机号码/邮箱是否正确
      // 发送验证码
      await checkResult(onGetCaptcha);

      setStart(true);
      setLoading(false);
      inputRef.current?.focus();
    } catch (err) {
      setLoading(false);
    }
  };

  const handleEnd = React.useCallback(() => {
    setStart(false);
    captchaButtonProps?.onEnd?.();
  }, [captchaButtonProps]);

  return (
    <BizFormItemInput
      className={classnames(prefixCls, className)}
      disabledWhiteSpace
      {...restProps}
      ref={inputRef}
      inputProps={{
        ...inputProps,
        suffix: (
          <CaptchaButton
            initText={initText}
            runText={runText}
            resetText={resetText}
            second={second}
            loading={loading}
            fill="none"
            color="primary"
            {...captchaButtonProps}
            start={start}
            onClick={onButtonClick}
            onEnd={handleEnd}
          />
        )
      }}
    />
  );
};

export default BizFormItemCaptcha;
