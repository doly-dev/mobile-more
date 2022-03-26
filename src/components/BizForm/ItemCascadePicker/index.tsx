import * as React from 'react';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import getLabel from '../utils/getLabel';
import SuperCascadePicker, {
  SuperCascadePickerProps,
  CascadePickerProps
} from './SuperCascadePicker';

export interface BizFormItemCascadePickerProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SuperCascadePickerProps,
      'placeholder' | 'title' | 'options' | 'fieldNames' | 'renderCurrentValue'
    > {
  readOnly?: boolean;
  cascadePickerProps?: Partial<CascadePickerProps>;
}

const BizFormItemCascadePicker: React.FC<BizFormItemCascadePickerProps> = ({
  // input props
  placeholder = '请选择',

  // cascadePicker props
  title,
  options,
  fieldNames,
  renderCurrentValue,
  cascadePickerProps,

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
      <SuperCascadePicker
        title={title}
        visible={visible}
        onClose={() => setVisible(false)}
        options={options}
        fieldNames={fieldNames}
        placeholder={placeholder}
        renderCurrentValue={renderCurrentValue}
        {...cascadePickerProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemCascadePicker;
