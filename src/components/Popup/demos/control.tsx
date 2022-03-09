import * as React from 'react';
import { Button } from 'antd-mobile';
import { Popup } from 'mobile-more';

function Demo() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>显示</Button>
      <Popup
        title="测试标题"
        bodyStyle={{ height: '50vh' }}
        visible={visible}
        onVisibleChange={setVisible}
      >
        内容
      </Popup>
    </>
  );
}

export default Demo;
