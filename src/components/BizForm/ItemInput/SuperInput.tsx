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

export type { InputProps };

export interface SuperInputProps extends Omit<InputProps, 'type'> {
  type?: InputProps['type'] | 'mobile' | 'bankCard' | 'idCard' | 'number';
  disabledWhiteSpace?: boolean;
  precision?: number;
}

const SuperInput: React.FC<SuperInputProps> = ({
  type: outType,
  disabledWhiteSpace,
  onBlur,
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  precision,
  ...restProps
}) => {
  const ref = React.useRef<InputRef>(null);
  const [state, setState] = useControllableValue<string>(restProps);
  const needAdjustPos = React.useMemo(
    () =>
      outType === 'mobile' ||
      outType === 'bankCard' ||
      outType === 'idCard' ||
      outType === 'number' ||
      disabledWhiteSpace,
    [disabledWhiteSpace, outType]
  );
  const inputmode = React.useMemo(() => {
    if (outType === 'number') {
      return 'decimal';
    }
    return 'text';
  }, [outType]);
  const realType = React.useMemo(() => {
    if (
      outType === 'mobile' ||
      outType === 'bankCard' ||
      outType === 'idCard' ||
      outType === 'number'
    ) {
      return 'text';
    }
    return outType;
  }, [outType]);

  const normalize = React.useCallback(
    (val) => {
      let newValue = val;
      if (outType === 'mobile') {
        newValue = normalizeMobile(val);
      } else if (outType === 'bankCard') {
        newValue = normalizeBankCard(val);
      } else if (outType === 'idCard') {
        newValue = normalizeIdCard(val);
      } else if (outType === 'number') {
        newValue = normalizeNumber(val);
      } else if (disabledWhiteSpace) {
        newValue = normalizeNotWhiteSpace(val);
      }
      return newValue;
    },
    [disabledWhiteSpace, outType]
  );

  const handleChange = React.useCallback(
    (val: string) => {
      const prevPos = ref.current?.nativeElement?.selectionEnd;
      const nextCtrlValue = normalize(val);
      setState(nextCtrlValue);

      if (needAdjustPos) {
        const calcPosOpts: any = {};
        if (outType === 'bankCard') {
          calcPosOpts.type = 'bankCard';
        } else if (outType === 'mobile') {
          calcPosOpts.type = 'mobile';
        } else if (outType === 'idCard') {
          calcPosOpts.maskReg = /[^\dx]/gi;
          calcPosOpts.placeholderChars = [];
        } else if (outType === 'number') {
          calcPosOpts.maskReg = /[^\d\\.-]/g;
          calcPosOpts.placeholderChars = [];
        } else if (disabledWhiteSpace) {
          calcPosOpts.maskReg = /\s/g;
          calcPosOpts.placeholderChars = [];
        }

        const adjustPos = calculateCursorPosition(
          prevPos as number,
          state,
          val,
          nextCtrlValue,
          calcPosOpts
        );
        const inputElement = ref.current?.nativeElement;

        if (inputElement) {
          if (val !== nextCtrlValue) {
            setTimeout(() => {
              inputElement.selectionStart = inputElement.selectionEnd = adjustPos;
            });
          } else {
            inputElement.selectionStart = inputElement.selectionEnd = adjustPos;
          }
        }
      }
    },
    [normalize, setState, needAdjustPos, outType, disabledWhiteSpace, state]
  );

  // 处理最大最小值，以及精度
  const handelBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (outType === 'number' && state) {
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
    [outType, onBlur, state, max, min, precision, setState]
  );

  React.useEffect(() => {
    // 处理直接通过 form.setFieldsValue 或 initialValues
    if (state && needAdjustPos) {
      const newValue = normalize(state);
      if (newValue !== state) {
        handleChange(newValue);
      }
    }
  }, [handleChange, needAdjustPos, normalize, outType, state]);

  return (
    <Input
      inputMode={inputmode}
      ref={ref}
      {...restProps}
      type={realType}
      value={state}
      onChange={handleChange}
      onBlur={handelBlur}
    />
  );
};

export default SuperInput;
