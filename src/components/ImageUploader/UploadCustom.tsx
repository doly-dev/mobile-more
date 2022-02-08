import * as React from 'react';
import { PlusLg } from 'doly-icons';
import classnames from 'classnames';
import { prefixClass } from '../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-uploadCustom`;

export interface UploadCustomProps {
  border?: 'dashed' | 'solid';
  style?: React.CSSProperties;
  className?: string;
}

const UploadCustom: React.FC<UploadCustomProps> = ({ border, style, className }) => {
  const borderStyle = React.useMemo(() => {
    if (!border) {
      return {};
    }
    return {
      border: `1px ${border} #d2d2d2`
    };
  }, [border]);

  return (
    <div style={{ ...borderStyle, ...style }} className={classnames(prefixCls, className)}>
      <PlusLg />
    </div>
  );
};

export default UploadCustom;
