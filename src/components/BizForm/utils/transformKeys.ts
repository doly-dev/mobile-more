export type Obj = {
  label?: string;
  value?: string;
  [key: string]: any;
};

export type ObjWithChildren = Obj & {
  children?: string;
};

type DateItem = string | Record<string, any>;

function mapKeys(data: DateItem[], obj?: Obj): Required<Obj>[];
function mapKeys(data: DateItem[], keys?: ObjWithChildren): Required<ObjWithChildren>[];
function mapKeys(data: DateItem[], keys: ObjWithChildren = {}) {
  const {
    label: labelKey,
    value: valueKey,
    children: childrenKey
  } = {
    label: 'label',
    value: 'value',
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
      const newItem = {
        label: item[labelKey],
        value: item[valueKey]
      };

      if (Array.isArray(item[childrenKey]) && item[childrenKey].length > 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        newItem.children = recursion(item[childrenKey]);
      }
      return newItem;
    });
  }

  return recursion(data);
}

export default mapKeys;
