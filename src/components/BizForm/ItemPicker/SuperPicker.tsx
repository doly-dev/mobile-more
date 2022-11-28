import { Input, InputProps, Picker, PickerProps } from 'antd-mobile';
import * as React from 'react';
import {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
  PickerValueExtend
} from '../../../antd-mobile.interface';
import transformKeys from '../utils/transformKeys';

type SuperPickerColumnItem = Partial<PickerColumnItem> & Record<string, any>;

type SuperPickerColumn = (string | SuperPickerColumnItem)[];

export interface SuperPickerProps
  extends Pick<InputProps, 'placeholder'>,
    Omit<PickerProps, 'columns'> {
  columns: SuperPickerColumn[] | ((value?: PickerValue[]) => SuperPickerColumn[]);
  renderCurrentValue?: (
    value: PickerValue[] | undefined,
    items: PickerValueExtend['items']
  ) => string | undefined;
  mapKeys?: { label?: string; value?: string };
  separator?: string;
}

const SuperPicker: React.FC<SuperPickerProps> = ({
  placeholder = '请选择',
  renderCurrentValue,
  mapKeys,
  columns: outColumns = [],
  value,
  separator = ' - ',
  ...restProps
}) => {
  const realColumns = React.useMemo(
    () => (typeof outColumns === 'function' ? outColumns(value) : outColumns),
    [outColumns, value]
  );

  const columns = React.useMemo(() => {
    if (mapKeys) {
      return realColumns.map((item) => transformKeys(item, mapKeys));
    }
    return realColumns as PickerColumn[];
  }, [mapKeys, realColumns]);

  return (
    <Picker columns={columns} value={value} {...restProps}>
      {(items) => {
        const valueStr =
          typeof renderCurrentValue === 'function'
            ? renderCurrentValue(value, items)
            : items
                .filter((item) => !!item)
                .map((item) => item?.label)
                .join(separator);
        return <Input readOnly value={valueStr} placeholder={placeholder} />;
      }}
    </Picker>
  );
};

export default SuperPicker;
