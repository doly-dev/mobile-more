import * as React from 'react';
import { BizFormItemImageUploader, ImageUploader } from 'mobile-more';
import { Grid } from 'antd-mobile';
import DemoForm from './components/DemoForm';
import mockUpload from './services/mockUpload';
import './image-uploader.less';

function Demo() {
  return (
    <DemoForm
      className="demo-form-image-uploader"
      style={{ '--border-inner': '0 none' } as React.CSSProperties}
    >
      <h3>默认</h3>
      <BizFormItemImageUploader label="图片上传" name="images" upload={mockUpload} />
      <h3>内置类型</h3>
      <h5>营业执照</h5>
      <BizFormItemImageUploader
        label="图片上传"
        name="images2"
        upload={mockUpload}
        type="license"
      />
      <h5>身份证</h5>
      <Grid columns={2} gap={15}>
        <Grid.Item>
          <BizFormItemImageUploader
            label="图片上传"
            name="images3"
            upload={mockUpload}
            type="idcardFront"
          />
        </Grid.Item>
        <Grid.Item>
          <BizFormItemImageUploader
            label="图片上传"
            name="images4"
            upload={mockUpload}
            type="idcardBack"
          />
        </Grid.Item>
      </Grid>
      <h3>自定义样式</h3>
      <BizFormItemImageUploader
        label="图片上传"
        name="images5"
        upload={mockUpload}
        imageUploaderProps={{ style: { '--cell-size': '60px' } }}
        noStyle
      >
        <ImageUploader.UploadCustom border="dashed" style={{ background: '#fff' }} />
      </BizFormItemImageUploader>
    </DemoForm>
  );
}

export default Demo;
