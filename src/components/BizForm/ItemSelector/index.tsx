import * as React from 'react';
import classnames from 'classnames';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import SuperSelector, { SuperSelectorProps } from './SuperSelector';
import { formPrefixCls } from '../config';
import { useConfig } from '../../BizConfigProvider';
import './index.less';

const prefixCls = `${formPrefixCls}-item-selector`;

export interface BizFormItemSelectorProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<SuperSelectorProps, 'columns' | 'mapKeys' | 'multiple' | 'radioMode' | 'showCheckMark'> {
  options: SuperSelectorProps['options'];
  selectorProps?: SuperSelectorProps;
}

const BizFormItemSelector: React.FC<BizFormItemSelectorProps> = ({
  columns,
  mapKeys,
  options,
  multiple = false,
  radioMode = true,
  showCheckMark,
  selectorProps,

  className,
  required,
  ...restProps
}) => {
  const { locale } = useConfig();
  return (
    <BizFormItem
      className={classnames(prefixCls, className)}
      required={required}
      rules={[
        {
          validator(rule, value) {
            if (required) {
              if ((Array.isArray(value) && value.length <= 0) || typeof value === 'undefined') {
                return Promise.reject(locale.form.common.selectRequired);
              }
            }
            return Promise.resolve();
          }
        }
      ]}
      {...restProps}
    >
      <SuperSelector
        columns={columns}
        options={options}
        mapKeys={mapKeys}
        multiple={multiple}
        radioMode={radioMode}
        showCheckMark={showCheckMark}
        {...selectorProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemSelector;
