import dayjs, { Dayjs } from 'dayjs';

// DatePicker picker值
export type Picker = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';

// 度量值
export enum DateScale {
  time = 'hours',
  date = 'days',
  week = 'weeks',
  month = 'months',
  quarter = 'months',
  year = 'years'
}

// 中文单位
export enum DateUnit {
  time = '小时',
  date = '天',
  week = '周',
  month = '月',
  quarter = '季',
  year = '年'
}

// 日期格式
export enum DateFormat {
  date = 'YYYY-MM-DD',
  week = 'YYYY-wo',
  month = 'YYYY-MM',
  quarter = 'YYYY-\\QQ',
  year = 'YYYY'
}

// 获取日期格式
export function getDateFormat(
  format: typeof DateFormat,
  picker: keyof typeof DateFormat,
  showTime = false
) {
  if (format) {
    return format;
  }
  const timeFormatStr = picker === 'date' && showTime ? ' HH:mm:ss' : '';
  return DateFormat[picker] + timeFormatStr || 'YYYY-MM-DD';
}

type CreateDisabledDateOptions = {
  disabledDateBefore?: number;
  disabledDateAfter?: number;
};

// 创建不可选日期方法
export function createDisabledDate(picker: Picker = 'date', opts?: CreateDisabledDateOptions) {
  const { disabledDateBefore, disabledDateAfter } = opts || {};

  if (typeof disabledDateBefore !== 'number' && typeof disabledDateAfter !== 'number') {
    return () => false;
  }

  const scale = DateScale[picker];

  if (!scale) {
    return () => false;
  }

  return (current: Dayjs) => {
    if (!current) {
      return false;
    }

    const hasBefore = typeof disabledDateBefore === 'number';
    const hasAfter = typeof disabledDateAfter === 'number';

    let before = disabledDateBefore as number;
    let after = disabledDateAfter as number;

    // 处理季度
    if (picker === 'quarter') {
      if (hasBefore) {
        before *= 3;
      }
      if (hasAfter) {
        after *= 3;
      }
    }

    if (hasBefore && hasAfter) {
      return (
        current <= dayjs().add(before, scale).endOf(scale) ||
        current >= dayjs().add(after, scale).startOf(scale)
      );
    } else if (hasBefore) {
      return current <= dayjs().add(before, scale).endOf(scale);
    } else if (hasAfter) {
      return current >= dayjs().add(after, scale).startOf(scale);
    }
    return false;
  };
}

// 转换为dayjs值
export function transformMomentValue(val: Dayjs | string): Dayjs;
export function transformMomentValue(val: (Dayjs | string)[]): Dayjs[];
export function transformMomentValue(val: Dayjs | string | (string | Dayjs)[]) {
  if (Array.isArray(val)) {
    return val.map((item) => transformMomentValue(item));
  }
  if (typeof val === 'string') {
    return dayjs(val);
  }
  return val;
}

// 转换time为dayjs值
export function transformMomentTime(time: Dayjs | string, format?: string): Dayjs;
export function transformMomentTime(time: (Dayjs | string)[], format?: string): Dayjs[];
export function transformMomentTime(
  time: Dayjs | string | (Dayjs | string)[],
  format = 'HH:mm:ss'
) {
  if (Array.isArray(time)) {
    return time.map((timeItem) => transformMomentTime(timeItem, format));
  }
  if (typeof time === 'string') {
    return dayjs(time, format);
  }
  return time;
}
