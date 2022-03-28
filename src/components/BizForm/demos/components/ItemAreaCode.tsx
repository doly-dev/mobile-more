import * as React from 'react';
import { getPCA, getPC } from 'lcn';
// import { getPCA, getPC, isCrownCountryCityCode } from 'lcn';
import { BizFormItemCascadePicker, BizFormItemCascadePickerProps } from 'mobile-more';

const pcaOptions = getPCA({ fieldNames: { code: 'value', name: 'label' }, inland: true });
const pcOptions = getPC({ fieldNames: { code: 'value', name: 'label' }, inland: true });

interface ItemAreaCodeProps
  extends Omit<BizFormItemCascadePickerProps, 'options' | 'renderCurrentValue' | 'transform'> {
  showArea?: boolean;
}

const ItemAreaCode: React.FC<ItemAreaCodeProps> = ({ showArea = true, ...restProps }) => {
  return (
    <BizFormItemCascadePicker
      options={showArea ? pcaOptions : pcOptions}
      // renderCurrentValue={(value, items) => {
      //   const arr: string[] = [];
      //   items.forEach(item => {
      //     // 展示时过滤直辖市或直辖县的市级，如海南省的直辖县级行政区划、新疆维吾尔自治区的自治区直辖县级行政区划
      //     if (item?.value && !isCrownCountryCityCode(item.value)) {
      //       arr.push(item.label);
      //     }
      //   });
      //   return arr.join('/');
      // }}
      transform={(value) => {
        // console.log(value);
        // 可能是不设区地级市
        let realValue: string | undefined;
        if (Array.isArray(value) && value.length > 0) {
          let index = value.length - 1;
          while (index >= 0 && !realValue) {
            if (value[index]) {
              realValue = value[index] as string;
            } else {
              --index;
            }
          }
        }
        return realValue;
      }}
      {...restProps}
    />
  );
};

export default ItemAreaCode;
