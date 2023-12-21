import { Checkbox, DatePicker, DatePickerProps, Input } from 'antd-mobile';
import dayjs from 'dayjs';
import { ChevronRight } from 'doly-icons';
import * as React from 'react';
import { safeDate } from 'util-helpers';
import styles from './WrapperDatePicker.module.less';

const DefaultFormat = 'YYYY-MM-DD';

const formatDate = (date?: string | Date | null, format = DefaultFormat) => {
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

export interface WrapperDatePickerProps extends DatePickerProps {
  format?: string;
  readOnly?: boolean;
  infinityValue?: string | Date;
  infinityLabel?: React.ReactNode;
  placeholder?: string;
}

const WrapperDatePicker: React.FC<WrapperDatePickerProps> = ({
  value,
  format = DefaultFormat,
  readOnly = false,
  placeholder = '请选择',
  infinityValue = safeDate('9999-12-31'),
  infinityLabel = '长期',
  onConfirm,
  onClose,
  ...restProps
}) => {
  const fmtValue = value ? formatDate(value, format) : value;
  const isInfinity = React.useMemo(
    () => fmtValue === formatDate(infinityValue, format),
    [fmtValue, format, infinityValue]
  );

  const handleChange = React.useCallback(
    (checked: boolean) => {
      onClose?.();
      if (!readOnly) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onConfirm?.(checked ? infinityValue : undefined);
      }
    },
    [onClose, onConfirm, readOnly, infinityValue]
  );

  return (
    <div className={styles.wrapper}>
      {!isInfinity && (
        <div className={styles.datePicker}>
          <DatePicker
            value={typeof value === 'string' ? safeDate(value) : value}
            onConfirm={onConfirm}
            onClose={onClose}
            renderLabel={labelRenderer}
            {...restProps}
          >
            {(val) => {
              const fmtVal = val ? formatDate(val, format) : val;
              return <Input value={fmtVal || undefined} placeholder={placeholder} readOnly />;
            }}
          </DatePicker>
          <ChevronRight />
        </div>
      )}
      <div
        className={styles.checkbox}
        style={isInfinity ? { flex: 1 } : {}}
        onClick={(e) => {
          !readOnly && e.stopPropagation();
        }}
      >
        <Checkbox checked={isInfinity} onChange={handleChange}>
          {infinityLabel}
        </Checkbox>
      </div>
    </div>
  );
};

export default WrapperDatePicker;
