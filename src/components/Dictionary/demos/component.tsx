import * as React from 'react';
import { Tag } from 'antd-mobile';
import { Dictionary } from 'mobile-more';
import { Approve, ApproveOptions } from './constants';

function Demo() {
  return (
    <>
      <Dictionary
        valueEnum={ApproveOptions}
        value={Approve.Processing}
        component={<Tag />}
        fieldNames={{ props: 'tagProps' }}
      />
      <br />
      <br />
      <Dictionary
        valueEnum={ApproveOptions}
        value={Approve.Approve}
        component={<Tag />}
        fieldNames={{ props: 'tagProps' }}
      />
      <br />
      <br />
      <Dictionary
        valueEnum={ApproveOptions}
        value={Approve.Refused}
        component={<Tag />}
        fieldNames={{ props: 'tagProps' }}
      />
    </>
  );
}

export default Demo;
