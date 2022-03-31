import * as React from 'react';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';
import SuperCascader, { SuperCascaderProps } from './SuperCascader';

export interface BizFormItemCascaderProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SuperCascaderProps,
      'placeholder' | 'title' | 'options' | 'mapKeys' | 'renderCurrentValue' | 'separator'
    > {
  readOnly?: boolean;
  cascaderProps?: Partial<SuperCascaderProps>;
}

const BizFormItemCascader: React.FC<BizFormItemCascaderProps> = ({
  // input props
  placeholder = '请选择',

  // cascader props
  title,
  options,
  mapKeys,
  renderCurrentValue,
  separator,
  cascaderProps,

  // item props
  readOnly,
  disabled,
  onClick,
  required,
  ...restProps
}) => {
  const label = getLabel(restProps);
  const [visible, setVisible] = React.useState(false);

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (!disabled && !readOnly) {
        setVisible(true);
      }
      onClick?.(e);
    },
    [disabled, onClick, readOnly]
  );

  return (
    <BizFormItem
      arrow
      rules={[
        {
          validator(rule, value) {
            if (required && (!Array.isArray(value) || value.length <= 0)) {
              return Promise.reject(`请选择${label}`);
            }
            return Promise.resolve();
          }
        }
      ]}
      required={required}
      disabled={disabled}
      onClick={handleClick}
      {...restProps}
      trigger="onConfirm"
      validateTrigger="onConfirm"
    >
      <SuperCascader
        title={title}
        visible={visible}
        onClose={() => setVisible(false)}
        options={options}
        mapKeys={mapKeys}
        placeholder={placeholder}
        renderCurrentValue={renderCurrentValue}
        separator={separator}
        {...cascaderProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemCascader;
