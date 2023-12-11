import { Checkbox, CheckboxGroupProps, CheckboxProps, Space, SpaceProps } from 'antd-mobile';
import * as React from 'react';
import BizFormItem, { BizFormItemProps } from './FormItem';

type Option = {
  label?: React.ReactNode;
  value?: CheckboxProps['value'];
  disabled?: boolean;
  [key: string]: any;
};

export interface BizFormItemCheckboxProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<CheckboxProps, 'block' | 'icon'> {
  options: Option[];
  fieldNames?: { label?: string; value?: string; disabled?: string };
  spaceProps?: SpaceProps;
  checkboxProps?: CheckboxProps;
  checkboxGroupProps?: CheckboxGroupProps;
}

const BizFormItemCheckbox: React.FC<BizFormItemCheckboxProps> = ({
  block,
  icon,
  options,
  fieldNames,
  checkboxProps,
  checkboxGroupProps,

  spaceProps,

  required,
  ...restProps
}) => {
  const {
    label: labelKey,
    value: valueKey,
    disabled: disabledKey
  } = React.useMemo(
    () => ({
      label: 'label',
      value: 'value',
      disabled: 'disabled',
      ...fieldNames
    }),
    [fieldNames]
  );

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            if (required) {
              if ((Array.isArray(value) && value.length <= 0) || typeof value === 'undefined') {
                return Promise.reject('请选择${label}');
              }
            }
            return Promise.resolve();
          }
        }
      ]}
      {...restProps}
    >
      <Checkbox.Group {...checkboxGroupProps}>
        <Space
          direction={block ? 'vertical' : 'horizontal'}
          block={block}
          wrap
          {...spaceProps}
          style={{ width: block ? '100%' : 'auto', ...spaceProps?.style }}
        >
          {options.map((item, index) => (
            <Checkbox
              key={item[valueKey] + '' + index}
              value={item[valueKey]}
              disabled={item[disabledKey]}
              icon={icon}
              block={block}
              {...checkboxProps}
            >
              {item[labelKey]}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </BizFormItem>
  );
};

export default BizFormItemCheckbox;
