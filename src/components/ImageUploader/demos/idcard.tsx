import * as React from 'react';
import { Grid } from 'antd-mobile';
import { ImageUploader, ImageUploadItem } from 'mobile-more';
import { sleep } from 'ut2';

function Demo() {
  const [idcardFront, setIdcardFront] = React.useState<ImageUploadItem[]>();
  const [idcardBack, setIdcardBack] = React.useState<ImageUploadItem[]>();

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
    <Grid columns={2} gap={15}>
      <Grid.Item>
        <ImageUploader
          upload={upload}
          maxSize={10}
          value={idcardFront}
          onChange={setIdcardFront}
          type="idcardFront"
        />
      </Grid.Item>
      <Grid.Item>
        <ImageUploader
          upload={upload}
          maxSize={10}
          value={idcardBack}
          onChange={setIdcardBack}
          type="idcardBack"
        />
      </Grid.Item>
    </Grid>
  );
}

export default Demo;
