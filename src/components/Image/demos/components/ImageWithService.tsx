import * as React from 'react';
import { useAsync } from 'rc-hooks';
import { SpinLoading } from 'antd-mobile';
import { Image, ImageProps } from 'mobile-more';
import { filedownload } from '../services';
import { transformBase64 } from '../utils';

const LoadingView = (
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <SpinLoading color="primary" />
  </div>
);

interface ImageWithServiceProps extends Omit<ImageProps, 'src'> {
  fssid?: string;
}

const ImageWithService: React.FC<ImageWithServiceProps> = ({ fssid, ...restProps }) => {
  const { data, run, loading, error } = useAsync(
    () =>
      filedownload({ fssid } as { fssid: string }).then((res) => transformBase64(res.data.buffer)),
    {
      autoRun: false
    }
  );

  React.useEffect(() => {
    if (fssid) {
      run();
    }
  }, [fssid, run]);

  return (
    <Image
      src={data || ''}
      placeholder={LoadingView}
      fallback={!loading && error ? undefined : LoadingView}
      {...restProps}
    />
  );
};

export default ImageWithService;
