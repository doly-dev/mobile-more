import * as React from 'react';
import { omit } from 'ut2';
import SuperCascadePicker, {
  SuperCascadePickerProps,
  CascadePickerProps
} from '../ItemCascadePicker/SuperCascadePicker';
import transformKeys from '../utils/transformKeys';
import parseAreaCode from './parseAreaCode';

export type AreaCodePickerProps = SuperCascadePickerProps;

const AreaCodePicker: React.FC<AreaCodePickerProps> = ({
  value,
  mapKeys,
  options: outOptions = [],
  ...restProps
}) => {
  const options = React.useMemo(() => {
    if (mapKeys) {
      return transformKeys(outOptions, mapKeys);
    }
    return outOptions as CascadePickerProps['options'];
  }, [mapKeys, outOptions]);

  const data = React.useMemo(() => {
    const ret: Omit<CascadePickerProps['options'][0], 'children'>[] = [];

    function recursion(opts: typeof options, index = 0) {
      opts.forEach((item) => {
        const currItem = omit(item, 'children');
        ret.push(currItem);

        if (Array.isArray(item?.children) && item.children.length > 0) {
          recursion(item.children, index + 1);
        }
      });
    }
    recursion(options);
    return ret;
  }, [options]);

  const realValue = React.useMemo(() => {
    if (typeof value === 'string') {
      return parseAreaCode(value, data).map((item) => item?.value || null);
    }
    return value;
  }, [data, value]);

  return <SuperCascadePicker value={realValue} options={options} {...restProps} />;
};

export default AreaCodePicker;
