import * as React from 'react';
import { Tag } from 'antd-mobile';
import { Dictionary } from 'mobile-more';
import { Approve, ApproveOptions } from './constants';

function Demo() {
  return (
    <>
      <Tag color="primary">
        <Dictionary valueEnum={ApproveOptions} value={Approve.Processing} component={null} />
      </Tag>
      <br />
      <br />
      <Tag color="success">
        <Dictionary valueEnum={ApproveOptions} value={Approve.Approve} component={null} />
      </Tag>
      <br />
      <br />
      <Tag color="danger">
        <Dictionary valueEnum={ApproveOptions} value={Approve.Refused} component={null} />
      </Tag>
    </>
  );
}

export default Demo;
