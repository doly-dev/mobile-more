import * as React from 'react';
import uniqueId from 'lodash/uniqueId';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';
import { InvalidFormValue } from '../utils/transform';
import SuperPicker, { SuperPickerProps } from './SuperPicker';

export interface BizFormItemPickerProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SuperPickerProps,
      'columns' | 'renderCurrentValue' | 'separator' | 'mapKeys' | 'title' | 'placeholder'
    > {
  readOnly?: boolean;
  pickerProps?: Partial<SuperPickerProps>;
  names?: string[];
}

const BizFormItemPicker: React.FC<BizFormItemPickerProps> = ({
  placeholder,
  mapKeys,
  renderCurrentValue,
  separator,
  columns = [],
  title,
  pickerProps,
  names,

  // item props
  name,
  readOnly,
  required,
  disabled,
  onClick,
  transform: outTransform,
  ...restProps
}) => {
  const label = getLabel(restProps);
  const [visible, setVisible] = React.useState(false);
  const currentName = React.useMemo(
    () => name || (Array.isArray(names) && names.length > 0 ? uniqueId('cascaderPicker') : name),
    [name, names]
  );

  const handleClick = React.useCallback(
    (e: React.MouseEvent, widgetRef: React.MutableRefObject<any>) => {
      if (!disabled && !readOnly) {
        setVisible(true);
      }
      onClick?.(e, widgetRef);
    },
    [disabled, onClick, readOnly]
  );
  const transform = React.useCallback(
    (value: string[], currentLevelValues: any) => {
      if (typeof outTransform === 'function') {
        return outTransform(value);
      }

      if (Array.isArray(names) && names.length > 0) {
        names.forEach((item, index) => {
          currentLevelValues[item] =
            Array.isArray(value) && value.length > 0 ? value[index] : undefined;
        });
        return InvalidFormValue;
      }
      return value;
    },
    [names, outTransform]
  );

  return (
    <BizFormItem
      arrow
      name={currentName}
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
      transform={transform}
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