import * as React from 'react';
import dayjs from 'dayjs';
import { DatePickerProps } from 'antd-mobile/es/components/date-picker';
import { BizFormItem, BizFormItemProps } from 'mobile-more';
import SpecialDatePicker, { SpecialDatePickerProps } from './SpecialDatePicker';
import getLabel from '../../../utils/getLabel';

interface ItemSpecialDatePickerProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<SpecialDatePickerProps, 'specialValue' | 'specialLabel' | 'title'> {
  format?: string;
  readOnly?: boolean;
  placeholder?: string;
  datePickerProps?: DatePickerProps;
}

const ItemSpecialDatePicker: React.FC<ItemSpecialDatePickerProps> = ({
  datePickerProps,
  format = 'YYYY-MM-DD',
  readOnly,
  disabled,
  placeholder,
  title,
  specialValue,
  specialLabel,
  required,
  ...restProps
}) => {
  const label = getLabel(restProps);
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
      onClick={(e: React.MouseEvent) => {
        if (!disabled && !readOnly) {
          setVisible(true);
        }
        restProps?.onClick?.(e);
      }}
    >
      <SpecialDatePicker
        visible={visible}
        onClose={() => setVisible(false)}
        placeholder={placeholder}
        specialLabel={specialLabel}
        specialValue={specialValue}
        readOnly={disabled || readOnly}
        format={format}
        title={title}
        {...datePickerProps}
      />
    </BizFormItem>
  );
};

export default ItemSpecialDatePicker;