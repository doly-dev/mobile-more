import * as React from 'react';
import dayjs from 'dayjs';
import SuperDatePicker, {
  defaultFormat,
  SuperDatePickerProps,
  DatePickerProps
} from './SuperDatePicker';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';

export interface BizFormItemDatePickerProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<SuperDatePickerProps, 'format' | 'placeholder' | 'precision' | 'renderLabel' | 'title'> {
  readOnly?: boolean;
  datePickerProps?: DatePickerProps;
}

const BizFormItemDatePicker: React.FC<BizFormItemDatePickerProps> = ({
  precision = 'day',
  format: outFormat,
  renderLabel,
  readOnly = false,
  placeholder,
  datePickerProps,
  disabled,
  onClick,
  title,

  required,
  transform: outTransform,
  ...restProps
}) => {
  const label = getLabel(restProps);
  const [visible, setVisible] = React.useState(false);

  const format = React.useMemo(
    () => outFormat || defaultFormat[precision] || defaultFormat.day,
    [outFormat, precision]
  );
  const transform = React.useCallback(
    (value: Date) => {
      if (typeof outTransform === 'function') {
        return outTransform(value);
      }
      if (precision !== 'week' && precision !== 'week-day' && format && value) {
        return typeof format === 'function'
          ? format(value, precision)
          : dayjs(value).format(format);
      }
      return value;
    },
    [format, outTransform, precision]
  );
  const handleClick = React.useCallback(
    (e: React.MouseEvent, widgetRef: React.MutableRefObject<any>) => {
      if (!readOnly && !disabled) {
        setVisible(true);
      }
      onClick?.(e, widgetRef);
    },
    [disabled, onClick, readOnly]
  );

  return (
    <BizFormItem
      transform={transform}
      disabled={disabled}
      required={required}
      rules={[
        {
          required,
          message: `请选择${label}`
        }
      ]}
      onClick={handleClick}
      {...restProps}
      trigger="onConfirm"
      validateTrigger="onConfirm"
    >
      <SuperDatePicker
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        renderLabel={renderLabel}
        placeholder={placeholder}
        format={format}
        precision={precision}
        title={title}
        {...datePickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemDatePicker;
