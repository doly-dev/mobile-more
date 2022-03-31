import * as React from 'react';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';
import SuperCheckList, { SuperCheckListProps, CheckListPopupProps } from './SuperCheckList';

export interface BizFormItemCheckListProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SuperCheckListProps,
      | 'placeholder'
      | 'checkListProps'
      | 'searchBarProps'
      | 'emptyProps'
      | 'title'
      | 'options'
      | 'fieldNames'
      | 'loading'
      | 'renderCurrentValue'
      | 'multiple'
      | 'radioMode'
      | 'separator'
    > {
  options: SuperCheckListProps['options'];
  readOnly?: boolean;
  checkListPopupProps?: Partial<CheckListPopupProps>;
}

const BizFormItemCheckList: React.FC<BizFormItemCheckListProps> = ({
  // input props
  placeholder,

  // checklistpopup props
  title,
  loading,
  options,
  fieldNames,
  checkListProps,
  searchBarProps,
  emptyProps,
  checkListPopupProps,
  renderCurrentValue,
  multiple,
  radioMode,
  separator,

  // item props
  readOnly,
  disabled,
  onClick,
  required,
  ...restProps
}) => {
  const label = getLabel(restProps);
  const [visible, setVisible] = React.useState(false);

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (!disabled && !readOnly) {
        setVisible(true);
      }
      onClick?.(e);
    },
    [disabled, onClick, readOnly]
  );

  return (
    <BizFormItem
      arrow
      onClick={handleClick}
      disabled={disabled}
      required={required}
      rules={[
        {
          validator(rule, value) {
            if (required) {
              if ((Array.isArray(value) && value.length <= 0) || typeof value === 'undefined') {
                return Promise.reject(`请选择${label}`);
              }
            }
            return Promise.resolve();
          }
        }
      ]}
      {...restProps}
    >
      <SuperCheckList
        title={title}
        visible={visible}
        onVisibleChange={setVisible}
        loading={loading}
        options={options}
        fieldNames={fieldNames}
        renderCurrentValue={renderCurrentValue}
        checkListProps={checkListProps}
        searchBarProps={searchBarProps}
        emptyProps={emptyProps}
        placeholder={placeholder}
        multiple={multiple}
        radioMode={radioMode}
        separator={separator}
        {...checkListPopupProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemCheckList;
