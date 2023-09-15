import * as React from 'react';
import classnames from 'classnames';
import { ChevronRight } from 'doly-icons';
import IconNotice from './IconNotice';
import styles from './index.module.less';

export interface NoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: React.ReactNode;
  status?: 'default' | 'warning' | 'info' | 'error';
  showChangeText?: boolean;
  changeText?: string;
  onClickChangeText?: () => void;
}

const Notice: React.FC<NoticeProps> = ({
  className,
  status = 'default',
  text,
  showChangeText = true,
  changeText = '立即修改',
  onClickChangeText,
  ...restProps
}) => {
  if (!text) {
    return null;
  }

  return (
    <div className={classnames(styles.wrapper, styles[status], className)} {...restProps}>
      <div className={styles.icon}>
        <IconNotice />
      </div>
      <div className={styles.text}>
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
