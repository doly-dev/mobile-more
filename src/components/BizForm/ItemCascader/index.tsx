import * as React from 'react';
import { isArray, uniqueId } from 'ut2';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import SuperCascader, { SuperCascaderProps } from './SuperCascader';
import { InvalidFormValue } from '../utils/transform';
import { useConfig } from '../../BizConfigProvider';

export interface BizFormItemCascaderProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      SuperCascaderProps,
      'placeholder' | 'title' | 'options' | 'mapKeys' | 'renderCurrentValue' | 'separator'
    > {
  readOnly?: boolean;
  cascaderProps?: Partial<SuperCascaderProps>;
  names?: string[];
}

const BizFormItemCascader: React.FC<BizFormItemCascaderProps> = (props) => {
  const { locale } = useConfig();
  const {
    // input props
    placeholder = locale.form.common.selectPlaceholder,

    // cascader props
    title,
    options,
    mapKeys,
    renderCurrentValue,
    separator,
    cascaderProps,
    names,

    // item props
    name,
    readOnly,
    disabled,
    onClick,
    required,
    transform: outTransform,
    ...restProps
  } = props;
  const [visible, setVisible] = React.useState(false);
  const currentName = React.useMemo(
    () => name || (isArray(names) && names.length > 0 ? uniqueId('__mm_itemCascader_') : name),
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

      if (isArray(names) && names.length > 0) {
        names.forEach((item, index) => {
          currentLevelValues[item] = isArray(value) && value.length > 0 ? value[index] : undefined;
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
            if (required && (!isArray(value) || value.length <= 0)) {
              return Promise.reject(locale.form.common.selectRequired);
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
      <SuperCascader
        title={title}
        visible={visible}
        onClose={() => setVisible(false)}
        options={options}
        mapKeys={mapKeys}
        placeholder={placeholder}
        renderCurrentValue={renderCurrentValue}
        separator={separator}
        {...cascaderProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemCascader;
