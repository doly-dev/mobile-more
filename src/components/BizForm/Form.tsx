import { Form, FormProps } from 'antd-mobile';
import classnames from 'classnames';
import namePathSet from 'rc-util/es/utils/set';
import * as React from 'react';
import { formPrefixCls } from './config';
import './Form.less';
import FormArray from './FormArray';
import FormContext, { FormContextValue } from './FormContext';
import FormItem from './FormItem';
import getNamePaths from './utils/getNamePaths';
import { transformFormValues } from './utils/transform';

export type BizFormProps = FormProps & {
  justify?: FormContextValue['justify'];
};

const BizForm: React.FC<BizFormProps> & {
  Item: typeof FormItem;
  Array: typeof FormArray;
  Subscribe: typeof Form.Subscribe;
  Header: typeof Form.Header;
  useForm: typeof Form.useForm;
  useWatch: typeof Form.useWatch;
} = ({ onFinish, className, justify = 'start', layout = 'horizontal', ...restProps }) => {
  const transformRecordRef = React.useRef<
    Record<string, ((value: any, currentLevelValues?: any) => any) | undefined>
  >({});
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
