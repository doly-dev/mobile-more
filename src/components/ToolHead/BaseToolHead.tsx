import * as React from 'react';
import classnames from 'classnames';
import { isArray, uniqueId } from 'ut2';
import { prefixClass } from '../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-tool-head`;

export interface BaseToolHeadProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode | React.ReactNode[];
  right?: React.ReactNode | React.ReactNode[];
  center?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLDivElement>;
}

const BaseToolHead = React.forwardRef<HTMLDivElement, BaseToolHeadProps>(
  ({ left, right, center, className, ...restProps }, ref) => {
    const generatorChilds = React.useCallback((childs: React.ReactNode | React.ReactNode[]) => {
      if (isArray(childs)) {
        return childs.map((item) => (
          <div
            className={`${prefixCls}-button`}
            key={(React.isValidElement(item) && item?.key) || uniqueId('__mm_baseToolHead_')}
          >
            {item}
          </div>
        ));
      }
      return childs ? <div className={`${prefixCls}-button`}>{childs}</div> : null;
    }, []);

    const leftChilds = React.useMemo(() => generatorChilds(left), [generatorChilds, left]);
    const rightChilds = React.useMemo(() => generatorChilds(right), [generatorChilds, right]);

    return (
      <div className={classnames(prefixCls, className)} ref={ref} {...restProps}>
        <div className={`${prefixCls}-left`}>{leftChilds}</div>
        <div className={`${prefixCls}-center`}>{center}</div>
        <div className={`${prefixCls}-right`}>{rightChilds}</div>
      </div>
    );
  }
);

BaseToolHead.displayName = 'BaseToolHead';

export default BaseToolHead;
