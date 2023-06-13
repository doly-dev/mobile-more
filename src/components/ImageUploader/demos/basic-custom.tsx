import * as React from 'react';
import { ImageUploader } from 'mobile-more';
import { sleep } from 'ut2';

function Demo() {
  const cacheURLRef = React.useRef<string[]>([]); // 组件卸载时 revokeObjectURL

  const upload = async (file: File) => {
    console.log(file);
    await sleep();
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
      <ImageUploader upload={upload}>
        <ImageUploader.UploadCustom />
      </ImageUploader>
      <br />
      <ImageUploader upload={upload}>
        <ImageUploader.UploadCustom border="solid" />
      </ImageUploader>
      <br />
      <ImageUploader upload={upload}>
        <ImageUploader.UploadCustom border="dashed" />
      </ImageUploader>
      <br />
      <ImageUploader upload={upload}>
        <ImageUploader.UploadCustom border="dashed" style={{ background: '#fff' }} />
      </ImageUploader>
      <h4>不同大小</h4>
      <ImageUploader upload={upload} style={{ '--cell-size': '60px' }}>
        <ImageUploader.UploadCustom border="dashed" style={{ background: '#fff' }} />
      </ImageUploader>
    </>
  );
}

export default Demo;
