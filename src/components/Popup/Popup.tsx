import { Popup as BasePopup, PopupProps as BasePopupProps } from 'antd-mobile';
import classnames from 'classnames';
import { useControllableValue } from 'rc-hooks';
import * as React from 'react';
import { prefixClass } from '../../config/prefixClass';
import ToolHead, { CloseToolHeadProps } from '../ToolHead';
import './index.less';

const prefixCls = `${prefixClass}-popup`;

export interface PopupProps extends BasePopupProps {
  header?: React.ReactNode;
  headerStyle?: React.CSSProperties;
  headerClassName?: string;
  headerProps?: CloseToolHeadProps;
  contentStyle?: React.CSSProperties;
  contentClassName?: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  closable?: boolean; // 显示右上角关闭图标
  maskClosable?: boolean; // 点击蒙层是否关闭
  onVisibleChange?: (visible: boolean) => void;
  trigger?: React.ReactElement;
}

const Popup: React.FC<PopupProps> = (props) => {
  const {
    title,
    extra,
    header,
    headerStyle,
    headerClassName,
    headerProps,
    contentStyle,
    contentClassName,
    closable = true,
    maskClosable = true,
    onMaskClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible: outVisible,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onVisibleChange,
    children,
    trigger,
    className,
    ...restProps
  } = props;
  const [visible, changeVisible] = useControllableValue<boolean>(props, {
    valuePropName: 'visible',
    trigger: 'onVisibleChange'
  });
  const handleMaskClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (maskClosable) {
        changeVisible(false);
      }
      onMaskClick?.(e);
    },
    [maskClosable, onMaskClick, changeVisible]
  );

  const handleClickClose = React.useCallback(() => {
    changeVisible(false);
  }, [changeVisible]);

  return (
    <>
      {trigger &&
        React.cloneElement(trigger, {
          ...trigger.props,
          onClick: (e: React.MouseEvent) => {
            changeVisible(true);
            trigger.props?.onClick?.(e);
          }
        })}
      <BasePopup
        visible={visible}
        onMaskClick={handleMaskClick}
        className={classnames(prefixCls, className)}
        {...restProps}
      >
        {typeof header !== 'undefined' ? (
          header
        ) : (
          <ToolHead.CloseToolHead
            style={headerStyle}
            className={headerClassName}
            title={title}
            showCloseIcon={closable}
            onClickCloseIcon={handleClickClose}
            {...headerProps}
          />
        )}
        {extra}
        <div className={classnames(`${prefixCls}-content`, contentClassName)} style={contentStyle}>
          {children}
        </div>
      </BasePopup>
    </>
  );
};

export default Popup;
