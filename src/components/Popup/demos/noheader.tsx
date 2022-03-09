import * as React from 'react';
import { Button } from 'antd-mobile';
import { Popup } from 'mobile-more';

function Demo() {
  return (
    <>
      <Popup trigger={<Button>没有头部</Button>} bodyStyle={{ height: '50vh' }} header={null}>
        内容
      </Popup>
      <Popup trigger={<Button>没有标题</Button>} bodyStyle={{ height: '50vh' }}>
        内容
      </Popup>
    </>
  );
}

export default Demo;
