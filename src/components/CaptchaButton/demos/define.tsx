import React, { useState } from 'react';
import { sleep } from 'ut2';
import { CaptchaButton } from 'mobile-more';

// 接口请求
async function getValidateCode() {
  await sleep();
  return;
}

const Demo = () => {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    getValidateCode().then(() => {
      setLoading(false);
      setStart(true);
    });
  };

  return (
    <CaptchaButton
      start={start}
      second={10}
      onClick={handleClick}
      initText="点击开始倒计时"
      runText="剩余%s秒"
      resetText="重新开始"
      onEnd={() => {
        setStart(false);
      }}
      loading={loading}
    />
  );
};

export default Demo;
