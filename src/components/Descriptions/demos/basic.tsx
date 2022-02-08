import * as React from 'react';
import { Descriptions } from 'mobile-more';

function Demo() {
  return (
    <>
      <Descriptions title="标题">
        <Descriptions.Item label="营业执照编号">1**************6</Descriptions.Item>
        <Descriptions.Item label="商户名称">xxx生活馆</Descriptions.Item>
        <Descriptions.Item label="商户类型">有限责任公司</Descriptions.Item>
        <Descriptions.Item label="经营场所">
          上海市浦东新区xx镇xx街道xx弄x支弄xxx室
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Descriptions
        style={{
          '--padding-inner': '3px',
          '--label-color': '#969799',
          '--font-size': '13px'
        }}
      >
        <Descriptions.Item label="xx账户">xxxxxxx</Descriptions.Item>
        <Descriptions.Item label="xx时间">2022-10-10 10:00:00</Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Descriptions
        title="左侧固定宽，右对齐"
        style={{ '--label-width': '7em', '--label-text-align': 'right' }}
      >
        <Descriptions.Item label="营业执照编号">1**************6</Descriptions.Item>
        <Descriptions.Item label="商户名称">xxx生活馆</Descriptions.Item>
        <Descriptions.Item label="商户类型">有限责任公司</Descriptions.Item>
        <Descriptions.Item label="经营场所">
          上海市浦东新区xx镇xx街道xx弄x支弄xxx室
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Descriptions
        title="反向排列"
        colon={false}
        style={{
          '--label-width': '7em',
          '--label-text-align': 'right',
          '--flex-direction': 'row-reverse'
        }}
      >
        <Descriptions.Item label="100.00">优惠额: </Descriptions.Item>
        <Descriptions.Item label="50.00">叠加优惠: </Descriptions.Item>
        <Descriptions.Item label="0.10">总计: </Descriptions.Item>
      </Descriptions>
    </>
  );
}

export default Demo;
