import React from 'react';
import { FileViewer } from 'mobile-more';
import { Button } from 'antd-mobile';
import { useSetState } from 'rc-hooks';

function Demo() {
  const [state, setState] = useSetState({
    visibleFile1: false,
    visibleFile2: false
  });

  return (
    <div>
      <Button onClick={() => setState({ visibleFile1: true })}>预览图片-UploadFile</Button>
      <Button onClick={() => setState({ visibleFile2: true })}>预览图片-url</Button>
      <FileViewer
        file={{
          uid: '-1',
          url: 'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80',
          name: 'xxx.jpg'
        }}
        visible={state.visibleFile1}
        onClose={() => setState({ visibleFile1: false })}
      />
      <FileViewer
        file="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        visible={state.visibleFile2}
        onClose={() => setState({ visibleFile2: false })}
      />
    </div>
  );
}

export default Demo;
