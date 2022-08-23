import * as React from 'react';
import classnames from 'classnames';
import { Form } from 'antd-mobile';
import type { FormProps, FormLayout, FormInstance } from 'antd-mobile/es/components/form';
import namePathSet from 'rc-util/es/utils/set';
import getNamePaths from './utils/getNamePaths';
import { transformFormValues } from './utils/transform';
import FormContext, { FormContextValue } from './FormContext';
import FormArray from './FormArray';
import FormItem from './FormItem';
import { formPrefixCls } from './config';
import './Form.less';

export type BizFormLayout = FormLayout;
export type BizFormInstance = FormInstance;
export type BizFormJustify = FormContextValue['justify'];

export type BizFormProps = FormProps & {
  justify?: BizFormJustify;
};

const BizForm: React.FC<BizFormProps> & {
  Item: typeof FormItem;
  Array: typeof FormArray;
  Subscribe: typeof Form.Subscribe;
  Header: typeof Form.Header;
  useForm: typeof Form.useForm;
  useWatch: typeof Form.useWatch;
} = ({ onFinish, className, justify = 'start', layout = 'horizontal', ...restProps }) => {
  const transformRecordRef = React.useRef<Record<string, ((value: any) => any) | undefined>>({});
  const setFieldTransform: FormContextValue['setFieldTransform'] = (
    name,
    transform,
    parentListNames
  ) => {
    if (name && transform) {
      if (Array.isArray(parentListNames) && parentListNames.length > 0) {
        const paths = getNamePaths(name, parentListNames);
        transformRecordRef.current = namePathSet(transformRecordRef.current, paths, transform);
      } else if (Array.isArray(name)) {
        transformRecordRef.current = namePathSet(transformRecordRef.current, name, transform);
      } else {
        transformRecordRef.current[String(name)] = transform;
      }
    }
  };

  return (
    <FormContext.Provider value={{ setFieldTransform, justify }}>
      <Form
        className={classnames(formPrefixCls, className)}
        layout={layout}
        onFinish={(values) => {
          if (typeof onFinish !== 'function') {
            return;
          }

          const transValues = transformFormValues(values, transformRecordRef.current);
          // console.log(values, transValues);

          onFinish(transValues);
        }}
        {...restProps}
      />
    </FormContext.Provider>
  );
};

BizForm.Item = FormItem;
BizForm.Array = FormArray;
BizForm.Subscribe = Form.Subscribe;
BizForm.Header = Form.Header;
BizForm.useForm = Form.useForm;
BizForm.useWatch = Form.useWatch;

export default BizForm;
