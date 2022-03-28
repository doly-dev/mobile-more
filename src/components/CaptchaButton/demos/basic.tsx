import React, { useCallback, useState } from 'react';
import { CaptchaButton } from 'mobile-more';

const Demo = () => {
  const [start, setStart] = useState(false);

  const handleClick = useCallback(() => {
    setStart(true);
  }, []);
  const handleEnd = useCallback(() => {
    setStart(false);
  }, []);

  return <CaptchaButton start={start} second={15} onClick={handleClick} onEnd={handleEnd} />;
};

export default Demo;
