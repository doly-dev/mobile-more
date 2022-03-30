import * as React from 'react';
import classnames from 'classnames';
import { Stepper } from 'antd-mobile';
import { StepperProps } from 'antd-mobile/es/components/stepper';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import { formPrefixCls } from '../config';
import getLabel from '../utils/getLabel';
import './index.less';

const prefixCls = `${formPrefixCls}-item-stepper`;

export interface BizFormItemStepperProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<StepperProps, 'min' | 'max' | 'step' | 'digits' | 'allowEmpty'> {
  stepperProps?: StepperProps;
}

const BizFormItemStepper: React.FC<BizFormItemStepperProps> = ({
  min,
  max,
  step,
  digits,
  allowEmpty,
  stepperProps,

  className,
  required,
  ...restProps
}) => {
  const label = getLabel(restProps);

  return (
    <BizFormItem
      className={classnames(prefixCls, className)}
      required={required}
      rules={[
        {
          required,
          message: `请输入${label}`
        }
      ]}
      {...restProps}
    >
      <Stepper
        min={min}
        max={max}
        step={step}
        digits={digits}
        allowEmpty={allowEmpty}
        {...(stepperProps as any)}
      />
    </BizFormItem>
  );
};

export default BizFormItemStepper;
