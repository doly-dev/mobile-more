import * as React from 'react';
import { BizFormItemSlider } from 'mobile-more';
import DemoForm from './components/DemoForm';

function Demo() {
  const marks = {
    0: 0,
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 100
  };

  return (
    <DemoForm
      initialValues={{
        slider6: 50
      }}
    >
      <BizFormItemSlider name="slider1" label="滑块" />
      <BizFormItemSlider name="slider2" label="刻度" ticks step={10} />
      <BizFormItemSlider name="slider3" label="刻度标记" marks={marks} ticks />
      <BizFormItemSlider name="slider4" label="双滑块" marks={marks} ticks range />
      <BizFormItemSlider name="slider5" label="最大/最小" min={100} max={1000} step={100} />
      <BizFormItemSlider name="slider6" label="禁用" sliderProps={{ disabled: true }} />
      <BizFormItemSlider
        name="slider7"
        label="自定义"
        sliderProps={{ style: { '--fill-color': '#00b578' } }}
      />
    </DemoForm>
  );
}

export default Demo;
