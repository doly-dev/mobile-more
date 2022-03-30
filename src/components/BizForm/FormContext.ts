import { createContext } from 'react';
import type { FormItemProps, FormArrayProps } from 'antd-mobile/es/components/form';

export type FormContextValue = {
  justify?: 'start' | 'center' | 'end';
  setFieldTransform: (
    name: FormItemProps['name'],
    transform: (value: any) => any,
    parentListNames?: FormArrayProps['name'][]
  ) => void;
};

export default createContext<FormContextValue>({
  justify: 'start',
  setFieldTransform: () => void 0
});
