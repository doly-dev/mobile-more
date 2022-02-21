import * as React from 'react';
import { Grid } from 'antd-mobile';
import { ImageUploader, ImageUploadItem } from 'mobile-more';
import { waitTime } from 'util-helpers';

function Demo() {
  const [idcardFront, setIdcardFront] = React.useState<ImageUploadItem[]>();
  const [idcardBack, setIdcardBack] = React.useState<ImageUploadItem[]>();

  const upload = async (file: File) => {
    console.log(file);
    await waitTime();
    return {
      url: URL.createObjectURL(file)
    };
  };

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
