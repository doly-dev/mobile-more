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
      initialValues={{
        image1: [
          {
            url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
          }
        ]
      }}
    >
      <h3>默认</h3>
      <BizFormItemImageUploader label="图片上传" name="image1" upload={mockUpload} />
      <h3>内置类型</h3>
      <h5>营业执照</h5>
      <BizFormItemImageUploader label="图片上传" name="image2" upload={mockUpload} type="license" />
      <h5>身份证</h5>
      <Grid columns={2} gap={15}>
        <Grid.Item>
          <BizFormItemImageUploader
            label="图片上传"
            name="image3"
            upload={mockUpload}
            type="idcardFront"
          />
        </Grid.Item>
        <Grid.Item>
          <BizFormItemImageUploader
            label="图片上传"
            name="image4"
            upload={mockUpload}
            type="idcardBack"
          />
        </Grid.Item>
      </Grid>
      <h3>自定义样式</h3>
      <BizFormItemImageUploader
        label="图片上传"
        name="image5"
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
