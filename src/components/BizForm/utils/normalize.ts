// 标准化输入
import { toString } from 'ut2';
import { formatBankCard, formatMobile } from 'util-helpers';

// 标准化输入非空白符
export const normalizeNotWhiteSpace = (value: string) => {
  // 如果替换全部空字符，输入中文时有bug
  // return toString(value).replace(/\s/g, '');
  return toString(value).trim();
};

// 标准化输入银行卡号
export const normalizeBankCard = (value: string, format = true) => {
  const valueStr = toString(value);
  const reg = /[^\d]/g;
  const ret = valueStr.replace(reg, '');
  return format ? formatBankCard(ret) : ret;
};

// 标准化输入身份证号
export const normalizeIdCard = (value: string, format = true) => {
  const valueStr = toString(value);
  const reg = /[^\dx]/gi;
  const ret = valueStr.replace(reg, '').substring(0, 18);
  return format ? ret.toUpperCase() : ret;
};

// 标准化输入手机号码
export const normalizeMobile = (value: string, format = true) => {
  const valueStr = toString(value);
  const reg = /[^\d]/g;
  const ret = valueStr.replace(reg, '');
  return format ? formatMobile(ret) : ret;
};

// 规整化数字输入
export function normalizeNumber(value: string, allowDot = true, allowMinus = true) {
  let valueStr = toString(value).replace(/[^\\.-\d]/g, '');

  if (allowDot) {
    const dotIndex = valueStr.indexOf('.');

    if (dotIndex > -1) {
      valueStr =
        valueStr.substring(0, dotIndex + 1) + valueStr.substring(dotIndex + 1).replace(/\./g, '');
    }
  } else {
    valueStr = valueStr.split('.')[0];
  }

  const minusIndex = valueStr.indexOf('-');

  if (allowMinus && minusIndex === 0) {
    valueStr = '-' + valueStr.substring(1).replace(/-/g, '');
  } else {
    valueStr = valueStr.replace(/-/g, '');
  }

  return valueStr;
}
