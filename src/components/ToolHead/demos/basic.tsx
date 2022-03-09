import * as React from 'react';
import { ToolHead } from 'mobile-more';

function Demo() {
  return (
    <>
      <ToolHead left="左边" right={<div>右边</div>} center="中间" />
      <br />
      <ToolHead center="中间" />
      <br />
      <ToolHead left="左边" right={<div>右边</div>} />
      <br />
      <ToolHead right="右边" center="中间" />
      <br />
      <ToolHead left="左边" center="中间" />
      <br />
      <ToolHead
        left={['左1', '左2', <div key="left-3">左3</div>]}
        right={['右1', <div key="right-2">右2</div>]}
        center="中间"
      />
    </>
  );
}

export default Demo;
