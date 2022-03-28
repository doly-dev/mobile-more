import * as React from 'react';
import { Form } from 'antd-mobile';
import { FormItemProps } from 'antd-mobile/es/components/form';
import FormContext from './FormContext';
import FormArrayContext from './FormArrayContext';

// TODO: 新增 ItemCascade,ItemRate,ItemSlider,ItemStepper,ItemSwich

export interface BizFormItemProps<ValueType = any> extends FormItemProps {
  extendRules?: FormItemProps['rules'];
  transform?: (value: ValueType) => any;
}

const BizFormItem: React.FC<BizFormItemProps> = ({
  name,
  transform,
  extendRules = [],
  rules = [],
  ...restProps
}) => {
  const { setFieldTransform } = React.useContext(FormContext);
  const { parentListNames } = React.useContext(FormArrayContext);

  React.useEffect(() => {
    if (name && typeof transform === 'function') {
      setFieldTransform(name, transform, parentListNames);
    }
  }, [name, parentListNames, setFieldTransform, transform]);

  return <Form.Item name={name} rules={[...rules, ...extendRules]} {...restProps} />;
};

export default BizFormItem;
