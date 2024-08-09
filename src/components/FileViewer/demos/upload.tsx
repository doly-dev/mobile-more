import { FileViewer, FileViewerFileType, ImageUploader } from 'mobile-more';
import React, { useRef } from 'react';
import { sleep } from 'ut2';
import { useSetState } from 'rc-hooks';
import TestPdf from './assets/test.pdf';
import TestZip from './assets/test.zip';
import { Toast } from 'antd-mobile';

function Demo() {
  const fileRef = useRef<FileViewerFileType>();
  const [state, setState] = useSetState({
    visibleFileViewer: false
  });

  const [fileList, setFileList] = React.useState<any[]>(
    [
      {
        url: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
        name: 'xxx.jpeg'
      },
      {
        url: TestPdf,
        name: 'xxx.pdf'
      },
      {
        url: TestZip,
        name: 'xxx.zip'
      }
    ].map((item) => ({
      ...item,
      thumbnailUrl: FileViewer.getFileThumbUrl(item)
    }))
  );

  const upload = async (file: File) => {
    console.log(file);
    await sleep();

    const uploadFile = FileViewer.transformUploadFile(file);

    return {
      ...uploadFile,
      thumbnailUrl:
        uploadFile.fileType === 'image' ? uploadFile.url : FileViewer.getFileThumbUrl(file)
    };
  };

  const supported = FileViewer.supports(fileRef.current);

  return (
    <div>
      <ImageUploader
        // accept=".doc,.docx,.xls,.xlsx,.pdf,.mp3,.mp4,image/*"
        accept="*"
        value={fileList}
        onChange={setFileList}
        upload={upload}
        onPreview={(i, item) => {
          fileRef.current = item;
          setState({ visibleFileViewer: true });
        }}
        preview={false}
        maxSize={20 * 1024 * 1024}
      />
      <FileViewer
        file={fileRef.current}
        visible={state.visibleFileViewer}
        onClose={() => setState({ visibleFileViewer: false })}
        unsupportedTipText="当前文件类型不支持在线预览，你可以下载后查看"
        modalProps={{
          closeOnMaskClick: supported,
          actions: !supported
            ? [
                {
                  key: 'download',
                  text: '点击下载',
                  primary: true,
                  onClick() {
                    console.log('点击下载', fileRef.current);
                    Toast.show('开始下载文件');
                    setState({ visibleFileViewer: false });
                  }
                },
                {
                  key: 'cancel',
                  text: '取消',
                  onClick() {
                    setState({ visibleFileViewer: false });
                  }
                }
              ]
            : []
        }}
      />
    </div>
  );
}

export default Demo;
