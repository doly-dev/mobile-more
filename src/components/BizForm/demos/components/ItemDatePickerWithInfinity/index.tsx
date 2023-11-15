import { DatePickerProps } from 'antd-mobile';
import dayjs from 'dayjs';
import { BizFormItem, BizFormItemProps } from 'mobile-more';
import * as React from 'react';
import SpecialDatePicker, { SpecialDatePickerProps } from './WrapperDatePicker';

interface ItemDatePickerWithInfinityProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<SpecialDatePickerProps, 'infinityValue' | 'infinityLabel' | 'title'> {
  format?: string;
  readOnly?: boolean;
  placeholder?: string;
  datePickerProps?: DatePickerProps;
}

const ItemDatePickerWithInfinity: React.FC<ItemDatePickerWithInfinityProps> = ({
  datePickerProps,
  format = 'YYYY-MM-DD',
  readOnly,
  disabled,
  placeholder,
  title,
  infinityValue,
  infinityLabel,
  required,
  ...restProps
}) => {
  const label = restProps?.messageVariables?.label || restProps?.label;
  const [visible, setVisible] = React.useState(false);
  const transform = React.useCallback(
    (value: Date) => {
      if (format && value) {
        return dayjs(value).format(format);
      }
      return value;
    },
    [format]
  );

  return (
    <BizFormItem
      trigger="onConfirm"
      validateTrigger="onConfirm"
      arrow={false}
      transform={transform}
      disabled={disabled}
      rules={[
        {
          required,
          message: `请选择${label}`
        }
      ]}
      required={required}
      {...restProps}
      onClick={(e, widgetRef) => {
        if (!disabled && !readOnly) {
          setVisible(true);
        }
        restProps?.onClick?.(e, widgetRef);
      }}
    >
      <SpecialDatePicker
        visible={visible}
        onClose={() => setVisible(false)}
        placeholder={placeholder}
        infinityLabel={infinityLabel}
        infinityValue={infinityValue}
        readOnly={disabled || readOnly}
        format={format}
        title={title}
        {...datePickerProps}
      />
    </BizFormItem>
  );
};

export default ItemDatePickerWithInfinity;
