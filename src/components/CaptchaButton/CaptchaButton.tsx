import { Button, ButtonProps } from 'antd-mobile';
import CountDown from 'countdown-pro';
import React, { useEffect, useMemo, useState } from 'react';
import type { ButtonRef } from '../../antd-mobile.interface';
import { useConfig } from '../BizConfigProvider';

export type { ButtonRef };

export interface CaptchaButtonProps extends ButtonProps {
  start?: boolean;
  second?: number;
  onEnd?: () => void;
  initText?: string;
  runText?: string;
  resetText?: string;
}

const CaptchaButton = React.forwardRef<ButtonRef, CaptchaButtonProps>((props, ref) => {
  const { locale } = useConfig();
  const {
    // 开始倒计时
    start = false,
    // 初始显示文本
    initText = locale.captcha.initText,
    // 倒计时显示文本，包含%s会自动替换为秒数
    runText = locale.captcha.runText,
    // 结束显示文本
    resetText = locale.captcha.resetText,
    // 倒计时时长，单位秒
    second = 60,
    // 倒计时结束的回调方法
    onEnd,
    ...restProps
  } = props;

  // 0-初始化 1-运行中 2-结束
  const [status, setStatus] = useState(() => (start ? 1 : 0));
  const [runSecond, setRunSecond] = useState(second);

  const countdown = useMemo(
    () =>
      new CountDown({
        time: second * 1000,
        onChange(currentTime) {
          setRunSecond(currentTime / 1000);
        },
        onEnd() {
          setStatus(2);
          onEnd?.();
        }
      }),
    [onEnd, second]
  );

  useEffect(() => {
    if (start) {
      setStatus(1);
      countdown.start();

      return () => {
        countdown.pause();
      };
    }
  }, [countdown, start]);

  useEffect(() => {
    if (status !== 1) {
      countdown.reset();
    }
  }, [countdown, status]);

  return (
    <Button
      loadingText={locale.captcha.loadingText}
      {...restProps}
      ref={ref}
      disabled={status === 1}
    >
      {status === 0 && initText}
      {status === 1 && runText.replace(/%s/g, runSecond.toString())}
      {status === 2 && resetText}
    </Button>
  );
});

CaptchaButton.displayName = 'CaptchaButton';

export default CaptchaButton;
