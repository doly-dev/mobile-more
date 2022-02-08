import * as React from 'react';
import { Dictionary } from 'mobile-more';

const CurrencyData = [
  {
    symbol: '¥',
    code: 'CNY',
    name: '人民币',
    tag: {
      color: 'orange'
    }
  },
  {
    symbol: '$',
    code: 'USD',
    name: '美元'
  },
  {
    symbol: '€',
    code: 'EUR',
    name: '欧元'
  },
  {
    symbol: '￡',
    code: 'GBP',
    name: '英镑'
  }
];

function Demo() {
  return (
    <>
      <Dictionary
        valueEnum={CurrencyData}
        value="CNY"
        fieldNames={{ value: 'code', label: 'name' }}
      />
      <br />
      <br />
      <Dictionary
        valueEnum={CurrencyData}
        value="CNY"
        fieldNames={{ value: 'code', label: 'symbol' }}
      />
    </>
  );
}

export default Demo;
