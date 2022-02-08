import * as React from 'react';
import { ImageUploader, ImageUploadItem, ImageUploaderActionType } from 'mobile-more';
import waitTime from '../../../utils/waitTime';

function Demo() {
  const actionRef = React.useRef<ImageUploaderActionType>();
  const [fileList, setFileList] = React.useState<ImageUploadItem[]>();

  const upload = async (file: File) => {
    console.log(file);
    await waitTime();
    return {
      url: URL.createObjectURL(file)
    };
  };

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
