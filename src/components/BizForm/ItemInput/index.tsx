import * as React from 'react';
import { isMobile, isBankCard, isIdCard } from 'util-helpers';
import { Eye, EyeSlash } from 'doly-icons';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';
import Input, { SuperInputProps, InputRef } from './SuperInput';

export type { InputRef };

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
      | 'format'
    > {
  inputProps?: SuperInputProps;

  // only type password
  visibilityToggle?: boolean; // 是否显示密码切换按钮
  iconRender?: (visibilityPassword: boolean) => React.ReactNode; // 自定义图标渲染
}

const BizFormItemInput = React.forwardRef<InputRef, BizFormItemInputProps>(
  (
    {
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
      required,
      transform: outTransform,
      format = true,
      ...restProps
    },
    ref
  ) => {
    const inputRef = React.useRef<InputRef>(null);
    const label = getLabel(restProps);
    const mergeType = React.useMemo(() => {
      return outType || inputProps?.type || 'text';
    }, [inputProps?.type, outType]);

    const hasSpecialType = React.useMemo(
      () =>
        mergeType === 'bankCard' ||
        mergeType === 'mobile' ||
        mergeType === 'idCard' ||
        mergeType === 'number',
      [mergeType]
    );

    // only type password
    const [visibilityPassword, setVisibilityPassword] = React.useState(false); // 密码是否可见
    const passwordVisibilityIcon = React.useMemo(() => {
      if (mergeType !== 'password' || !visibilityToggle) {
        return null;
      }
      let iconView: React.ReactNode;
      if (typeof iconRender === 'function') {
        iconView = iconRender(visibilityPassword);
      } else {
        iconView = visibilityPassword ? <Eye /> : <EyeSlash />;
      }
      return (
        <div
          style={{ color: 'var(--adm-color-weak, "#999")', cursor: 'pointer' }}
          onClick={() => {
            setVisibilityPassword((v) => !v);
            inputRef.current?.focus();
          }}
        >
          {iconView}
        </div>
      );
    }, [iconRender, mergeType, visibilityPassword, visibilityToggle]);

    const transform = React.useCallback(
      (value: string) => {
        if (typeof outTransform === 'function') {
          return outTransform(value);
        }
        if (format && (mergeType === 'bankCard' || mergeType === 'mobile') && value) {
          return value.replace(/\D/g, '');
        }
        return value;
      },
      [format, mergeType, outTransform]
    );
    const type = React.useMemo(() => {
      if (mergeType === 'password') {
        return !visibilityPassword ? 'password' : 'text';
      }
      return mergeType;
    }, [mergeType, visibilityPassword]);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    React.useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

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
        validateTrigger={hasSpecialType ? 'onBlur' : 'onChange'}
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
          suffix={passwordVisibilityIcon}
          {...inputProps}
          format={format}
          ref={inputRef}
          type={type}
        />
      </BizFormItem>
    );
  }
);

BizFormItemInput.displayName = 'BizFormItemInput';

export default BizFormItemInput;
