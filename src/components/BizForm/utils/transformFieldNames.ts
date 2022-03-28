export type FieldNames = {
  label?: string;
  value?: string;
  [key: string]: any;
};

export type FieldNamesWithChildren = FieldNames & {
  children?: string;
};

type DateItem = string | Record<string, any>;

function transformFieldNames(data: DateItem[], fieldNames?: FieldNames): Required<FieldNames>[];
function transformFieldNames(
  data: DateItem[],
  fieldNames?: FieldNamesWithChildren
): Required<FieldNamesWithChildren>[];
function transformFieldNames(data: DateItem[], fieldNames: FieldNamesWithChildren = {}) {
  const {
    label: labelKey,
    value: valueKey,
    children: childrenKey
  } = {
    label: 'label',
    value: 'value',
    children: 'children',
    ...fieldNames
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

export default transformFieldNames;
