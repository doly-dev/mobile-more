import * as React from 'react';
import classnames from 'classnames';
import { Form } from 'antd-mobile';
import { FormItemProps } from 'antd-mobile/es/components/form';
import FormContext, { FormContextValue } from './FormContext';
import FormArrayContext from './FormArrayContext';
import { formItemPrefixCls } from './config';
import './FormItem.less';

// TODO: 新增 ItemStepper,ItemSwich,ItemRadio,ItemCheckbox

export interface BizFormItemProps<ValueType = any> extends FormItemProps {
  extendRules?: FormItemProps['rules'];
  transform?: (value: ValueType) => any;
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
