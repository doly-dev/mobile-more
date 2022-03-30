import * as React from 'react';
import classnames from 'classnames';
import { Rate } from 'antd-mobile';
import { RateProps } from 'antd-mobile/es/components/rate';
import BizFormItem, { BizFormItemProps } from './FormItem';
import getLabel from './utils/getLabel';
import { formItemAdjustPrefixCls } from './config';

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
  const label = getLabel(restProps);

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          required,
          message: `请选择${label}`
        }
      ]}
      clickable={false}
      className={classnames(formItemAdjustPrefixCls, className)}
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
