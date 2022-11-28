import { Radio, RadioGroupProps, RadioProps, Space, SpaceProps } from 'antd-mobile';
import * as React from 'react';
import BizFormItem, { BizFormItemProps } from './FormItem';
import getLabel from './utils/getLabel';

type Option = {
  label?: React.ReactNode;
  value?: RadioProps['value'];
  disabled?: boolean;
  [key: string]: any;
};

export interface BizFormItemRadioProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<RadioProps, 'block' | 'icon'> {
  options: Option[];
  fieldNames?: { label?: string; value?: string; disabled?: string };
  spaceProps?: SpaceProps;
  radioProps?: RadioProps;
  radioGroupProps?: RadioGroupProps;
}

const BizFormItemRadio: React.FC<BizFormItemRadioProps> = ({
  block,
  icon,
  options,
  fieldNames,
  radioProps,
  radioGroupProps,

  spaceProps,

  required,
  ...restProps
}) => {
  const label = getLabel(restProps);
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
          required,
          message: `请选择${label}`
        }
      ]}
      {...restProps}
    >
      <Radio.Group {...radioGroupProps}>
        <Space
          direction={block ? 'vertical' : 'horizontal'}
          block={block}
          wrap
          {...spaceProps}
          style={{ width: block ? '100%' : 'auto', ...spaceProps?.style }}
        >
          {options.map((item, index) => (
            <Radio
              key={item[valueKey] + '' + index}
              value={item[valueKey]}
              disabled={item[disabledKey]}
              icon={icon}
              block={block}
              {...radioProps}
            >
              {item[labelKey]}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </BizFormItem>
  );
};

export default BizFormItemRadio;
