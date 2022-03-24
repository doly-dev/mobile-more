import * as React from 'react';
import { Input } from 'antd-mobile';
import { InputProps } from 'antd-mobile/es/components/input';
import CheckListPopup, { CheckListPopupProps } from '../../CheckListPopup';

export type { CheckListPopupProps };

export interface SuperCheckListProps extends Pick<InputProps, 'placeholder'>, CheckListPopupProps {
  renderCurrentValue?: (
    value: any,
    option?: Required<CheckListPopupProps>['options'][0]
  ) => string | undefined;
}

const SuperCheckList: React.FC<SuperCheckListProps> = ({
  placeholder = '请选择',

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

  const option = React.useMemo(() => {
    return options.find((item) => item[valueKey] === value);
  }, [options, value, valueKey]);
  const valueView =
    typeof renderCurrentValue === 'function'
      ? renderCurrentValue(value, option)
      : option?.[labelKey] || '';

  return (
    <>
      <Input readOnly value={valueView} placeholder={placeholder} />
      <CheckListPopup value={value} options={options} fieldNames={fieldNames} {...restProps} />
    </>
  );
};

export default SuperCheckList;
