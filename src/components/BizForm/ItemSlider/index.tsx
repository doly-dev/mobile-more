import { Slider, SliderProps } from 'antd-mobile';
import classnames from 'classnames';
import * as React from 'react';
import { formPrefixCls } from '../config';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import './index.less';

const prefixCls = `${formPrefixCls}-item-slider`;

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
  return (
    <BizFormItem
      className={classnames(prefixCls, className)}
      required={required}
      rules={[
        {
          required,
          message: '请选择${label}'
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
