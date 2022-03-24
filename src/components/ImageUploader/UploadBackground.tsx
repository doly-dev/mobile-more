/// <reference path='../../typings.d.ts' />
// ref: https://github.com/umijs/father/issues/227#issuecomment-730857244

import * as React from 'react';
import classnames from 'classnames';
import Image from '../Image';
import IconIdcardFront from '../../assets/images/icon-idcard-front@2x.png';
import IconIdcardBack from '../../assets/images/icon-idcard-back@2x.png';
import IconPhoto from '../../assets/images/icon-photo@2x.png';
import IconLicense from '../../assets/images/icon-license@2x.png';
import { prefixClass } from '../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-upload-background`;

// 内置图标配置
const InternalIconConfig = {
  license: {
    src: IconLicense,
    width: 72,
    height: 81
  },
  idcardFront: {
    src: IconIdcardFront,
    width: 89,
    height: 57
  },
  idcardBack: {
    src: IconIdcardBack,
    width: 89,
    height: 57
  }
};

export interface UploadBackgroundProps {
  type?: 'license' | 'idcardFront' | 'idcardBack';
  borderAround?: boolean;
  icon?: React.ReactNode;
  camera?: boolean;
  bgColor?: string;
  style?: React.CSSProperties;
  className?: string;
}

const UploadBackground: React.FC<UploadBackgroundProps> = ({
  type = 'license',
  borderAround = true,
  icon = '',
  camera = true,
  bgColor = '#E8F1FC',
  className,
  style
}) => {
  const iconview = React.useMemo(
    () => icon || <Image {...InternalIconConfig[type]} />,
    [icon, type]
  );

  return (
    <div className={classnames(prefixCls, className)} style={{ background: bgColor, ...style }}>
      <div className={`${prefixCls}-inner`}>
        <div className={`${prefixCls}-icon`}>{iconview}</div>
        {camera && (
          <div className={`${prefixCls}-camera`}>
            <Image src={IconPhoto} />
          </div>
        )}
      </div>
      {borderAround && (
        <div className={`${prefixCls}-borderAround`}>
          <i className={classnames(`${prefixCls}-borderLine`, `${prefixCls}-borderTopLeft`)} />
          <i className={classnames(`${prefixCls}-borderLine`, `${prefixCls}-borderTopRight`)} />
          <i className={classnames(`${prefixCls}-borderLine`, `${prefixCls}-borderBottomLeft`)} />
          <i className={classnames(`${prefixCls}-borderLine`, `${prefixCls}-borderBottomRight`)} />
        </div>
      )}
    </div>
  );
};

export default UploadBackground;
