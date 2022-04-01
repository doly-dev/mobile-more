import * as React from 'react';
import { Upload as IconUpload } from 'doly-icons';
import { Button, Space } from 'antd-mobile';
import { Upload } from 'mobile-more';
import IconScanCard from '../../BizForm/demos/images/icon-scan-card@3x.png';

function Demo() {
  const handleChange = (filelist: FileList | null) => {
    console.log(filelist);
  };

  return (
    <>
      <h3>按钮</h3>
      <Upload onChange={handleChange}>
        <Button>
          <Space>
            <IconUpload />
            <span>点击上传</span>
          </Space>
        </Button>
      </Upload>
      <h3>图标</h3>
      <Upload onChange={handleChange} accept="image/*">
        <img src={IconScanCard} alt="" width="24" height="24" />
      </Upload>
      <h3>文本</h3>
      <Upload onChange={handleChange}>点击上传</Upload>
    </>
  );
}

export default Demo;
