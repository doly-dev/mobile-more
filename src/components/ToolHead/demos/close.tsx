import * as React from 'react';
import { EmojiSmile } from 'doly-icons';
import { ToolHead } from 'mobile-more';

function Demo() {
  return (
    <>
      <ToolHead.CloseToolHead title="测试标题" />
      <br />
      <ToolHead.CloseToolHead
        title="点击关闭图标回调"
        onClickCloseIcon={() => {
          console.log('click close icon');
        }}
      />
      <br />
      <ToolHead.CloseToolHead title="不同位置" closePlacement="left" />
      <br />
      <ToolHead.CloseToolHead title="自定义关闭图标" closeIcon={<EmojiSmile />} />
    </>
  );
}

export default Demo;
