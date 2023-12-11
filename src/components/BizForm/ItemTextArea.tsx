import { TextArea, TextAreaProps } from 'antd-mobile';
import * as React from 'react';
import BizFormItem, { BizFormItemProps } from './FormItem';

export interface BizFormItemTextAreaProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<TextAreaProps, 'placeholder' | 'autoSize' | 'rows' | 'maxLength' | 'showCount'> {
  textAreaProps?: TextAreaProps;
}

const BizFormItemTextArea: React.FC<BizFormItemTextAreaProps> = ({
  placeholder = '请输入',
  autoSize,
  rows,
  maxLength,
  showCount,
  textAreaProps,

  required,
  ...restProps
}) => {
  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: '请输入${label}'
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
