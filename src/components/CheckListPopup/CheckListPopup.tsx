import * as React from 'react';
import classnames from 'classnames';
import { CheckList, SearchBar, SpinLoading, Empty } from 'antd-mobile';
import { CheckListProps } from 'antd-mobile/es/components/check-list';
import { SearchBarProps } from 'antd-mobile/es/components/search-bar';
import { EmptyProps } from 'antd-mobile/es/components/empty';
import { useControllableValue } from 'rc-hooks';
import Popup, { PopupProps } from '../Popup';
import { prefixClass } from '../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-checklist-popup`;

type Option = {
  label?: React.ReactNode;
  value?: any;
  readOnly?: boolean;
  disabled?: boolean;
  [key: string]: any;
};

export interface CheckListPopupProps
  extends PopupProps,
    Pick<CheckListProps, 'multiple' | 'defaultValue'> {
  value?: any;
  onChange?: (value: any) => void;
  changeClosable?: boolean; // 修改值后是否关闭弹层
  renderLabel?: (option: Option) => React.ReactNode;
  options?: Option[];
  filterOption?: (searchValue: string, option: Option) => boolean;
  fieldNames?: { label?: string; value?: string; readOnly?: string; disabled?: string };
  showSearch?: boolean;
  searchValue?: string;
  onSearch?: (value: string) => void;
  loading?: boolean;
  checkListProps?: CheckListProps;
  searchBarProps?: Omit<SearchBarProps, 'value' | 'onSearch'>;
  emptyProps?: EmptyProps;
}

function CheckListPopup(
  props: Omit<CheckListPopupProps, 'value' | 'onChange'> & {
    value?: string;
    onChange?: (value: string) => void;
  }
): React.ReactElement<any, any> | null;
function CheckListPopup(
  props: Omit<CheckListPopupProps, 'value' | 'onChange'> & {
    value?: string[];
    onChange?: (value: string[]) => void;
  }
): React.ReactElement<any, any> | null;
function CheckListPopup(props: CheckListPopupProps) {
  const {
    // common props
    loading = false,
    changeClosable: outChangeClosable,

    // searchbar props
    showSearch = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    searchValue: outSearchValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSearch,
    searchBarProps,

    // checklist props
    options = [],
    filterOption,
    fieldNames,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultValue,
    value,
    onChange,
    multiple = false,
    checkListProps,
    renderLabel,

    // empty props
    emptyProps,

    // popup props
    title,
    className,
    bodyStyle,
    headerStyle,
    ...restProps
  } = props;
  const changeClosable = React.useMemo(() => {
    if (typeof outChangeClosable !== 'undefined') {
      return outChangeClosable;
    }
    return !multiple;
  }, [multiple, outChangeClosable]);
  const [visible, changeVisible] = useControllableValue<boolean>(props, {
    valuePropName: 'visible',
    trigger: 'onVisibleChange'
  });
  const [searchValue, setSearchValue] = useControllableValue<string>(props, {
    valuePropName: 'searchValue',
    trigger: 'onSearch'
  });
  const {
    label: labelKey,
    value: valueKey,
    readOnly: readOnlyKey,
    disabled: disabledKey
  } = React.useMemo(
    () => ({
      label: 'label',
      value: 'value',
      readOnly: 'readOnly',
      disabled: 'disabled',
      ...fieldNames
    }),
    [fieldNames]
  );

  const opts = React.useMemo(
    () =>
      options.filter((item) => {
        if (!searchValue) {
          return item;
        }
        if (typeof filterOption === 'function') {
          return filterOption(searchValue, item);
        }
        return (
          item?.[valueKey]?.indexOf(searchValue) > -1 ||
          (typeof item?.[labelKey] === 'string' && item?.[labelKey].indexOf(searchValue) > -1)
        );
      }),
    [filterOption, labelKey, options, searchValue, valueKey]
  );

  const [state, setState] = useControllableValue({ value, onChange });

  const handleSearchInput = (val: string) => {
    setSearchValue(val);
    searchBarProps?.onChange?.(val);
  };

  const handleChange = (vals: string[]) => {
    if (multiple) {
      setState(vals);
    } else {
      const fmtValue = vals && vals.length > 0 ? vals[0] : value || undefined;
      setState(fmtValue);
    }
    if (changeClosable) {
      changeVisible(false);
    }
  };

  const realValue = state ? (Array.isArray(state) ? state : [state]) : [];

  return (
    <Popup
      title={title}
      className={classnames(prefixCls, className)}
      bodyStyle={{ maxHeight: '70vh', ...bodyStyle }}
      headerStyle={{ marginBottom: -1, ...headerStyle }}
      extra={
        options.length > 0 &&
        showSearch && (
          <div style={{ padding: 16 }}>
            <SearchBar
              placeholder="请输入"
              {...searchBarProps}
              value={searchValue}
              onChange={handleSearchInput}
            />
          </div>
        )
      }
      {...restProps}
      visible={visible}
      onVisibleChange={changeVisible}
    >
      {loading ? (
        <div className={`${prefixCls}-loading`}>
          <SpinLoading color="primary" />
        </div>
      ) : opts.length <= 0 ? (
        <Empty description="暂无数据" {...emptyProps} />
      ) : (
        <CheckList
          multiple={multiple}
          {...checkListProps}
          value={realValue}
          onChange={handleChange}
        >
          {opts.map((item) => (
            <CheckList.Item
              value={item?.[valueKey]}
              readOnly={item?.[readOnlyKey]}
              disabled={item?.[disabledKey]}
              key={item?.[valueKey]}
            >
              {typeof renderLabel === 'function' ? renderLabel(item) : item?.[labelKey]}
            </CheckList.Item>
          ))}
        </CheckList>
      )}
    </Popup>
  );
}

export default CheckListPopup;
