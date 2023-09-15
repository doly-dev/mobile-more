import * as React from 'react';
import { Space } from 'antd-mobile';
import { Image } from 'mobile-more';

function Demo() {
  const src1 =
    'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80';
  const src2 =
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60';

  return (
    <>
      <Image src={src1} />
      <br />
      <br />
      <Space wrap>
        <Image src={src2} width={64} height={64} fit="cover" />
        <Image src={src2} width={64} height={64} fit="cover" name="开户凭证" />
        <Image
          src={src2}
          width={64}
          height={64}
          fit="cover"
          border="dashed"
          style={{ padding: 0 }}
          name="名称超长名称超长名称超长名称超长"
        />
        <Image src={src2} width={64} height={64} fit="cover" border="dashed" />
        <Image src={src2} width={64} height={64} fit="cover" border="dashed" name="开户凭证" />
        <Image src={src2} width={64} height={64} fit="cover" border="solid" name="开户凭证" />
      </Space>
      <br />
      <br />
      <h3>名称换行</h3>
      <div>
        <Image
          src={src2}
          width={64}
          height={64}
          fit="cover"
          nameWrap
          name="名称超长名称超长名称超长名称超长"
          rootStyle={{ display: 'inline-block' }}
        />
      </div>
    </>
  );
}

export default Demo;
