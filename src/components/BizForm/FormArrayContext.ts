import { createContext } from 'react';
import type { FormArrayProps } from '../../antd-mobile.interface';

type FormArrayContextValue = {
  parentListNames: FormArrayProps['name'][];
};

export default createContext<FormArrayContextValue>({
  parentListNames: []
});
