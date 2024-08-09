import React, { useRef, useState } from 'react';
import { ImageUploadItem, Space } from 'antd-mobile';
import { Image, FileViewer } from 'mobile-more';
import TestAudio from './assets/test.mp3';
import TestVideo from './assets/test.mp4';
import TestPdf from './assets/test.pdf';
import TestWord from './assets/test.docx';
import TestExcel from './assets/test.xlsx';
import TestZip from './assets/test.zip';

function Demo() {
  const fileRef = useRef<ImageUploadItem>();
  const [visibleFileViewer, setVisibleFileViewer] = useState(false);
  const data = [
    {
      url: 'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80',
      type: 'image/jpeg'
    },
    {
      url: TestAudio,
      name: 'test.mp3'
    },
    {
      url: TestVideo,
      name: 'test.mp4'
    },
    {
      url: TestPdf,
      name: 'test.pdf'
    },
    {
      url: TestWord,
      name: 'test.docx'
    },
    {
      url: TestExcel,
      name: 'test.xlsx'
    },
    {
      url: TestZip,
      name: 'test.zip'
    }
  ];

  return (
    <div>
      <Space wrap>
        {data.map((item) => (
          <Image
            key={item.url}
            src={FileViewer.getFileThumbUrl(item)}
            width={80}
            height={80}
            onClick={() => {
              fileRef.current = item;
              setVisibleFileViewer(true);
            }}
          />
        ))}
      </Space>
      <FileViewer
        file={fileRef.current}
        visible={visibleFileViewer}
        onClose={() => setVisibleFileViewer(false)}
      />
    </div>
  );
}

export default Demo;
