import * as React from 'react';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import AreaCodePicker, { AreaCodePickerProps } from './AreaCodePicker';
import getLabel from '../utils/getLabel';

const transform = (value: any) => {
  // console.log(value);
  if (Array.isArray(value) && value.length > 0) {
    // 可能是不设区地级市
    let realValue: string | undefined;
    let index = value.length - 1;
    while (index >= 0 && !realValue) {
      if (value[index]) {
        realValue = value[index] as string;
      } else {
        --index;
      }
    }
    return realValue;
  }
  return value;
};

export interface BizFormItemAreaCodeProps
  extends Omit<BizFormItemProps, 'children' | 'transform'>,
    Pick<
      AreaCodePickerProps,
      'placeholder' | 'title' | 'options' | 'mapKeys' | 'renderCurrentValue' | 'separator'
    > {
  readOnly?: boolean;
  areaCodeProps?: Partial<AreaCodePickerProps>;
}

const BizFormItemAreaCode: React.FC<BizFormItemAreaCodeProps> & {
  transform: (value: any) => any;
} = ({
  // input props
  placeholder = '请选择',

  // cascadePicker props
  title,
  options,
  mapKeys,
  renderCurrentValue,
  separator,
  areaCodeProps,

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
          validator(rule, value) {
            if (required && !value) {
              return Promise.reject(`请选择${label}`);
            }
            return Promise.resolve();
          },
          transform
        }
      ]}
      required={required}
      disabled={disabled}
      onClick={handleClick}
      {...restProps}
      trigger="onConfirm"
      validateTrigger="onConfirm"
      transform={transform}
    >
      <AreaCodePicker
        title={title}
        visible={visible}
        onClose={() => setVisible(false)}
        options={options}
        mapKeys={mapKeys}
        placeholder={placeholder}
        renderCurrentValue={renderCurrentValue}
        separator={separator}
        {...areaCodeProps}
      />
    </BizFormItem>
  );
};

BizFormItemAreaCode.transform = transform;

export default BizFormItemAreaCode;
