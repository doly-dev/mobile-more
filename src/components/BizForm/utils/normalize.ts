// 标准化输入

import { formatBankCard, formatMobile, normalizeString } from 'util-helpers';

// 标准化输入非空白符
export const normalizeNotWhiteSpace = (value: string) => {
  return normalizeString(value).replace(/\s/g, '');
};

// 标准化输入银行卡号
// symbol是为了处理脱敏✳️
export const normalizeBankCard = (value: string, symbol = '') => {
  const valueStr = normalizeString(value);
  const reg = symbol ? new RegExp(`[^\\d\\${symbol}]`, 'g') : /[^\d]/g;
  return formatBankCard(valueStr.replace(reg, ''));
};

// 标准化输入身份证号
export const normalizeIdCard = (value: string, symbol = '') => {
  const valueStr = normalizeString(value);
  const reg = symbol ? new RegExp(`[^\\dx\\${symbol}]`, 'gi') : /[^\dx]/gi;
  return valueStr.replace(reg, '').substring(0, 18).toUpperCase();
};

// 标准化输入手机号码
export const normalizeMobile = (value: string, symbol = '') => {
  const valueStr = normalizeString(value);
  const reg = symbol ? new RegExp(`[^\\d\\${symbol}]`, 'g') : /[^\d]/g;
  return formatMobile(valueStr.replace(reg, ''));
};

// 规整化数字输入
export function normalizeNumber(value: string, allowDot = true, allowMinus = true) {
  let valueStr = normalizeString(value).replace(/[^\\.-\d]/g, '');

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
