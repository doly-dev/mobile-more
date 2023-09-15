import * as React from 'react';
import Notice from '..';

function Demo() {
  return (
    <>
      <Notice text="温馨提示：您的XXXX资质即将过期，未免影响收款，请及时修改更新。" />
      <Notice
        text="您的资质变更申请结果将在1个工作日内给出。如果审核不通过，请及时修改您的资料。"
        status="info"
        changeText="查看我的申请"
      />
      <Notice
        text="温馨提示：您的XXXX资质已过期，请尽快修改并提交审核。审核通过后，即可恢复正常使用。"
        status="error"
      />
    </>
  );
}

export default Demo;
