import * as React from 'react';
import { ScrollLoadView } from 'mobile-more';

const customText = {
  loading: '加载中...',
  error: '加载失败，点击加载更多',
  done: '到底啦，没有更多的内容了'
};

const Demo = () => {
  return (
    <>
      <ScrollLoadView text={customText} />
      <ScrollLoadView loading text={customText} showLoadingIcon={false} />
      <ScrollLoadView done text={customText} />
      <ScrollLoadView error text={customText} onClick={() => console.log('点击加载失败')} />
    </>
  );
};

export default Demo;
