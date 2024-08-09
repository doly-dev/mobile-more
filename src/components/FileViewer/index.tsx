import React from 'react';
import BaseFileViewer, { FileViewerProps } from './FileViewer';
import { FileType, getFileThumbUrl, supports, transformUploadFile } from './utils';

function FileViewer(props: FileViewerProps) {
  return <BaseFileViewer {...props} />;
}

FileViewer.getFileThumbUrl = getFileThumbUrl;
FileViewer.transformUploadFile = transformUploadFile;
FileViewer.supports = supports;

export type FileViewerFileType = FileType;

export default FileViewer;
