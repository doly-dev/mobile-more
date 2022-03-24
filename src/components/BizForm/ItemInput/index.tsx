import * as React from 'react';
import { isMobile, isBankCard, isIdCard } from 'util-helpers';
import { Eye, EyeSlash } from 'doly-icons';
import classnames from 'classnames';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';
import Input, { InputProps, SuperInputProps } from './SuperInput';
import { prefixClass } from '../../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-form-item-input`;

export interface BizFormItemInputProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SuperInputProps,
      | 'clearable'
      | 'placeholder'
      | 'type'
      | 'maxLength'
      | 'max'
      | 'min'
      | 'precision'
      | 'disabledWhiteSpace'
    > {
  inputProps?: InputProps;

  // only type password
  visibilityToggle?: boolean; // 是否显示密码切换按钮
  iconRender?: (visibilityPassword: boolean) => React.ReactNode; // 自定义图标渲染
}

const BizFormItemInput: React.FC<BizFormItemInputProps> = ({
  type: outType,
  maxLength,
  max,
  min,
  disabledWhiteSpace,
  precision,
  clearable,
  placeholder = '请输入',
  inputProps,
  visibilityToggle = true,
  iconRender,
  extra: outExtra,
  className,
  required,
  ...restProps
}) => {
  const label = getLabel(restProps);
  const mergeType = React.useMemo(() => {
    return outType || inputProps?.type || 'text';
  }, [inputProps?.type, outType]);

  // only type password
  const [visibilityPassword, setVisibilityPassword] = React.useState(false); // 密码是否可见
  const extraIcon = React.useMemo(() => {
    if (mergeType !== 'password' || !visibilityToggle) {
      return null;
    }
    if (typeof iconRender === 'function') {
      return iconRender(visibilityPassword);
    }
    return visibilityPassword ? <Eye /> : <EyeSlash />;
  }, [iconRender, mergeType, visibilityPassword, visibilityToggle]);
  const extra = React.useMemo(() => {
    if (mergeType === 'password' && visibilityToggle) {
      return (
        <div className={`${prefixCls}-extra`}>
          <div
            className={`${prefixCls}-extra-icon`}
            onClick={() => setVisibilityPassword((v) => !v)}
          >
            {extraIcon}
          </div>
          <div className={`${prefixCls}-extra-icon`}>{outExtra}</div>
        </div>
      );
    }
    return outExtra;
  }, [extraIcon, outExtra, mergeType, visibilityToggle]);

  const transform = React.useCallback(
    (value: string) => {
      if ((mergeType === 'bankCard' || mergeType === 'mobile') && value) {
        return value.replace(/\D/g, '');
      }
      return value;
    },
    [mergeType]
  );
  const type = React.useMemo(() => {
    if (mergeType === 'password') {
      return !visibilityPassword ? 'password' : 'text';
    }
    return mergeType;
  }, [mergeType, visibilityPassword]);

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: `请输入${label}`
        },
        {
          validator(_, value) {
            let errMsg = '';
            if (value) {
              if (
                (outType === 'mobile' && !isMobile(value)) ||
                (outType === 'bankCard' && !isBankCard(value, { loose: true })) ||
                (outType === 'idCard' && !isIdCard(value))
              ) {
                errMsg = `请输入正确的${label}`;
              }
            }

            if (errMsg) {
              return Promise.reject(errMsg);
            }

            return Promise.resolve();
          },
          transform
        }
      ]}
      transform={transform}
      extra={extra}
      className={classnames(prefixCls, className)}
      {...restProps}
    >
      <Input
        placeholder={placeholder}
        clearable={clearable}
        disabledWhiteSpace={disabledWhiteSpace}
        precision={precision}
        maxLength={maxLength}
        max={max}
        min={min}
        {...inputProps}
        type={type}
      />
    </BizFormItem>
  );
};

export default BizFormItemInput;
