import * as React from 'react';
import { DotLoading } from 'antd-mobile';
import classnames from 'classnames';
import { prefixClass } from '../../config/prefixClass';
import { useConfig } from '../BizConfigProvider';
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

const ScrollLoadView: React.FC<ScrollLoadViewProps> = ({
  loading = false,
  error = false,
  done = false,
  showLoadingIcon = true,
  text,
  className,
  ...restProps
}) => {
  const { locale } = useConfig();
  const textObj = React.useMemo(
    () => ({
      ...locale.scrollLoadView,
      ...text
    }),
    [text, locale.scrollLoadView]
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
