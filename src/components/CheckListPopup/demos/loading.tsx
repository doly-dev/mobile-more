import * as React from 'react';
import { Button } from 'antd-mobile';
import { CheckListPopup } from 'mobile-more';

function Demo() {
  return <CheckListPopup trigger={<Button>点击选择</Button>} title="标题" showSearch loading />;
}

export default Demo;
