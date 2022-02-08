import * as React from 'react';
import { Dictionary } from 'mobile-more';
import { Approve, ApproveOptions } from './constants';

function Demo() {
  return (
    <>
      <Dictionary valueEnum={ApproveOptions} value={Approve.Processing} />
      <br />
      <br />
      <Dictionary valueEnum={ApproveOptions} value={Approve.Refused} />
      <br />
      <br />
      <Dictionary valueEnum={ApproveOptions} value="no" />
    </>
  );
}

export default Demo;
