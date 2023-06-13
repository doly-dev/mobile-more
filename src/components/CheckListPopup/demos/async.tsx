import * as React from 'react';
import { Button } from 'antd-mobile';
import { useAsync } from 'rc-hooks';
import { sleep } from 'ut2';
import { CheckListPopup } from 'mobile-more';
import { FruitOptions } from './constants';

async function getOptions() {
  await sleep(5000);
  return FruitOptions;
}

function Demo() {
  const { loading, data } = useAsync(getOptions);
  const [value, setValue] = React.useState(FruitOptions[0].value);

  return (
    <>
      <CheckListPopup
        title="标题"
        trigger={<Button>点击选择</Button>}
        value={value}
        onChange={setValue}
        options={data}
        loading={loading}
        bodyStyle={{ height: '50vh' }}
      />
      <p>已选：{value}</p>
    </>
  );
}

export default Demo;
