import * as React from 'react';
import { ImageUploader, ImageUploadItem } from 'mobile-more';
import waitTime from '../../../utils/waitTime';

function Demo() {
  const [fileList, setFileList] = React.useState<ImageUploadItem[]>();

  const upload = async (file: File) => {
    console.log(file);
    await waitTime();
    return {
      url: URL.createObjectURL(file)
    };
  };

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
