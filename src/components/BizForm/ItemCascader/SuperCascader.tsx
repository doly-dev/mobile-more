import { Cascader, CascaderProps, Input, InputProps } from 'antd-mobile';
import * as React from 'react';
import transformKeys from '../utils/transformKeys';

export type { CascaderProps };

type CascaderOption = CascaderProps['options'][0];
type CascaderValueExtend = Parameters<NonNullable<CascaderProps['onSelect']>>[1];

type Option = Partial<Omit<CascaderOption, 'children'>> & { children?: Option[] } & Record<
    string,
    any
  >;

export interface SuperCascaderProps
  extends Pick<InputProps, 'placeholder'>,
    Omit<CascaderProps, 'options'> {
  options: Option[];
  renderCurrentValue?: (
    value: CascaderProps['value'],
    items: CascaderValueExtend['items']
  ) => string | undefined;
  mapKeys?: { label?: string; value?: string; disabled?: string; children?: string };
  separator?: string;
}

const SuperCascader: React.FC<SuperCascaderProps> = ({
  placeholder,
  value,
  options: outOptions = [],
  mapKeys,
  renderCurrentValue,
  separator = '/',
  ...restProps
}) => {
  const options = React.useMemo(() => {
    if (mapKeys) {
      return transformKeys(outOptions, mapKeys);
    }
    return outOptions as unknown as CascaderOption[];
  }, [mapKeys, outOptions]);

  return (
    <Cascader value={value} options={options} {...restProps}>
      {(items) => {
        const valueStr =
          typeof renderCurrentValue === 'function'
            ? renderCurrentValue(value, items)
            : items
                .filter((item) => !!item)
                .map((item) => item?.label)
                .join(separator);
        return <Input value={valueStr} placeholder={placeholder} readOnly />;
      }}
    </Cascader>
  );
};

export default SuperCascader;
