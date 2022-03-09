import * as React from 'react';
import classnames from 'classnames';
import BaseToolHead, { BaseToolHeadProps } from './BaseToolHead';
import { prefixClass } from '../../config/prefixClass';

const prefixCls = `${prefixClass}-tool-head-confirm`;

export interface ConfirmToolHeadProps
  extends Omit<BaseToolHeadProps, 'left' | 'right' | 'center' | 'title'> {
  title?: React.ReactNode;
  cancelText?: React.ReactNode;
  confirmText?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ConfirmToolHead: React.FC<ConfirmToolHeadProps> = ({
  title,
  cancelText = '取消',
  confirmText = '确认',
  onConfirm,
  onCancel,
  className,
  ...restProps
}) => {
  return (
    <BaseToolHead
      className={classnames(prefixCls, className)}
      {...restProps}
      center={title}
      left={
        cancelText && (
          <a className={`${prefixCls}-action`} onClick={onCancel}>
            {cancelText}
          </a>
        )
      }
      right={
        confirmText && (
          <a className={`${prefixCls}-action`} onClick={onConfirm}>
            {confirmText}
          </a>
        )
      }
    />
  );
};

export default ConfirmToolHead;
