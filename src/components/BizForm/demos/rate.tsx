import * as React from 'react';
import { EmojiSmile } from 'doly-icons';
import { BizFormItemRate } from 'mobile-more';
import DemoForm from './components/DemoForm';

function Demo() {
  return (
    <DemoForm
      initialValues={{
        rate3: 4
      }}
    >
      <BizFormItemRate name="rate1" label="评分" />
      <BizFormItemRate name="rate2" label="半星" allowHalf />
      <BizFormItemRate name="rate3" label="只读" readOnly />
      <BizFormItemRate name="rate4" label="不可清除" allowClear={false} />
      <BizFormItemRate
        name="rate5"
        label="自定义"
        character={<EmojiSmile />}
        rateProps={{ style: { '--active-color': '#ff7f7f' } }}
      />
    </DemoForm>
  );
}

export default Demo;
