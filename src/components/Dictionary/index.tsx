import * as React from 'react';
import { CSSPropertiesWithVariable } from '../../types/css';

export interface DictionaryProps<ValueType = any> extends React.HTMLAttributes<HTMLSpanElement> {
  fieldNames?: {
    label?: string;
    value?: string;
  };
  valueEnum: {
    label?: React.ReactNode;
    value?: ValueType;
    style?: CSSPropertiesWithVariable;
    [key: string]: any;
  }[];
  value?: ValueType;
  defaultLabel?: React.ReactNode;
  stylePropName?: string;
  match?: (itemValue: ValueType, value: ValueType) => boolean;
}

const Dictionary: React.FC<DictionaryProps> = ({
  fieldNames,
  valueEnum,
  value,
  defaultLabel = '-',
  stylePropName = 'style',
  style,
  match,
  ...restProps
}) => {
  const { label: labelKey, value: valueKey } = React.useMemo(
    () => ({
      label: 'label',
      value: 'value',
      ...fieldNames
    }),
    [fieldNames]
  );

  const matchMethod = React.useCallback(
    (itemValue: any, value: any) => {
      return typeof match === 'function' ? match(itemValue, value) : itemValue === value;
    },
    [match]
  );

  const ret = React.useMemo(
    () => valueEnum.find((item) => matchMethod(item[valueKey], value)),
    [matchMethod, value, valueEnum, valueKey]
  );

  return (
    <span style={{ ...ret?.[stylePropName], ...style }} {...restProps}>
      {ret?.[labelKey] || defaultLabel}
    </span>
  );
};

export default Dictionary;
