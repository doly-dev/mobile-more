import * as React from 'react';
import Card from '..';

function Demo() {
  return (
    <>
      <Card title="标题">内容</Card>
      <br />
      <Card
        title="标题"
        subTitle="（选填）"
        tip="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        extra={<a>示例图</a>}
      >
        副标题和头部右侧扩展内容，提示内容
      </Card>
      <br />
      <Card size="small" title="标题" subTitle="（选填）" extra={<a>示例图</a>}>
        小尺寸
      </Card>
      <br />
      <Card
        size="small"
        title="标题"
        subTitle="（选填）"
        tip="提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容"
        extra={<a>示例图</a>}
      >
        小尺寸
      </Card>
    </>
  );
}

export default Demo;
