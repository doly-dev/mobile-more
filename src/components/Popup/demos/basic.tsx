import * as React from 'react';
import { Button } from 'antd-mobile';
import { Popup } from 'mobile-more';

function Demo() {
  return (
    <>
      <Popup trigger={<Button>显示</Button>} title="测试标题" bodyStyle={{ height: '50vh' }}>
        内容
      </Popup>
      <Popup
        trigger={<Button>显示内容过长</Button>}
        title="测试标题"
        bodyStyle={{ height: '50vh' }}
      >
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
        内容过长
        <br />
      </Popup>
    </>
  );
}

export default Demo;
