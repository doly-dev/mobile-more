import { Form, FormItemProps } from 'antd-mobile';
import classnames from 'classnames';
import * as React from 'react';
import { formItemPrefixCls } from './config';
import FormArrayContext from './FormArrayContext';
import FormContext, { FormContextValue } from './FormContext';
import './FormItem.less';

export interface BizFormItemProps<ValueType = any> extends FormItemProps {
  extendRules?: FormItemProps['rules'];
  transform?: (value: ValueType, currentLevelValues?: any) => any;
  justify?: FormContextValue['justify'];
}

const BizFormItem: React.FC<BizFormItemProps> = ({
  name,
  transform,
  extendRules = [],
  justify,
  rules = [],
  className,
  ...restProps
}) => {
  const { setFieldTransform, justify: parentJustify } = React.useContext(FormContext);
  const { parentListNames } = React.useContext(FormArrayContext);
  const realJustify = React.useMemo(
    () => justify || parentJustify || 'start',
    [justify, parentJustify]
  );

  React.useEffect(() => {
    if (name && typeof transform === 'function') {
      setFieldTransform(name, transform, parentListNames);
    }
  }, [name, parentListNames, setFieldTransform, transform]);

  return (
    <Form.Item
      name={name}
      rules={[...rules, ...extendRules]}
      className={classnames(formItemPrefixCls, `${formItemPrefixCls}-${realJustify}`, className)}
      {...restProps}
    />
  );
};

export default BizFormItem;
