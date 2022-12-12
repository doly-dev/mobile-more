import * as React from 'react';
import { ImageUploader, ImageUploadItem, ImageUploaderActionType } from 'mobile-more';
import { waitTime } from 'util-helpers';

function Demo() {
  const actionRef = React.useRef<ImageUploaderActionType>();
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
    <>
      <button onClick={() => actionRef.current?.clickInput()}>点我触发上传</button>
      <br />
      <br />
      <ImageUploader
        value={fileList}
        onChange={setFileList}
        maxSize={10}
        maxCount={3}
        upload={upload}
        comfirmDelete
        actionRef={actionRef}
      />
    </>
  );
}

export default Demo;
