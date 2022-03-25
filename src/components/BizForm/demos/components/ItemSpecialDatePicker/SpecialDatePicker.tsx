import * as React from 'react';
import dayjs from 'dayjs';
import { safeDate } from 'util-helpers';
import { ChevronRight } from 'doly-icons';
import { Input, DatePicker, Checkbox } from 'antd-mobile';
import { DatePickerProps } from 'antd-mobile/es/components/date-picker';
import styles from './SpecialDatePicker.module.less';

const DefaultFormat = 'YYYY-MM-DD';

const formatDate = (date?: Date | null, format = DefaultFormat) => {
  if (date) {
    return dayjs(date).format(format);
  }
  return date;
};

const labelRenderer = (type: string, data: number) => {
  switch (type) {
    case 'year':
      return data + '年';
    case 'month':
      return data + '月';
    case 'day':
      return data + '日';
    default:
      return data;
  }
};

export interface SpecialDatePickerProps extends DatePickerProps {
  format?: string;
  readOnly?: boolean;
  specialValue?: Date;
  specialLabel?: React.ReactNode;
  placeholder?: string;
}

const SpecialDatePicker: React.FC<SpecialDatePickerProps> = ({
  value,
  format = DefaultFormat,
  readOnly = false,
  placeholder = '请选择',
  specialValue = safeDate('9999-12-31'),
  specialLabel = '长期',
  onConfirm,
  onClose,
  ...restProps
}) => {
  const fmtValue = value ? formatDate(value, format) : value;
  const isSpecial = React.useMemo(
    () => fmtValue === formatDate(specialValue, format),
    [fmtValue, format, specialValue]
  );

  const handleChange = React.useCallback(
    (checked: boolean) => {
      onClose?.();
      if (!readOnly) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onConfirm?.(checked ? specialValue : undefined);
      }
    },
    [onClose, onConfirm, readOnly, specialValue]
  );

  // console.log(specialLabel, value, isSpecial);

  return (
    <div className={styles.specialDatePicker}>
      {!isSpecial && (
        <div className={styles.datePicker}>
          <DatePicker
            value={value}
            onConfirm={onConfirm}
            onClose={onClose}
            renderLabel={labelRenderer}
            {...restProps}
          >
            {(value) => {
              const fmtValue = value ? formatDate(value, format) : value;
              return <Input value={fmtValue || undefined} placeholder={placeholder} readOnly />;
            }}
          </DatePicker>
          <ChevronRight />
        </div>
      )}
      <div
        className={styles.checkbox}
        style={isSpecial ? { flex: 1 } : {}}
        onClick={(e) => {
          !readOnly && e.stopPropagation();
        }}
      >
        <Checkbox checked={isSpecial} onChange={handleChange}>
          {specialLabel}
        </Checkbox>
      </div>
    </div>
  );
};

export default SpecialDatePicker;
