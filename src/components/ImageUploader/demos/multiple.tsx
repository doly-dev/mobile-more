import * as React from 'react';
import { ImageUploader, ImageUploadItem } from 'mobile-more';
import { waitTime } from 'util-helpers';

function Demo() {
  const [fileList, setFileList] = React.useState<ImageUploadItem[]>();

  const cacheURLRef = React.useRef<string[]>([]); // 组件卸载时 revokeObjectURL

  const upload = async (file: File) => {
    console.log(file);
    await waitTime();
    const url = URL.createObjectURL(file);
    cacheURLRef.current.push(url);
    return {
      url
    };
  };

  React.useEffect(() => {
    const cacheURL = cacheURLRef.current;
    return () => {
      cacheURL.forEach((itemUrl) => {
        URL.revokeObjectURL(itemUrl);
      });
      cacheURL.length = 0;
    };
  }, []);

  return (
    <ImageUploader value={fileList} onChange={setFileList} upload={upload} maxCount={9} multiple />
  );
}

export default Demo;
