import * as React from 'react';
import classnames from 'classnames';
import { Slider } from 'antd-mobile';
import { SliderProps } from 'antd-mobile/es/components/slider';
import BizFormItem, { BizFormItemProps } from './FormItem';
import { formItemAdjustPrefixCls } from './config';
import getLabel from './utils/getLabel';

export interface BizFormItemSliderProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SliderProps,
      'min' | 'max' | 'marks' | 'step' | 'ticks' | 'range' | 'onAfterChange' | 'icon'
    > {
  sliderProps?: SliderProps;
}

const BizFormItemSlider: React.FC<BizFormItemSliderProps> = ({
  min,
  max,
  marks,
  step,
  ticks,
  range,
  icon,
  sliderProps,

  className,
  required,
  ...restProps
}) => {
  const label = getLabel(restProps);

  return (
    <BizFormItem
      className={classnames(formItemAdjustPrefixCls, className)}
      required={required}
      rules={[
        {
          required,
          message: `请选择${label}`
        }
      ]}
      {...restProps}
    >
      <Slider
        min={min}
        max={max}
        marks={marks}
        step={step}
        ticks={ticks}
        range={range}
        icon={icon}
        {...sliderProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemSlider;
