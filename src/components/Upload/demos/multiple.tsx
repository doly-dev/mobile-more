import * as React from 'react';
import { Upload as IconUpload } from 'doly-icons';
import { Button, Space } from 'antd-mobile';
import { Upload } from 'mobile-more';

function Demo() {
  const handleChange = (filelist: FileList | null) => {
    console.log(filelist);
  };

  return (
    <Upload onChange={handleChange} multiple>
      <Button color="primary">
        <Space>
          <IconUpload />
          <span>点击上传</span>
        </Space>
      </Button>
    </Upload>
  );
}

export default Demo;
