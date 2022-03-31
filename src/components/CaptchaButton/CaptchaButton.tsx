import React, { useState, useEffect, useMemo } from 'react';
import type { ButtonProps, ButtonRef } from 'antd-mobile/es/components/button';
import { Button } from 'antd-mobile';
import CountDown from 'countdown-pro';

export type { ButtonRef };

export interface CaptchaButtonProps extends ButtonProps {
  start?: boolean;
  second?: number;
  onEnd?: () => void;
  initText?: string;
  runText?: string;
  resetText?: string;
}

const CaptchaButton = React.forwardRef<ButtonRef, CaptchaButtonProps>(
  (
    {
      // 开始倒计时
      start = false,
      // 初始显示文本
      initText = '获取验证码',
      // 倒计时显示文本，包含%s会自动替换为秒数
      runText = '%s秒后重新获取',
      // 结束显示文本
      resetText = '重新获取验证码',
      // 倒计时时长，单位秒
      second = 60,
      // 倒计时结束的回调方法
      onEnd,
      ...restProps
    },
    ref
  ) => {
    // 0-初始化 1-运行中 2-结束
    const [status, setStatus] = useState(() => (start ? 1 : 0));
    const [runSecond, setRunSecond] = useState(second);

    const countdown = useMemo(
      () =>
        new CountDown({
          time: second * 1000,
          format: (ms) => ms / 1000,
          onChange: setRunSecond,
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
      <Button {...restProps} ref={ref} disabled={status === 1}>
        {status === 0 && initText}
        {status === 1 && runText.replace(/%s/g, runSecond.toString())}
        {status === 2 && resetText}
      </Button>
    );
  }
);

CaptchaButton.displayName = 'CaptchaButton';

export default CaptchaButton;
