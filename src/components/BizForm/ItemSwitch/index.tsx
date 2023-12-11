import { Switch, SwitchProps } from 'antd-mobile';
import classnames from 'classnames';
import * as React from 'react';
import { formPrefixCls } from '../config';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import { useConfig } from '../../BizConfigProvider';
import './index.less';

const prefixCls = `${formPrefixCls}-item-switch`;

export interface BizFormItemSwitchProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<SwitchProps, 'loading' | 'beforeChange' | 'checkedText' | 'uncheckedText'> {
  switchProps?: Omit<SwitchProps, 'checked'>;
}

const BizFormItemSwitch: React.FC<BizFormItemSwitchProps> = ({
  loading,
  beforeChange,
  checkedText,
  uncheckedText,
  switchProps,

  className,
  required,
  ...restProps
}) => {
  const { locale } = useConfig();
  return (
    <BizFormItem
      className={classnames(prefixCls, className)}
      required={required}
      rules={[
        {
          required,
          message: locale.form.common.inputRequired
        }
      ]}
      valuePropName="checked"
      {...restProps}
    >
      <Switch
        loading={loading}
        beforeChange={beforeChange}
        checkedText={checkedText}
        uncheckedText={uncheckedText}
        {...switchProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemSwitch;
