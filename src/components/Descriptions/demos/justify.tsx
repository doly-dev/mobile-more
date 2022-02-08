import * as React from 'react';
import { Descriptions } from 'mobile-more';

function Demo() {
  return (
    <Descriptions
      colon={false}
      style={{
        '--justify-content': 'space-between',
        '--label-width': '7em',
        '--content-text-align': 'right'
      }}
      title="配送信息"
    >
      <Descriptions.Item label="订单号">2467954321467906</Descriptions.Item>
      <Descriptions.Item label="配送方式">付款后立即配送</Descriptions.Item>
      <Descriptions.Item label="配送地址">陆家嘴世纪金融广场xxx楼</Descriptions.Item>
    </Descriptions>
  );
}

export default Demo;
