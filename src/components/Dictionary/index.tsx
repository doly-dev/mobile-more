import * as React from 'react';

export interface DictionaryProps<ValueType = any> {
  valueEnum: {
    label?: React.ReactNode;
    value?: ValueType;
    props?: Record<string, any>;
    [key: string]: any;
  }[];
  value: ValueType;
  defaultLabel?: React.ReactNode;
  fieldNames?: {
    label?: string;
    value?: string;
    props?: string;
  };
  match?: (itemValue: ValueType, value: ValueType) => boolean;
  component?: keyof HTMLElement | Parameters<typeof React.cloneElement>[0] | null;
  [key: string]: any;
}

const Dictionary: React.FC<DictionaryProps> = ({
  fieldNames,
  valueEnum,
  value,
  defaultLabel = '-',
  match,
  component = 'span',
  ...restProps
}) => {
  const {
    label: labelKey,
    value: valueKey,
    props: propsKey
  } = React.useMemo(
    () => ({
      label: 'label',
      value: 'value',
      props: 'props',
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

  const props = {
    ...ret?.[propsKey],
    ...restProps
  };

  const child = ret?.[labelKey] || defaultLabel;

  // html标签
  if (typeof component === 'string') {
    return React.createElement(component, props, child);
  }

  // 自定义组件
  if (component) {
    return React.cloneElement(component, props, child);
  }

  return child;
};

export default Dictionary;
