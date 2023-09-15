import { Image as ImageBase, ImageProps as ImageBaseProps, ImageViewer } from 'antd-mobile';
import classnames from 'classnames';
import * as React from 'react';
import { prefixClass } from '../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-image`;

export interface ImageProps extends ImageBaseProps {
  border?: 'dashed' | 'solid';
  name?: React.ReactNode;
  preview?: boolean;
  previewUrl?: string;
  nameWrap?: boolean;
  rootClassName?: string;
  rootStyle?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({
  border,
  name,
  className,
  rootClassName,
  rootStyle,
  width,
  src,
  preview,
  previewUrl,
  onClick,
  nameWrap = false,
  ...restProps
}) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLImageElement, Event>) => {
      onClick?.(e);

      if (preview && (previewUrl || src)) {
        ImageViewer.show({
          image: previewUrl || src
        });
      }
    },
    [onClick, preview, previewUrl, src]
  );

  return (
    <div className={classnames(prefixCls, rootClassName)} style={rootStyle}>
      <ImageBase
        className={classnames(className, {
          [`${prefixCls}-border-dashed`]: border === 'dashed',
          [`${prefixCls}-border-solid`]: border === 'solid'
        })}
        src={src}
        width={width}
        onClick={handleClick}
        {...restProps}
      />
      {name && (
        <div
          className={classnames(`${prefixCls}-name`, { [`${prefixCls}-name-wrap`]: nameWrap })}
          style={{ width }}
        >
          {name}
        </div>
      )}
    </div>
  );
};

export default Image;
