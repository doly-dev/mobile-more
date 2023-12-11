import { DatePicker, DatePickerProps, Input } from 'antd-mobile';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import * as React from 'react';
import { safeDate } from 'util-helpers';
import { useConfig } from '../../BizConfigProvider';

dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);

export type { DatePickerProps };

export interface SuperDatePickerProps extends Omit<DatePickerProps, 'value'> {
  value?: DatePickerProps['value'] | string;
  format?: string | ((date: Date, precision: DatePickerProps['precision']) => string);
  placeholder?: string;
}

const SuperDatePicker: React.FC<SuperDatePickerProps> = ({
  precision,
  format,
  placeholder,
  value: outValue,
  renderLabel,
  ...restProps
}) => {
  const { locale } = useConfig();
  const defaultLabelRenderer = (type: string, data: number) => {
    switch (type) {
      case 'year':
        return data + locale.form.date.unit.year;
      case 'month':
        return data + locale.form.date.unit.month;
      case 'week':
        return data + locale.form.date.unit.week;
      case 'week-day':
        return locale.form.date.weekday(data);
      case 'day':
        return data + locale.form.date.unit.day;
      case 'hour':
        return data + locale.form.date.unit.hour;
      case 'minute':
        return data + locale.form.date.unit.minute;
      case 'second':
        return data + locale.form.date.unit.second;
      default:
        return data;
    }
  };

  const internalValue = React.useMemo(
    () => (typeof outValue === 'string' ? safeDate(outValue) : outValue),
    [outValue]
  );

  return (
    <DatePicker
      renderLabel={renderLabel || defaultLabelRenderer}
      precision={precision}
      value={internalValue}
      {...restProps}
    >
      {(value) => {
        const fmtValue = value
          ? typeof format === 'function'
            ? format(value, precision)
            : dayjs(value).format(format)
          : value;
        return <Input value={fmtValue || undefined} placeholder={placeholder} readOnly />;
      }}
    </DatePicker>
  );
};

export default SuperDatePicker;
