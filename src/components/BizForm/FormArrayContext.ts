import { createContext } from 'react';
import type { FormArrayProps } from 'antd-mobile/es/components/form';

type FormArrayContextValue = {
  parentListNames: FormArrayProps['name'][];
};

export default createContext<FormArrayContextValue>({
  parentListNames: []
});
