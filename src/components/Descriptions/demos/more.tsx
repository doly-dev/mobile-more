import * as React from 'react';
import { Descriptions } from 'mobile-more';

function Demo() {
  return (
    <Descriptions
      colon={false}
      style={{
        '--justify-content': 'space-between',
        '--label-width': '7em',
        '--content-text-align': 'right',
        '--font-size': '12px',
        '--label-color': '#7d7d80'
      }}
    >
      <Descriptions.Item label="营业执照编号">1**************6</Descriptions.Item>
      <Descriptions.Item label="商户名称">xxx生活馆</Descriptions.Item>
      <Descriptions.Item label="商户类型">有限责任公司</Descriptions.Item>
      <Descriptions.Item label="经营场所">上海市浦东新区xx镇xx街道xx弄x支弄xxx室</Descriptions.Item>
    </Descriptions>
  );
}

export default Demo;
