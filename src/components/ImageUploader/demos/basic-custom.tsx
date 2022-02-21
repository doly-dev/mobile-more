import * as React from 'react';
import { ImageUploader } from 'mobile-more';
import { waitTime } from 'util-helpers';

function Demo() {
  const cacheURL: string[] = []; // 组件卸载时 revokeObjectURL

  const upload = async (file: File) => {
    console.log(file);
    await waitTime();
    const url = URL.createObjectURL(file);
    cacheURL.push(url);
    return {
      url: URL.createObjectURL(file)
    };
  };

  React.useEffect(() => {
    return () => {
      const url = cacheURL.shift();
      while (url) {
        URL.revokeObjectURL(url);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
