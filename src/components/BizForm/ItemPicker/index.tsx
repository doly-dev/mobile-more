import * as React from 'react';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';
import SuperPicker, { SuperPickerProps } from './SuperPicker';

export interface BizFormItemPickerProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SuperPickerProps,
      'columns' | 'renderCurrentValue' | 'separator' | 'mapKeys' | 'title' | 'placeholder'
    > {
  readOnly?: boolean;
  pickerProps?: Partial<SuperPickerProps>;
}

const BizFormItemPicker: React.FC<BizFormItemPickerProps> = ({
  placeholder,
  mapKeys,
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
        mapKeys={mapKeys}
        renderCurrentValue={renderCurrentValue}
        separator={separator}
        columns={columns}
        {...pickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemPicker;
