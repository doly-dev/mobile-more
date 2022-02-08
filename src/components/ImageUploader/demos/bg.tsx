import * as React from 'react';
import { ImageUploader } from 'mobile-more';

function Demo() {
  return (
    <div>
      <ImageUploader.UploadBackground />
      <br />
      <ImageUploader.UploadBackground
        type="idcardFront"
        borderAround={false}
        style={{ width: 150, height: 103 }}
      />
      <br />
      <ImageUploader.UploadBackground type="idcardBack" />
    </div>
  );
}

export default Demo;
