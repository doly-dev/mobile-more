import * as React from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  size?: 'small' | 'default';
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  tip?: React.ReactNode;
  extra?: React.ReactNode;
  contentStyle?: React.CSSProperties;
  contentClassName?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  tip,
  extra,
  size = 'default',
  contentStyle,
  contentClassName,
  className,
  children,
  ...restProps
}) => {
  return (
    <div
      className={classnames(styles.wrapper, { [styles.wrapperSmall]: size === 'small' }, className)}
      {...restProps}
    >
      <div className={styles.header}>
        <div className={styles.title}>
          {title}
          {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
        </div>
        {extra && <div className={styles.extra}>{extra}</div>}
      </div>
      {tip && <div className={styles.tip}>{tip}</div>}
      <div className={classnames(styles.content, contentClassName)} style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Card;
