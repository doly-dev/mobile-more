import { TextArea, TextAreaProps } from 'antd-mobile';
import * as React from 'react';
import BizFormItem, { BizFormItemProps } from './FormItem';
import { useConfig } from '../BizConfigProvider';

export interface BizFormItemTextAreaProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<TextAreaProps, 'placeholder' | 'autoSize' | 'rows' | 'maxLength' | 'showCount'> {
  textAreaProps?: TextAreaProps;
}

const BizFormItemTextArea: React.FC<BizFormItemTextAreaProps> = (props) => {
  const { locale } = useConfig();
  const {
    placeholder = locale.form.common.inputPlaceholder,
    autoSize,
    rows,
    maxLength,
    showCount,
    textAreaProps,

    required,
    ...restProps
  } = props;
  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: locale.form.common.inputRequired
        }
      ]}
      {...restProps}
    >
      <TextArea
        autoSize={autoSize}
        rows={rows}
        maxLength={maxLength}
        showCount={showCount}
        placeholder={placeholder}
        {...textAreaProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemTextArea;
