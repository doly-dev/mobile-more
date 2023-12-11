import {
  Dialog,
  ImageUploader as ImageUploaderBase,
  ImageUploaderProps as ImageUploaderBaseProps,
  ImageUploadItem,
  Toast
} from 'antd-mobile';
import classnames from 'classnames';
import * as React from 'react';
import { XCircleFill } from 'doly-icons';
import { prefixClass } from '../../config/prefixClass';
import checkFileType from './checkFileType';
import './index.less';
import UploadBackground, { UploadBackgroundProps } from './UploadBackground';
import UploadCustom, { UploadCustomProps } from './UploadCustom';
import { useConfig } from '../BizConfigProvider';

const prefixCls = `${prefixClass}-image-uploader`;

export type { ImageUploadItem, UploadCustomProps, UploadBackgroundProps };

export type ImageUploaderActionType = {
  // api 触发上传
  clickInput: () => void;
};

export interface ImageUploaderProps extends ImageUploaderBaseProps {
  type?: 'license' | 'idcardFront' | 'idcardBack';
  deleteStyle?: 'default' | 'circle';
  maxSize?: number;
  comfirmDelete?: boolean;
  actionRef?: React.MutableRefObject<ImageUploaderActionType | undefined>;
}

const ImageUploader: React.FC<ImageUploaderProps> & {
  UploadBackground: typeof UploadBackground;
  UploadCustom: typeof UploadCustom;
} = ({
  type,
  deleteStyle = 'circle',
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
  const { locale } = useConfig();
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const maxCount = React.useMemo(() => (type ? 1 : outMaxCount), [outMaxCount, type]);
  const bgview = React.useMemo(() => {
    return type ? <UploadBackground type={type} /> : null;
  }, [type]);

  const handleBeforeUpload = React.useCallback(
    (file: File, files: File[]) => {
      // 校验文件大小
      if (file.size > maxSize * 1024 * 1024) {
        Toast.show(locale.form.upload.fileSizeMessage.replace(/%s/g, maxSize + ''));
        return null;
      }

      // 校验文件类型
      const isSupportFileType = checkFileType(file, accept);
      if (!isSupportFileType) {
        Toast.show(locale.form.upload.fileTypeMessage.replace(/%s/g, accept));
        return null;
      }

      return typeof beforeUpload === 'function' ? beforeUpload?.(file, files) : file;
    },
    [accept, beforeUpload, maxSize]
  );

  const handleDelete = React.useCallback(
    (item: ImageUploadItem) => {
      if (typeof onDelete === 'function') {
        return onDelete(item);
      }

      return comfirmDelete
        ? Dialog.confirm({
            content: locale.form.upload.deleteTiptext
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
        [`${prefixCls}-block`]: !!type,
        [`${prefixCls}-delete-circle`]: deleteStyle === 'circle'
      })}
      ref={wrapperRef}
    >
      <ImageUploaderBase
        accept={accept}
        beforeUpload={handleBeforeUpload}
        onDelete={handleDelete}
        maxCount={maxCount}
        deleteIcon={deleteStyle === 'circle' ? <XCircleFill /> : undefined}
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
