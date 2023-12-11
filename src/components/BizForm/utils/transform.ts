// 转换
import { isArray } from 'ut2';

// 标识无效表单值
export const InvalidFormValue = `_invalid_${Math.random()}_`;

// 转换银行卡号
export function transformBankCard(val: string, char = ' ') {
  if (typeof val !== 'string') {
    return val;
  }

  let ret = val.replace(/\s/g, '');

  if (char) {
    const reg = new RegExp(`\\${char}`, 'g');
    ret = val.replace(reg, '');
  }
  return ret;
}

// 转换表单值
export function transformFormValues(values: any, transforms: any, currentLevelValues?: any) {
  if (
    (isArray(values) && values.length <= 0) ||
    (isArray(transforms) && transforms.length <= 0) ||
    !transforms
  ) {
    return values;
  }

  let ret: any;

  if (isArray(values) && isArray(transforms)) {
    ret = values.map((item, index) => {
      if (typeof item === 'object' || isArray(item)) {
        return transformFormValues(item, transforms[index]);
      }
      if (typeof transforms[index] === 'function') {
        return transforms[index](item);
      }
      return item;
    });
  } else if (typeof values === 'object' && typeof transforms === 'object') {
    ret = {};
    for (const key in values) {
      if (typeof values[key] === 'object' || isArray(values[key])) {
        ret[key] = transformFormValues(values[key], transforms[key], ret);
      } else if (typeof transforms[key] === 'function') {
        ret[key] = transforms[key](values[key], ret);
      } else {
        ret[key] = values[key];
      }
      if (ret[key] === InvalidFormValue) {
        delete ret[key];
      }
    }
  } else if (typeof transforms === 'function') {
    ret = transforms(values, currentLevelValues);
  } else {
    ret = values;
  }

  return ret;
}
