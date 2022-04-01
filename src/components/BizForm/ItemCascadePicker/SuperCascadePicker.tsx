import * as React from 'react';
import { CascadePicker, Input } from 'antd-mobile';
import { CascadePickerProps, CascadePickerOption } from 'antd-mobile/es/components/cascade-picker';
import { PickerValue, PickerValueExtend } from 'antd-mobile/es/components/picker';
import { InputProps } from 'antd-mobile/es/components/input';
import transformKeys from '../utils/transformKeys';

export type { CascadePickerProps, PickerValue, PickerValueExtend };

type Option = Partial<Omit<CascadePickerOption, 'children'>> & { children?: Option[] } & Record<
    string,
    any
  >;

export interface SuperCascadePickerProps
  extends Pick<InputProps, 'placeholder'>,
    Omit<CascadePickerProps, 'options'> {
  options: Option[];
  renderCurrentValue?: (
    value: PickerValue[] | undefined,
    items: PickerValueExtend['items']
  ) => string | undefined;
  mapKeys?: { label?: string; value?: string; children?: string };
  separator?: string;
}

const SuperCascadePicker: React.FC<SuperCascadePickerProps> = ({
  placeholder = '请选择',
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
    return outOptions as CascadePickerProps['options'];
  }, [mapKeys, outOptions]);

  return (
    <CascadePicker value={value} options={options} {...restProps}>
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
    </CascadePicker>
  );
};

export default SuperCascadePicker;
