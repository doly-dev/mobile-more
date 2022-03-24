import * as React from 'react';
import { Form } from 'antd-mobile';
import { FormArrayProps } from 'antd-mobile/es/components/form';
import FormArrayContext from './FormArrayContext';

export type BizFormArrayProps = FormArrayProps;

const BizFormArray: React.FC<BizFormArrayProps> = ({ name, ...restProps }) => {
  const { parentListNames = [] } = React.useContext(FormArrayContext); // FormList嵌套FormList的情况

  return (
    <FormArrayContext.Provider value={{ parentListNames: [...parentListNames, name] }}>
      <Form.Array name={name} {...restProps} />
    </FormArrayContext.Provider>
  );
};

export default BizFormArray;
