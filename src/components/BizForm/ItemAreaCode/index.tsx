import * as React from 'react';
import { isArray } from 'ut2';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import AreaCodePicker, { AreaCodePickerProps } from './AreaCodePicker';
import { useConfig } from '../../BizConfigProvider';

const transform = (value: any) => {
  // console.log(value);
  if (isArray(value) && value.length > 0) {
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
} = (props) => {
  const { locale } = useConfig();
  const {
    // input props
    placeholder = locale.form.common.selectPlaceholder,

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
  } = props;
  const [visible, setVisible] = React.useState(false);

  const handleClick = (e: React.MouseEvent, widgetRef: React.MutableRefObject<any>) => {
    if (!disabled && !readOnly) {
      setVisible(true);
    }
    onClick?.(e, widgetRef);
  };

  return (
    <BizFormItem
      arrowIcon
      rules={[
        {
          required,
          message: locale.form.common.selectRequired
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
