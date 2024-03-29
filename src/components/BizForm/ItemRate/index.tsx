import { Rate, RateProps } from 'antd-mobile';
import classnames from 'classnames';
import * as React from 'react';
import { formPrefixCls } from '../config';
import BizFormItem, { BizFormItemProps } from '../FormItem';
import { useConfig } from '../../BizConfigProvider';
import './index.less';

const prefixCls = `${formPrefixCls}-item-rate`;

export interface BizFormItemRateProps
  extends Omit<BizFormItemProps, 'children'>,
    Pick<RateProps, 'allowClear' | 'allowHalf' | 'character' | 'count' | 'readOnly'> {
  rateProps?: RateProps;
}

const BizFormItemRate: React.FC<BizFormItemRateProps> = ({
  allowClear,
  allowHalf,
  character,
  count,
  readOnly,
  rateProps,

  required,
  className,
  ...restProps
}) => {
  const { locale } = useConfig();
  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: locale.form.common.selectRequired
        }
      ]}
      clickable={false}
      className={classnames(prefixCls, className)}
      {...restProps}
    >
      <Rate
        allowClear={allowClear}
        allowHalf={allowHalf}
        character={character}
        count={count}
        readOnly={readOnly}
        {...rateProps}
      />
    </BizFormItem>
  );
};

export default BizFormItemRate;
