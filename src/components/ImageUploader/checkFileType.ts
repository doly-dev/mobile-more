// 检查文件类型
export default function checkFileType(file: File, accept?: string) {
  if (!accept || !accept.trim() || accept === '*') {
    return true;
  }

  const types = accept.toLowerCase().split(/,(?:\s+)?/);
  let ret = false;
  types.some((type) => {
    // .doc .docx .jpg .png
    if (
      file.type === type ||
      (type.indexOf('.') === 0 &&
        file.name.toLowerCase().substring(file.name.length - type.length) === type)
    ) {
      ret = true;
    } else if (type.includes('/*') && file.type.includes('/')) {
      // image/* 匹配所有图片类型
      const match = type.match(/(.*)\/\*/);
      const fileParentType = file.type.split('/')[0];
      if (match && match[1] === fileParentType) {
        ret = true;
      }
    }
    return ret;
  });

  return ret;
}
