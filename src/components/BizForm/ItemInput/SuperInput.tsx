import * as React from 'react';
import { calculateCursorPosition } from 'util-helpers';
import { useControllableValue } from 'rc-hooks';
import { Input } from 'antd-mobile';
import { InputProps, InputRef } from 'antd-mobile/es/components/input';
import {
  normalizeIdCard,
  normalizeBankCard,
  normalizeMobile,
  normalizeNotWhiteSpace,
  normalizeNumber
} from '../utils/normalize';
import { prefixClass } from '../../../config/prefixClass';
import './SuperInput.less';

const prefixCls = `${prefixClass}-input`;

export type { InputProps, InputRef };

export interface SuperInputProps extends Omit<InputProps, 'type'> {
  type?: InputProps['type'] | 'mobile' | 'bankCard' | 'idCard' | 'number';
  disabledWhiteSpace?: boolean;
  precision?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const SuperInput = React.forwardRef<InputRef, SuperInputProps>(
  (
    {
      type,
      disabledWhiteSpace,
      prefix,
      suffix,
      onBlur,
      max = Number.MAX_SAFE_INTEGER,
      min = Number.MIN_SAFE_INTEGER,
      precision,
      inputMode,
      ...restProps
    },
    ref
  ) => {
    const internalRef = React.useRef<InputRef>(null);
    const [state, setState] = useControllableValue<string>(restProps);
    const needAdjustPos = React.useMemo(
      () =>
        type === 'mobile' ||
        type === 'bankCard' ||
        type === 'idCard' ||
        type === 'number' ||
        disabledWhiteSpace,
      [disabledWhiteSpace, type]
    );
    const realType = React.useMemo(() => {
      if (type === 'mobile' || type === 'bankCard' || type === 'idCard' || type === 'number') {
        return 'text';
      }
      return type;
    }, [type]);
    const realInputMode = React.useMemo(() => {
      if (!inputMode && type === 'number') {
        return 'decimal';
      }
      return inputMode;
    }, [type, inputMode]);

    const calcPosOpts = React.useMemo(() => {
      const ret: Record<string, any> = {};
      if (type === 'bankCard') {
        ret.type = 'bankCard';
      } else if (type === 'mobile') {
        ret.type = 'mobile';
      } else if (type === 'idCard') {
        ret.maskReg = /[^\dx]/gi;
        ret.placeholderChars = [];
      } else if (type === 'number') {
        ret.maskReg = /[^\d\\.-]/g;
        ret.placeholderChars = [];
      } else if (disabledWhiteSpace) {
        ret.maskReg = /\s/g;
        ret.placeholderChars = [];
      }
      return ret;
    }, [type, disabledWhiteSpace]);

    const normalize = React.useCallback(
      (val: string) => {
        let newValue = val;
        if (type === 'mobile') {
          newValue = normalizeMobile(val);
        } else if (type === 'bankCard') {
          newValue = normalizeBankCard(val);
        } else if (type === 'idCard') {
          newValue = normalizeIdCard(val);
        } else if (type === 'number') {
          newValue = normalizeNumber(val);
        } else if (disabledWhiteSpace) {
          newValue = normalizeNotWhiteSpace(val);
        }
        return newValue;
      },
      [disabledWhiteSpace, type]
    );

    const handleChange = React.useCallback(
      (val: string) => {
        const inputElement = internalRef.current?.nativeElement;
        const prevPos = internalRef.current?.nativeElement?.selectionEnd;
        const nextCtrlValue = normalize(val);
        setState(nextCtrlValue);

        if (inputElement && needAdjustPos) {
          const adjustPos = calculateCursorPosition(
            prevPos as number,
            state,
            val,
            nextCtrlValue,
            calcPosOpts
          );

          if (inputElement) {
            if (val !== nextCtrlValue) {
              window.setTimeout(() => {
                inputElement.selectionStart = inputElement.selectionEnd = adjustPos;
              });
            } else {
              inputElement.selectionStart = inputElement.selectionEnd = adjustPos;
            }
          }
        }
      },
      [normalize, setState, needAdjustPos, state, calcPosOpts]
    );

    // 处理最大最小值，以及精度
    const handelBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (type === 'number' && state) {
          let numberValue = Number(state);
          if (numberValue > max) {
            numberValue = max;
          } else if (numberValue < min) {
            numberValue = min;
          }
          const newValue =
            typeof precision === 'number' && precision >= 0
              ? numberValue.toFixed(precision)
              : String(numberValue);
          if (newValue !== state) {
            setState(newValue);
          }
        }
        onBlur?.(e);
      },
      [type, onBlur, state, max, min, precision, setState]
    );

    const triggerFocus = React.useCallback(() => {
      const inputEl = internalRef.current?.nativeElement;

      if (inputEl) {
        const startPos = inputEl.selectionStart;
        const endPos = inputEl.selectionEnd;
        inputEl.focus();
        window.setTimeout(() => {
          inputEl.setSelectionRange(startPos, endPos);
        });
      }
    }, []);

    React.useImperativeHandle(
      ref,
      () => ({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...internalRef.current!,
        focus: triggerFocus
      }),
      [internalRef, triggerFocus]
    );

    React.useEffect(() => {
      // 处理直接通过 form.setFieldsValue 或 initialValues
      if (state && needAdjustPos) {
        const newValue = normalize(state);
        if (newValue !== state) {
          handleChange(newValue);
        }
      }
    }, [handleChange, needAdjustPos, normalize, type, state]);

    return (
      <div className={`${prefixCls}`}>
        {prefix && <div className={`${prefixCls}-prefix`}>{prefix}</div>}
        <Input
          inputMode={realInputMode}
          ref={internalRef}
          {...restProps}
          type={realType}
          value={state}
          onChange={handleChange}
          onBlur={handelBlur}
        />
        {suffix && <div className={`${prefixCls}-suffix`}>{suffix}</div>}
      </div>
    );
  }
);

SuperInput.displayName = 'SuperInput';

export default SuperInput;
