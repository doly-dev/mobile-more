import { Button, ButtonProps } from 'antd-mobile';
import CountDown from 'countdown-pro';
import React, { useEffect, useRef, useState } from 'react';
import { useLatest, useUpdateEffect } from 'rc-hooks';
import type { ButtonRef } from '../../antd-mobile.interface';
import { useConfig } from '../BizConfigProvider';

export type { ButtonRef };

type CountDownType = InstanceType<typeof CountDown>;

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

  const [time, setTime] = useState(second);

  const completedRef = useRef(false);
  const latestOnEnd = useLatest(onEnd);
  const countdownRef = useRef<CountDownType>();
  if (!countdownRef.current) {
    countdownRef.current = new CountDown({
      time: second * 1000,
      onChange(currentTime) {
        setTime(currentTime / 1000);
      },
      onEnd() {
        completedRef.current = true;
        latestOnEnd.current?.();
      }
    });
  }

  useEffect(() => {
    if (start) {
      countdownRef.current?.restart();
    } else {
      countdownRef.current?.pause();
    }

    return () => {
      countdownRef.current?.pause();
    };
  }, [start]);

  useUpdateEffect(() => {
    countdownRef.current?.updateOptions({ time: second * 1000 });
  }, [second]);

  return (
    <Button loadingText={locale.captcha.loadingText} {...restProps} ref={ref} disabled={start}>
      {!start && (completedRef.current ? resetText : initText)}
      {start && runText.replace(/%s/g, time.toString())}
    </Button>
  );
});

CaptchaButton.displayName = 'CaptchaButton';

export default CaptchaButton;
