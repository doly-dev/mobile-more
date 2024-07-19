import * as React from 'react';
import dayjs from 'dayjs';
import SuperDatePicker, { SuperDatePickerProps, DatePickerProps } from './SuperDatePicker';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import { useConfig } from '../../BizConfigProvider';

export interface BizFormItemDatePickerProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<SuperDatePickerProps, 'format' | 'placeholder' | 'precision' | 'renderLabel' | 'title'> {
  readOnly?: boolean;
  datePickerProps?: DatePickerProps;
}

const BizFormItemDatePicker: React.FC<BizFormItemDatePickerProps> = (props) => {
  const { locale } = useConfig();
  const {
    precision = 'day',
    format: outFormat,
    renderLabel,
    readOnly = false,
    placeholder = locale.form.common.selectPlaceholder,
    datePickerProps,
    disabled,
    onClick,
    title,

    required,
    transform: outTransform,
    ...restProps
  } = props;
  const [visible, setVisible] = React.useState(false);

  const defaultFormat = React.useMemo(
    () => ({
      year: 'YYYY',
      month: 'YYYY-MM',
      day: 'YYYY-MM-DD',
      hour: 'YYYY-MM-DD HH',
      minute: 'YYYY-MM-DD HH:mm',
      second: 'YYYY-MM-DD HH:mm:ss',
      week: (date: Date) => {
        const d = dayjs(date);
        return d.format('YYYY-W') + locale.form.date.unit.week;
      },
      'week-day': (date: Date) => {
        const d = dayjs(date);
        const fmtStr = d.format('YYYY-W') + locale.form.date.unit.week;
        let day = d.day() as number;
        day = day === 0 ? 7 : day; // fix: 兼容处理
        return `${fmtStr} ${locale.form.date.weekday(day)}`;
      }
    }),
    [locale.form.date]
  );

  const format = React.useMemo(
    () => outFormat || defaultFormat[precision] || defaultFormat.day,
    [outFormat, precision, defaultFormat]
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
          message: locale.form.common.selectRequired
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
