import React, { useState } from 'react';
import { CaptchaButton } from 'mobile-more';

const Demo = () => {
  const [start, setStart] = useState(false);

  return (
    <CaptchaButton
      start={start}
      second={15}
      onClick={() => {
        setStart(true);
      }}
      onEnd={() => {
        setStart(false);
      }}
    />
  );
};

export default Demo;
