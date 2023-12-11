import * as React from 'react';
import { isArray } from 'ut2';
import ImageUploader, { ImageUploaderProps } from '../ImageUploader';
import BizFormItem, { BizFormItemProps } from './FormItem';
import { useConfig } from '../BizConfigProvider';

export interface BizFormItemImageUploaderProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      ImageUploaderProps,
      'upload' | 'comfirmDelete' | 'maxCount' | 'maxSize' | 'type' | 'multiple'
    > {
  imageUploaderProps?: Partial<ImageUploaderProps>;
  children?: React.ReactNode;
}

const BizFormItemImageUploader: React.FC<BizFormItemImageUploaderProps> = ({
  upload,
  comfirmDelete,
  maxCount,
  maxSize,
  type,
  multiple,
  imageUploaderProps,

  required,
  children,
  noStyle,
  ...restProps
}) => {
  const { locale } = useConfig();
  const realNoStyle = React.useMemo(
    () => (typeof noStyle !== 'undefined' ? noStyle : !!imageUploaderProps?.type || !!type),
    [imageUploaderProps?.type, noStyle, type]
  );

  return (
    <BizFormItem
      noStyle={realNoStyle}
      rules={[
        {
          validator(rule, value) {
            if (
              required &&
              ((isArray(value) && value.length <= 0) || typeof value === 'undefined')
            ) {
              return Promise.reject(locale.form.common.uploadRequired);
            }
            return Promise.resolve();
          }
        }
      ]}
      required={required}
      {...restProps}
    >
      <ImageUploader
        upload={upload}
        comfirmDelete={comfirmDelete}
        maxCount={maxCount}
        maxSize={maxSize}
        type={type}
        multiple={multiple}
        {...imageUploaderProps}
      >
        {children}
      </ImageUploader>
    </BizFormItem>
  );
};

export default BizFormItemImageUploader;
