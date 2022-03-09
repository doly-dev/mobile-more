import * as React from 'react';
import { ToolHead } from 'mobile-more';

function Demo() {
  return (
    <>
      <ToolHead.ConfirmToolHead />
      <br />
      <ToolHead.ConfirmToolHead title="测试标题" />
      <br />
      <ToolHead.ConfirmToolHead
        title="自定义文本"
        cancelText="Cancel"
        confirmText="OK"
        onCancel={() => {
          console.log('click cancel');
        }}
        onConfirm={() => {
          console.log('click confirm');
        }}
      />
    </>
  );
}

export default Demo;
