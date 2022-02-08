import * as React from 'react';
import { ScrollLoadView } from 'mobile-more';

const Demo = () => {
  return (
    <>
      <ScrollLoadView />
      <ScrollLoadView loading />
      <ScrollLoadView done />
      <ScrollLoadView error />
    </>
  );
};

export default Demo;
