import * as React from 'react';
import { Space, ImageViewer } from 'antd-mobile';
import { Image } from 'mobile-more';

function Demo() {
  const images = React.useMemo(
    () => [
      {
        src: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
        name: '身份证人像面'
      },
      {
        src: 'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80',
        name: '身份证国徽面'
      },
      {
        src: 'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=315&q=80',
        name: '营业执照'
      }
    ],
    []
  );

  const handlePreview = React.useCallback(
    (index: number) => {
      ImageViewer.Multi.show({
        images: images.map((item) => item.src),
        defaultIndex: index
      });
    },
    [images]
  );

  return (
    <Space wrap>
      {images.map((imgItem, index) => (
        <Image
          {...imgItem}
          key={imgItem.name + index}
          width={72}
          height={72}
          fit="cover"
          border="dashed"
          onClick={() => handlePreview(index)}
        />
      ))}
    </Space>
  );
}

export default Demo;
