import * as React from 'react';
import { Grid, ImageViewer } from 'antd-mobile';
import { Image } from 'mobile-more';

function Demo() {
  const images = React.useMemo(
    () => [
      {
        src: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
        name: '法人身份证人像面'
      },
      {
        src: 'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80',
        name: '法人身份证国徽面'
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
    <Grid columns={2} gap={30}>
      {images.map((imgItem, index) => (
        <Grid.Item key={imgItem.name + index}>
          <Image
            height={100}
            fit="cover"
            border="dashed"
            {...imgItem}
            onClick={() => handlePreview(index)}
          />
        </Grid.Item>
      ))}
    </Grid>
  );
}

export default Demo;
