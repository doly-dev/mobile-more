import * as React from 'react';
import { Button } from 'antd-mobile';
import { CheckListPopup } from 'mobile-more';
import { FruitOptions } from './constants';

function Demo() {
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <>
      <CheckListPopup
        title="标题"
        trigger={<Button>点击选择</Button>}
        value={value}
        onChange={setValue}
        options={FruitOptions}
        bodyStyle={{ height: '50vh' }}
        multiple
      />
      <p>已选：{value.join(',')}</p>
    </>
  );
}

export default Demo;
