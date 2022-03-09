import * as React from 'react';
import BaseToolHead, { BaseToolHeadProps } from './BaseToolHead';
import CloseToolHead, { CloseToolHeadProps } from './CloseToolHead';
import ConfirmToolHead, { ConfirmToolHeadProps } from './ConfirmToolHead';

export type ToolHeadProps = BaseToolHeadProps;

export type { CloseToolHeadProps, ConfirmToolHeadProps };

const ToolHead: React.FC<BaseToolHeadProps> & {
  CloseToolHead: typeof CloseToolHead;
  ConfirmToolHead: typeof ConfirmToolHead;
} = (props) => {
  return <BaseToolHead {...props} />;
};

ToolHead.CloseToolHead = CloseToolHead;
ToolHead.ConfirmToolHead = ConfirmToolHead;

export default ToolHead;
