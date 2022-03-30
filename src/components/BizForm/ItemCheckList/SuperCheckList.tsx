import * as React from 'react';
import { Input } from 'antd-mobile';
import { InputProps } from 'antd-mobile/es/components/input';
import CheckListPopup, { CheckListPopupProps } from '../../CheckListPopup';

export type { CheckListPopupProps };

export interface SuperCheckListProps extends Pick<InputProps, 'placeholder'>, CheckListPopupProps {
  separator?: string;
  renderCurrentValue?: (
    value: string[] | undefined,
    items: Required<CheckListPopupProps>['options']
  ) => string | undefined;
}

const SuperCheckList: React.FC<SuperCheckListProps> = ({
  placeholder = '请选择',
  separator = ', ',

  options = [],
  value,
  fieldNames,
  renderCurrentValue,
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

  const items = React.useMemo(() => {
    return options.filter((item) => value?.includes(item[valueKey]));
  }, [options, value, valueKey]);

  const valueStr =
    typeof renderCurrentValue === 'function'
      ? renderCurrentValue(value, items)
      : items
          .filter((item) => !!item)
          .map((item) => item[labelKey])
          .join(separator);

  return (
    <>
      <Input readOnly value={valueStr} placeholder={placeholder} />
      <CheckListPopup value={value} options={options} fieldNames={fieldNames} {...restProps} />
    </>
  );
};

export default SuperCheckList;
