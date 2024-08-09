import { ImageViewer, ImageViewerProps, Modal, ModalProps } from 'antd-mobile';
import React, { CSSProperties, ReactNode, useMemo } from 'react';
import MediaViewer from './MediaViewer';
import { FileType, transformUploadFile } from './utils';
import { useConfig } from '../BizConfigProvider';

export interface FileViewerProps
  extends Pick<ModalProps, 'afterClose' | 'getContainer' | 'onClose' | 'visible'> {
  file?: FileType;
  renderView?: (dom: ReactNode, props: FileViewerProps) => ReactNode; // 自定义渲染视图
  imageViewerProps?: Omit<ImageViewerProps, 'image'>;
  modalProps?: ModalProps;
  showName?: boolean; // 显示文件名
  unsupportedTipText?: ReactNode; // 不支持预览
}

const FileViewer: React.FC<FileViewerProps> = (props) => {
  const { locale } = useConfig();
  const {
    file,
    renderView,
    imageViewerProps,
    modalProps,
    showName = true,
    unsupportedTipText = locale.fileViewer.unsupportedTipText,
    ...restProps
  } = props;
  const fileInfo = useMemo(() => transformUploadFile(file), [file]);

  if (fileInfo.fileType === 'image') {
    return <ImageViewer {...imageViewerProps} {...restProps} image={fileInfo.url} />;
  }

  let view: ReactNode;
  const title = showName && fileInfo.name;

  if (fileInfo.fileType === 'pdf') {
    const verticalPadding = 40 + (title ? 33 : 0) + 'px';
    view = (
      <div
        style={{
          width: window.innerWidth - 48,
          maxWidth: 768,
          height: `calc(70vh - ${verticalPadding})`
        }}
      >
        <iframe
          src={fileInfo.url + '#toolbar=0'}
          style={{ border: '0 none', width: '100%', height: '100%' }}
        />
      </div>
    );
  } else if (fileInfo.fileType === 'audio' || fileInfo.fileType === 'video') {
    view = <MediaViewer url={fileInfo.url!} mediaType={fileInfo.fileType} />;
  } else {
    view = unsupportedTipText;
  }

  if (typeof renderView === 'function') {
    view = renderView(view, props);
  }

  return (
    <Modal
      title={title}
      content={view}
      closeOnMaskClick
      destroyOnClose
      {...modalProps}
      {...restProps}
      style={{ '--max-width': '100vw', ...modalProps?.style } as CSSProperties}
    />
  );
};

export default FileViewer;
