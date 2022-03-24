import * as React from 'react';
import { useControllableValue } from 'rc-hooks';
import { CascadePicker, Input } from 'antd-mobile';
import { CascadePickerProps } from 'antd-mobile/es/components/cascade-picker';
import { InputProps } from 'antd-mobile/es/components/input';
import omit from '../../../utils/omit';

export type { CascadePickerProps };

type Option = Partial<Omit<CascadePickerProps['options'][0], 'children'>> &
  Record<string, any> & {
    children?: Option[];
  };

export interface SuperCascadePickerProps
  extends Pick<InputProps, 'placeholder'>,
    Omit<CascadePickerProps, 'options'> {
  options: Option[];
  renderCurrentValue?: (
    value: CascadePickerProps['value'],
    flatOptions: (Omit<Option, 'children'> | null)[]
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

  const flatOptions = React.useMemo(() => {
    const ret: Omit<SuperCascadePickerProps['options'][0], 'children'>[] = [];
    function recusion(data: SuperCascadePickerProps['options']) {
      data.forEach((item) => {
        ret.push(omit(item, [childrenKey]));
        if (Array.isArray(item[childrenKey]) && item[childrenKey].length > 0) {
          recusion(item[childrenKey]);
        }
      });
    }
    recusion(outOptions);
    return ret;
  }, [childrenKey, outOptions]);

  const valueFlatOptions = React.useMemo(() => {
    const ret: (typeof flatOptions[0] | null)[] = [];
    if (Array.isArray(value) && value.length > 0) {
      value.forEach((item) => {
        if (!item) {
          ret.push(null);
        } else {
          const currOption = flatOptions.find((itemOption) => itemOption[valueKey] === item);
          if (currOption) {
            ret.push(currOption);
          } else {
            ret.push(null);
          }
        }
      });
    }
    return ret;
  }, [flatOptions, value, valueKey]);

  const valueView = React.useMemo(() => {
    return typeof renderCurrentValue === 'function'
      ? renderCurrentValue(value, valueFlatOptions)
      : valueFlatOptions
          .filter((item) => !!item)
          .map((item) => item?.[labelKey])
          .join('/');
  }, [labelKey, renderCurrentValue, value, valueFlatOptions]);

  return (
    <>
      <Input value={valueView} placeholder={placeholder} readOnly />
      <CascadePicker value={value} options={options} onConfirm={onConfirm} {...restProps} />
    </>
  );
};

export default SuperCascadePicker;
