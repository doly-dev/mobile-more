import * as React from 'react';
import { DotLoading } from 'antd-mobile';
import classnames from 'classnames';
import { prefixClass } from '../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-scrollLoadView`;

type LoadStatus = 'default' | 'loading' | 'error' | 'done';

export interface ScrollLoadViewProps extends React.HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  error?: boolean;
  done?: boolean;
  text?: {
    default?: React.ReactNode;
    loading?: React.ReactNode;
    done?: React.ReactNode;
    error?: React.ReactNode;
  };
  showLoadingIcon?: boolean;
}

const InternalText = {
  default: '滚动底部加载更多',
  loading: '加载中',
  done: '全部加载完成',
  error: '加载失败'
};

const ScrollLoadView: React.FC<ScrollLoadViewProps> = ({
  loading = false,
  error = false,
  done = false,
  showLoadingIcon = true,
  text,
  className,
  ...restProps
}) => {
  const textObj = React.useMemo(
    () => ({
      ...InternalText,
      ...text
    }),
    [text]
  );

  const { view, status } = React.useMemo(() => {
    let view = textObj.default;
    let status: LoadStatus = 'default';

    if (loading) {
      status = 'loading';
      view = (
        <>
          {textObj.loading}
          {showLoadingIcon && <DotLoading />}
        </>
      );
    } else if (error) {
      status = 'error';
      view = textObj.error;
    } else if (done) {
      status = 'done';
      view = textObj.done;
    }
    return {
      view,
      status
    };
  }, [done, error, loading, showLoadingIcon, textObj]);

  return (
    <div className={classnames(prefixCls, `${prefixCls}-${status}`, className)} {...restProps}>
      {view}
    </div>
  );
};

export default ScrollLoadView;
