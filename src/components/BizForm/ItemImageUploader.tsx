import * as React from 'react';
import ImageUploader, { ImageUploaderProps } from '../ImageUploader';
import BizFormItem, { BizFormItemProps } from './FormItem';
import getLabel from './utils/getLabel';

export interface BizFormItemImageUploaderProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<
      ImageUploaderProps,
      'upload' | 'comfirmDelete' | 'maxCount' | 'maxSize' | 'type' | 'multiple'
    > {
  imageUploaderProps?: Partial<ImageUploaderProps>;
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
  const label = getLabel(restProps);
  const realNoStyle = React.useMemo(
    () => (typeof noStyle !== 'undefined' ? noStyle : !!type || !!imageUploaderProps?.type),
    [imageUploaderProps?.type, noStyle, type]
  );

  return (
    <BizFormItem
      noStyle={realNoStyle}
      rules={[
        {
          required,
          message: `请上传${label}`
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
