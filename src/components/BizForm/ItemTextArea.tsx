import * as React from 'react';
import { TextArea } from 'antd-mobile';
import { TextAreaProps } from 'antd-mobile/es/components/text-area';
import BizFormItem, { BizFormItemProps } from './FormItem';
import getLabel from './utils/getLabel';

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
  const label = getLabel(restProps);

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: `请输入${label}`
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
