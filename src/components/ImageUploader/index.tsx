import * as React from 'react';
import classnames from 'classnames';
import { ImageUploader as ImageUploaderBase, Toast, Dialog } from 'antd-mobile';
import type { ImageUploaderProps as ImageUploaderBaseProps } from 'antd-mobile/es/components/image-uploader';
import type { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';
import UploadBackground, { UploadBackgroundProps } from './UploadBackground';
import UploadCustom, { UploadCustomProps } from './UploadCustom';
import checkFileType from './checkFileType';
import { prefixClass } from '../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-imageUploader`;

export type { ImageUploadItem, UploadCustomProps, UploadBackgroundProps };

export type ImageUploaderActionType = {
  // api 触发上传
  clickInput: () => void;
};

export interface ImageUploaderProps extends ImageUploaderBaseProps {
  type?: 'license' | 'idcardFront' | 'idcardBack';
  maxSize?: number;
  comfirmDelete?: boolean;
  actionRef?: React.MutableRefObject<ImageUploaderActionType | undefined>;
}

const ImageUploader: React.FC<ImageUploaderProps> & {
  UploadBackground: typeof UploadBackground;
  UploadCustom: typeof UploadCustom;
} = ({
  type,
  comfirmDelete = false,
  maxSize = 2, // 单位 MB
  beforeUpload,
  accept = 'image/*',
  onDelete,
  maxCount: outMaxCount,
  children,
  actionRef,
  ...restProps
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const maxCount = React.useMemo(
    () => (type ? outMaxCount || 1 : outMaxCount),
    [outMaxCount, type]
  );
  const bgview = React.useMemo(() => {
    return type ? <UploadBackground type={type} /> : null;
  }, [type]);

  const handleBeforeUpload = React.useCallback(
    (files: File[]) => {
      const ret = files.filter((file) => {
        // 校验文件大小
        if (file.size > maxSize * 1024 * 1024) {
          Toast.show(`请选择小于 ${maxSize}M 的图片`);
          return false;
        }

        // 校验文件类型
        const isSupportFileType = checkFileType(file, accept);
        if (!isSupportFileType) {
          Toast.show(`只支持上传 ${accept} 文件`);
          return false;
        }

        return true;
      });
      return typeof beforeUpload === 'function' ? beforeUpload(ret) : ret;
    },
    [accept, beforeUpload, maxSize]
  );

  const handleDelete = React.useCallback(
    (item) => {
      if (typeof onDelete === 'function') {
        return onDelete(item);
      }

      return comfirmDelete
        ? Dialog.confirm({
            content: '是否确认删除'
          })
        : true;
    },
    [comfirmDelete, onDelete]
  );

  React.useImperativeHandle(actionRef, () => ({
    clickInput() {
      if (wrapperRef.current) {
        const inputEl = wrapperRef.current.querySelector('input[type="file"]') as HTMLInputElement;
        inputEl?.click();
      }
    }
  }));

  return (
    <div
      className={classnames(prefixCls, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-only`]: maxCount === 1
      })}
      ref={wrapperRef}
    >
      <ImageUploaderBase
        accept={accept}
        beforeUpload={handleBeforeUpload}
        onDelete={handleDelete}
        maxCount={type ? 1 : maxCount}
        {...restProps}
      >
        {children || bgview}
      </ImageUploaderBase>
    </div>
  );
};

ImageUploader.UploadBackground = UploadBackground;
ImageUploader.UploadCustom = UploadCustom;

export default ImageUploader;