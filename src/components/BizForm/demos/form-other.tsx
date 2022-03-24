import * as React from 'react';
import { Button, Toast, Card } from 'antd-mobile';
import { BizForm, ImageUploader, BizFormItemImageUploader } from 'mobile-more';
import mockUpload from './services/mockUpload';

function Demo() {
  return (
    <BizForm
      name="form-other"
      layout="horizontal"
      requiredMarkStyle="text-optional"
      hasFeedback={false}
      onFinish={(values) => {
        console.log(values);
      }}
      onFinishFailed={(errInfo) => {
        Toast.show(errInfo.errorFields[0].errors[0]);
      }}
      footer={
        <Button block color="primary" type="submit">
          提交
        </Button>
      }
      style={{
        '--border-top': '0 none',
        '--border-bottom': '0 none'
      }}
    >
      <BizFormItemImageUploader
        name={['otherInfo', 'accOpen']}
        label="开户资质"
        upload={mockUpload}
        maxCount={1}
        required
        imageUploaderProps={{ style: { '--cell-size': '72px' } }}
        help="只能上传一张"
      >
        <ImageUploader.UploadCustom border="dashed" style={{ background: '#fff' }} />
      </BizFormItemImageUploader>
      <Card title="其他资质(自定义)">
        <BizFormItemImageUploader
          name={['otherInfo', 'addition']}
          label="其他资质"
          upload={mockUpload}
          multiple
          required
          maxCount={20}
          imageUploaderProps={{ style: { '--cell-size': '72px' } }}
          noStyle
        >
          <ImageUploader.UploadCustom border="dashed" style={{ background: '#fff' }} />
        </BizFormItemImageUploader>
      </Card>
    </BizForm>
  );
}

export default Demo;
