import * as React from 'react';
import classnames from 'classnames';
import { XLg } from 'doly-icons';
import BaseToolHead, { BaseToolHeadProps } from './BaseToolHead';
import { prefixClass } from '../../config/prefixClass';

const prefixCls = `${prefixClass}-tool-head-close`;

export interface CloseToolHeadProps extends Omit<BaseToolHeadProps, 'center' | 'title'> {
  title?: React.ReactNode;
  showCloseIcon?: boolean;
  closeIcon?: React.ReactNode;
  onClickCloseIcon?: () => void;
  closePlacement?: 'left' | 'right';
}

const CloseToolHead: React.FC<CloseToolHeadProps> = ({
  title,
  showCloseIcon = true,
  closeIcon,
  onClickCloseIcon,
  closePlacement = 'right',
  className,
  ...restProps
}) => {
  const closeProps = {
    [closePlacement]: showCloseIcon && (
      <div onClick={onClickCloseIcon} className={`${prefixCls}-icon`}>
        {closeIcon || <XLg />}
      </div>
    )
  };

  return (
    <BaseToolHead
      className={classnames(prefixCls, className)}
      center={title}
      {...closeProps}
      {...restProps}
    />
  );
};

export default CloseToolHead;
