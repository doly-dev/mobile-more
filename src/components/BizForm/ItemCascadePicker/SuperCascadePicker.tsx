import * as React from 'react';
import { useControllableValue } from 'rc-hooks';
import { CascadePicker, Input } from 'antd-mobile';
import { CascadePickerProps, CascadePickerOption } from 'antd-mobile/es/components/cascade-picker';
import { PickerColumnItem } from 'antd-mobile/es/components/picker';
import { InputProps } from 'antd-mobile/es/components/input';
import omit from '../../../utils/omit';

export type { CascadePickerProps };

type Option = Partial<Omit<CascadePickerOption, 'children'>> & Record<string, any>;

type CascadePickerColumnItem = Partial<PickerColumnItem> & Record<string, any>;

type CascadePickerValueExtend = {
  columns: CascadePickerColumnItem[][];
  items: (CascadePickerColumnItem | null)[];
};

export interface SuperCascadePickerProps
  extends Pick<InputProps, 'placeholder'>,
    Omit<CascadePickerProps, 'options'> {
  options: Option[];
  renderCurrentValue?: (
    value: CascadePickerProps['value'],
    extend: CascadePickerValueExtend
  ) => string | undefined;
  fieldNames?: { label?: string; value?: string; children?: string };
}

const SuperCascadePicker: React.FC<SuperCascadePickerProps> = (props) => {
  const {
    placeholder = '请选择',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: outValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onConfirm: outOnConfirm,
    options: outOptions = [],
    fieldNames,
    renderCurrentValue,
    ...restProps
  } = props;
  const [value, onConfirm] = useControllableValue(props, {
    trigger: 'onConfirm'
  });

  const {
    label: labelKey,
    value: valueKey,
    children: childrenKey
  } = React.useMemo(
    () => ({
      label: 'label',
      value: 'value',
      children: 'children',
      ...fieldNames
    }),
    [fieldNames]
  );

  const options = React.useMemo(() => {
    if (!fieldNames) {
      return outOptions as CascadePickerProps['options'];
    }
    function recursion(data: typeof outOptions) {
      const ret: CascadePickerProps['options'] = [];
      data.forEach((item) => {
        const newItem: CascadePickerProps['options'][0] = {
          label: item[labelKey],
          value: item[valueKey]
        };

        if (Array.isArray(item[childrenKey]) && item[childrenKey].length > 0) {
          newItem.children = recursion(item[childrenKey]);
        }
        ret.push(newItem);
      });
      return ret;
    }
    return recursion(outOptions);
  }, [childrenKey, fieldNames, labelKey, outOptions, valueKey]);

  const columns = React.useMemo(() => {
    const ret: CascadePickerValueExtend['columns'] = [];
    const recursion = (data: Option[], index = 0) => {
      data.forEach((item) => {
        if (!ret[index]) {
          ret[index] = [];
        }
        ret[index].push(omit(item, [childrenKey]));
        if (Array.isArray(item[childrenKey]) && item[childrenKey].length > 0) {
          recursion(item[childrenKey], index + 1);
        }
      });
    };
    recursion(outOptions);
    return ret;
  }, [childrenKey, outOptions]);

  const valueView = React.useMemo(() => {
    let items: CascadePickerValueExtend['items'] = [];

    if (Array.isArray(value) && value.length > 0) {
      items = value.map((item, index) => {
        return (
          columns[index].find((colItem) => {
            return colItem?.[valueKey] === item;
          }) || null
        );
      });
    }

    if (typeof renderCurrentValue === 'function') {
      return renderCurrentValue(value, {
        columns,
        items
      });
    }
    return items
      .filter((item) => !!item)
      .map((item) => item?.[labelKey])
      .join('/');
  }, [columns, labelKey, renderCurrentValue, value, valueKey]);

  return (
    <>
      <Input value={valueView} placeholder={placeholder} readOnly />
      <CascadePicker value={value} options={options} onConfirm={onConfirm} {...restProps} />
    </>
  );
};

export default SuperCascadePicker;
