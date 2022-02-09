import * as React from 'react';
import { Dictionary } from 'mobile-more';

const ApproveOptions = [
  {
    label: '审核中',
    value: ['1', '2', '3'],
    style: {
      color: '#1A7BF1'
    }
  },
  {
    label: '审核通过',
    value: ['4', '5', '6'],
    style: {
      color: '#12C306'
    }
  },
  {
    label: '审核失败',
    value: '9',
    style: {
      color: '#F11A1A'
    }
  }
];

function Demo() {
  const customMatch = React.useCallback((itemValue, currentValue) => {
    if (Array.isArray(itemValue)) {
      return itemValue.includes(currentValue);
    }
    return itemValue === currentValue;
  }, []);

  return (
    <>
      <Dictionary valueEnum={ApproveOptions} value="1" match={customMatch} />
      <br />
      <br />
      <Dictionary valueEnum={ApproveOptions} value="5" match={customMatch} />
      <br />
      <br />
      <Dictionary valueEnum={ApproveOptions} value="9" match={customMatch} />
    </>
  );
}

export default Demo;
