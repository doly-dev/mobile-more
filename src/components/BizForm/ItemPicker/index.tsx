import * as React from 'react';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';
import SuperPicker, { SuperPickerProps } from './SuperPicker';

export interface BizFormItemPickerProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SuperPickerProps,
      'columns' | 'renderCurrentValue' | 'separator' | 'fieldNames' | 'title' | 'placeholder'
    > {
  readOnly?: boolean;
  pickerProps?: Partial<SuperPickerProps>;
}

const BizFormItemPicker: React.FC<BizFormItemPickerProps> = ({
  placeholder,
  fieldNames,
  renderCurrentValue,
  separator,
  columns = [],
  title,
  pickerProps,

  readOnly,
  required,
  disabled,
  onClick,
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
      rules={[
        {
          required,
          message: `请选择${label}`
        }
      ]}
      required={required}
      disabled={disabled}
      onClick={handleClick}
      {...restProps}
      trigger="onConfirm"
      validateTrigger="onConfirm"
    >
      <SuperPicker
        title={title}
        visible={visible}
        onClose={() => setVisible(false)}
        placeholder={placeholder}
        fieldNames={fieldNames}
        renderCurrentValue={renderCurrentValue}
        separator={separator}
        columns={columns}
        {...pickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemPicker;
