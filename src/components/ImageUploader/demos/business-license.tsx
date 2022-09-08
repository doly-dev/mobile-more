import * as React from 'react';
import { ImageUploader, ImageUploadItem } from 'mobile-more';
import { waitTime } from 'util-helpers';

function Demo() {
  const [fileList, setFileList] = React.useState<ImageUploadItem[]>();

  const cacheURL: string[] = []; // 组件卸载时 revokeObjectURL

  const upload = async (file: File) => {
    console.log(file);
    await waitTime();
    const url = URL.createObjectURL(file);
    cacheURL.push(url);
    return {
      url
    };
  };

  React.useEffect(() => {
    return () => {
      cacheURL.forEach((itemUrl) => {
        URL.revokeObjectURL(itemUrl);
      });
      cacheURL.length = 0;
    };
  }, []);

  return (
    <ImageUploader
      value={fileList}
      onChange={setFileList}
      maxSize={10}
      upload={upload}
      type="license"
      comfirmDelete
    />
  );
}

export default Demo;
