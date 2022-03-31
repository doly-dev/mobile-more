import * as React from 'react';
import { useControllableValue } from 'rc-hooks';
import { Selector } from 'antd-mobile';
import { SelectorProps, SelectorOption } from 'antd-mobile/es/components/selector';
import transformKeys from '../utils/transformKeys';

type SelectorValue = string | number;

type Option = Partial<SelectorOption<SelectorValue>> & Record<string, any>;

export interface SuperSelectorProps<V = SelectorValue>
  extends Omit<SelectorProps<V>, 'options' | 'value'> {
  value?: any;
  onChange?: (value: any, extend: any) => void;
  options?: Option[] | undefined;
  radioMode?: boolean;
  mapKeys?: { label?: string; value?: string; description?: string; disabled?: string };
}

function SuperSelector<V extends SelectorValue = SelectorValue>(
  props: Omit<SuperSelectorProps<V>, 'multiple' | 'value' | 'onChange'> & {
    multiple: true;
    value?: V[];
    onChange?: (value: V[], extend: { items: Option[] }) => void;
  }
): JSX.Element;
function SuperSelector<V extends SelectorValue = SelectorValue>(
  props: Omit<SuperSelectorProps<V>, 'multiple' | 'value' | 'onChange'> & {
    multiple?: false | boolean;
    value?: V;
    onChange?: (value: V, extend: { items: Option[] }) => void;
  }
): JSX.Element;
function SuperSelector<V extends SelectorValue = SelectorValue>(props: SuperSelectorProps<V>) {
  const {
    options: outOptions = [],
    mapKeys,
    multiple = false,
    radioMode = true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultValue,
    ...restProps
  } = props;
  const [state, setState] = useControllableValue(props);

  const options = React.useMemo(() => {
    if (mapKeys) {
      return transformKeys(outOptions, mapKeys);
    }
    return outOptions as unknown as SelectorOption<SelectorValue>[];
  }, [mapKeys, outOptions]);

  const handleChange: SelectorProps<V>['onChange'] = (v, { items }) => {
    if (multiple) {
      setState(v, { items });
    } else {
      const fmtValue = v.length > 0 ? v[0] : radioMode ? state : undefined;
      setState(fmtValue, { items });
    }
  };

  const realValue = React.useMemo(
    () => (typeof state !== 'undefined' && !Array.isArray(state) ? [state] : state),
    [state]
  );

  return (
    <Selector<any>
      options={options}
      multiple={multiple}
      {...restProps}
      value={realValue || []}
      onChange={handleChange}
    />
  );
}

export default SuperSelector;
