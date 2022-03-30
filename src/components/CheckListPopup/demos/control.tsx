import * as React from 'react';
import { Button } from 'antd-mobile';
import { CheckListPopup } from 'mobile-more';
import { FruitOptions } from './constants';

function Demo() {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState<string[]>();

  return (
    <>
      <Button onClick={() => setVisible(true)}>点击选择</Button>
      <CheckListPopup
        title="标题"
        visible={visible}
        onVisibleChange={setVisible}
        value={value}
        onChange={setValue}
        options={FruitOptions}
        bodyStyle={{ height: '50vh' }}
        style={{ '--adm-color-primary': '#f54d4f' } as React.CSSProperties}
      />
      <p>已选：{value}</p>
    </>
  );
}

export default Demo;
