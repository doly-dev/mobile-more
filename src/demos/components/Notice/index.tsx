import * as React from 'react';
import classnames from 'classnames';
import { ChevronRight } from 'doly-icons';
import IconNotice from './IconNotice';
import styles from './index.module.less';

const ColorConfig = {
  default: {
    background: '#FEFCEC',
    color: '#ff7000'
  },
  warning: {
    background: '#FEFCEC',
    color: '#ff7000'
  },
  info: {
    background: '#d0e4ff',
    color: '#1677ff'
  },
  error: {
    background: '#FEECEC',
    color: '#f00'
  }
};

export interface NoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: React.ReactNode;
  color?: 'warning' | 'info' | 'error';
  showChangeText?: boolean;
  changeText?: string;
  onClickChangeText?: () => void;
}

const Notice: React.FC<NoticeProps> = ({
  className,
  style,
  text,
  color = 'warning',
  showChangeText = true,
  changeText = '立即修改',
  onClickChangeText,
  ...restProps
}) => {
  if (!text) {
    return null;
  }

  return (
    <div
      className={classnames(styles.wrapper, className)}
      style={{ ...ColorConfig[color], ...style }}
      {...restProps}
    >
      <div className={styles.icon}>
        <IconNotice />
      </div>
      <div className={styles.text} style={color === 'info' ? { color: '#333' } : {}}>
        {text}{' '}
        {showChangeText && (
          <a onClick={onClickChangeText}>
            {changeText}
            <ChevronRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default Notice;
