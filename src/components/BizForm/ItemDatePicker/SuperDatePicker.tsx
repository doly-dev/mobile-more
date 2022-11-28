import { DatePicker, DatePickerProps, Input } from 'antd-mobile';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import * as React from 'react';
import { safeDate } from 'util-helpers';
import { weekdayToZh } from './weekdayToZh';

dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);

export type { DatePickerProps };

export const defaultFormat = {
  year: 'YYYY',
  month: 'YYYY-MM',
  day: 'YYYY-MM-DD',
  hour: 'YYYY-MM-DD HH',
  minute: 'YYYY-MM-DD HH:mm',
  second: 'YYYY-MM-DD HH:mm:ss',
  week: 'YYYY-W周',
  'week-day': (date: Date) => {
    const d = dayjs(date);
    const fmtStr = d.format('YYYY-W周');
    let day = d.day();
    day = day === 0 ? 7 : day;
    return `${fmtStr} ${weekdayToZh(day)}`;
  }
};

const defaultLabelRenderer = (type: string, data: number) => {
  switch (type) {
    case 'year':
      return data + '年';
    case 'month':
      return data + '月';
    case 'week':
      return data + '周';
    case 'week-day':
      return weekdayToZh(data);
    case 'day':
      return data + '日';
    case 'hour':
      return data + '时';
    case 'minute':
      return data + '分';
    case 'second':
      return data + '秒';
    default:
      return data;
  }
};

export interface SuperDatePickerProps extends Omit<DatePickerProps, 'value'> {
  value?: DatePickerProps['value'] | string;
  format?: string | ((date: Date, precision: DatePickerProps['precision']) => string);
  placeholder?: string;
}

const SuperDatePicker: React.FC<SuperDatePickerProps> = ({
  precision = 'day',
  format: outFormatter,
  placeholder = '请选择',
  value: outValue,
  renderLabel,
  ...restProps
}) => {
  const format = React.useMemo(
    () => outFormatter || defaultFormat[precision] || defaultFormat.day,
    [outFormatter, precision]
  );
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
