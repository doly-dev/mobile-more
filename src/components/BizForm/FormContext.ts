import { FormItemProps } from 'antd-mobile';
import { createContext } from 'react';
import type { FormArrayProps } from '../../antd-mobile.interface';

export type FormContextValue = {
  justify: 'start' | 'center' | 'end';
  setFieldTransform: (
    name: FormItemProps['name'],
    transform: (value: any, currentLevelValues?: any) => any,
    parentListNames?: FormArrayProps['name'][]
  ) => void;
};

export default createContext<FormContextValue>({
  justify: 'start',
  setFieldTransform: () => void 0
});
