import * as React from 'react';
import classnames from 'classnames';
import { prefixClass } from '../../config/prefixClass';
import { StyleWithVariable } from '../../types';
import './index.less';

const prefixCls = `${prefixClass}-descriptions`;

export interface DescriptionsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  labelClassName?: string;
  contentStyle?: React.CSSProperties;
  contentClassName?: string;
}

const DescriptionsItem: React.FC<DescriptionsItemProps> = ({
  label,
  labelStyle,
  labelClassName,
  contentStyle,
  contentClassName,
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={classnames(`${prefixCls}-item`, className)} {...restProps}>
      <div className={classnames(`${prefixCls}-item-label`, labelClassName)} style={labelStyle}>
        {label}
      </div>
      <div
        className={classnames(`${prefixCls}-item-content`, contentClassName)}
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  );
};

export interface DescriptionsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'style'> {
  title?: React.ReactNode;
  colon?: boolean;
  style?: StyleWithVariable<
    | '--font-size'
    | '--color'
    | '--title-color'
    | '--padding-inner'
    | '--justify-content'
    | '--flex-direction'
    | '--label-color'
    | '--label-width'
    | '--label-text-align'
    | '--content-color'
    | '--content-text-align'
  >;
}

const Descriptions: React.FC<DescriptionsProps> & {
  Item: typeof DescriptionsItem;
} = ({ title, className, children, colon = true, ...restProps }) => {
  return (
    <div
      className={classnames(prefixCls, { [`${prefixCls}-colon`]: colon }, className)}
      {...restProps}
    >
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      {children}
    </div>
  );
};

Descriptions.Item = DescriptionsItem;

export default Descriptions;
