type Keys = {
  label?: string;
  value?: string;
  [key: string]: any;
};

type KeysWithChildren = Keys & {
  children?: string;
};

type DateItem = string | Record<string, any>;

function transformKeys(data: DateItem[], keys?: Keys): Required<Keys>[];
function transformKeys(data: DateItem[], keys?: KeysWithChildren): Required<KeysWithChildren>[];
function transformKeys(data: DateItem[], keys: KeysWithChildren = {}) {
  const {
    label: labelKey,
    value: valueKey,
    disabled: disabledKey,
    readOnly: readOnlyKey,
    children: childrenKey
  } = {
    label: 'label',
    value: 'value',
    disabled: 'disabled',
    readOnly: 'readOnly',
    children: 'children',
    ...keys
  };

  function recursion(list: DateItem[]) {
    return list.map((item) => {
      if (typeof item === 'string') {
        return {
          label: item,
          value: item
        };
      }
      const newItem: Record<string, any> = {
        label: item[labelKey],
        value: item[valueKey]
      };

      if (typeof item?.[disabledKey] !== 'undefined') {
        newItem.disabled = item[disabledKey];
      }

      if (typeof item?.[readOnlyKey] !== 'undefined') {
        newItem.readOnly = item[readOnlyKey];
      }

      if (Array.isArray(item[childrenKey]) && item[childrenKey].length > 0) {
        newItem.children = recursion(item[childrenKey]);
      }
      return newItem;
    });
  }

  return recursion(data);
}

export default transformKeys;
