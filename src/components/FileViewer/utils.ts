import { isFile, isString, uniqueId } from 'ut2';
import { getFileType } from 'util-helpers';
import { ImageUploadItem } from 'antd-mobile';
import IconAudio from './images/icon-audio.png';
import IconExcel from './images/icon-excel.png';
import IconFile from './images/icon-file.png';
import IconPdf from './images/icon-pdf.png';
import IconWord from './images/icon-word.png';
import IconVideo from './images/icon-video.png';

// 获取 url 的文件名
function getUrlFileName(url: string) {
  if (!isString(url) || !url || url.indexOf('blob:') === 0) {
    return '';
  }
  const divider = url.indexOf('\\') > -1 ? '\\' : '/';
  const pathArr = url.split(divider);
  return pathArr[pathArr.length - 1] || '';
}

type ImageUploadItemExtend = ImageUploadItem & { [k: string]: any };
export type FileType = string | ImageUploadItemExtend | File;

function wrapperUploadFile(file?: string | ImageUploadItemExtend) {
  const fileObj = isString(file) ? { url: file } : file;
  return {
    uid: uniqueId(),
    name: fileObj?.url ? getUrlFileName(fileObj.url) : '',
    url: '',
    ...fileObj
  };
}

type UploadFileType = ReturnType<typeof wrapperUploadFile>;

export function transformUploadFile(file?: FileType) {
  const isOriginFile = isFile(file);
  const baseFileInfo = wrapperUploadFile(isOriginFile ? undefined : file);

  const originFileInfo = isOriginFile
    ? {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
        originFileObj: file
      }
    : undefined;

  const fileObj = {
    ...baseFileInfo,
    ...originFileInfo
  };

  const fileType = getFileType(fileObj);

  if (fileObj.originFileObj && !fileObj.url) {
    fileObj.url = URL.createObjectURL(fileObj.originFileObj);
  }

  return {
    ...fileObj,
    fileType
  };
}

// 获取文件缩略图
export function getFileThumbUrl(file?: FileType) {
  const isOriginFile = isFile(file);
  const fileObj = isOriginFile ? file : wrapperUploadFile(file);
  const fileType = getFileType(fileObj);

  if (!isOriginFile && (fileObj as UploadFileType).thumbnailUrl) {
    return (fileObj as UploadFileType).thumbnailUrl;
  }

  switch (fileType) {
    case 'image':
      return isOriginFile ? URL.createObjectURL(file) : (fileObj as UploadFileType).url || IconFile;
    case 'audio':
      return IconAudio;
    case 'video':
      return IconVideo;
    case 'pdf':
      return IconPdf;
    case 'word':
      return IconWord;
    case 'excel':
      return IconExcel;
    default:
      return IconFile;
  }
}

const suppportedFileType = ['image', 'audio', 'video', 'pdf'];

// 是否支持预览
export function supports(file?: FileType) {
  const fileObj = isFile(file) ? file : wrapperUploadFile(file);
  const fileType = getFileType(fileObj);
  return !!fileType && suppportedFileType.includes(fileType);
}
