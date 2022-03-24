import * as React from 'react';
import { safeDate } from 'util-helpers';
import dayjs from 'dayjs';
import { parseAreaCode } from 'lcn';
import { useAsync } from 'rc-hooks';
import { Button, Toast } from 'antd-mobile';
import {
  BizForm,
  BizFormItemInput,
  BizFormItemImageUploader,
  BizFormItemCheckList,
  BizFormItemCascadePicker,
  BizFormItemDatePicker,
  BizFormItemTextArea
} from 'mobile-more';
import ItemAreaCode from './components/ItemAreaCode';
import ItemSpecialDatePicker from './components/ItemSpecialDatePicker';
import getMcc from './services/getMcc';
import getMerchantType from './services/getMerchantType';
import getLicenseInfo from './services/getLicenseInfo';
import mockUpload from './services/mockUpload';
import styles from './demo.less';

const DefaultFormat = 'YYYY-MM-DD';

// 最大/最小可选日期
export const MinDate = safeDate(dayjs().subtract(20, 'year').format(DefaultFormat));
export const MaxDate = safeDate(dayjs().add(50, 'year').format(DefaultFormat));

function Demo() {
  const [form] = BizForm.useForm();
  const { data: mccOptions = [] } = useAsync(() => getMcc().then((res) => res.data), {
    persisted: true,
    cacheKey: 'mcc',
    cacheTime: 60 * 60 * 1000
  });

  const { data: merchantTypeOptions = [], loading: loadingMerchantType } = useAsync(
    () => getMerchantType().then((res) => res.data),
    {
      persisted: true,
      cacheKey: 'merchantType',
      cacheTime: 60 * 60 * 1000
    }
  );

  React.useEffect(() => {
    getLicenseInfo().then((res) => {
      const { businessLicenseInfo } = res.data;

      const [province, city, area] = parseAreaCode(businessLicenseInfo.areaCode);
      const areaCode = [province?.code, city?.code, area?.code];
      const image = businessLicenseInfo.image
        ? [{ url: businessLicenseInfo.image, fssId: 'ty2a4354' }]
        : [];

      form.setFieldsValue({
        businessLicenseInfo: {
          ...businessLicenseInfo,
          areaCode,
          image
        }
      });
    });
  }, [form]);

  return (
    <BizForm
      name="form-license-default"
      className={styles.wrapper}
      layout="horizontal"
      form={form}
      requiredMarkStyle="text-optional"
      hasFeedback={false}
      onFinish={(values) => {
        console.log(values);
      }}
      onFinishFailed={(errInfo) => {
        Toast.show(errInfo.errorFields[0].errors[0]);
      }}
      footer={
        <Button block color="primary" type="submit">
          提交
        </Button>
      }
      style={{
        '--border-top': '0 none'
      }}
    >
      <BizFormItemImageUploader
        name={['businessLicenseInfo', 'image']}
        label="营业执照"
        type="license"
        upload={mockUpload}
        required
      />
      <div style={{ marginTop: 24 }}>
        <BizFormItemInput
          label="社会信用代码"
          name={['businessLicenseInfo', 'licenseNo']}
          disabledWhiteSpace
          placeholder="请输入社会信用代码"
          inputProps={{ maxLength: 18 }}
          clearable
          disabled
          required
        />
        <BizFormItemCheckList
          label="商户类型"
          name={['businessLicenseInfo', 'merchantType']}
          options={merchantTypeOptions}
          loading={loadingMerchantType}
          placeholder="请选择商户类型"
          title="请选择商户类型"
          required
        />
        <BizFormItemCascadePicker
          label="经营范围"
          name={['businessLicenseInfo', 'constraintBusiness']}
          placeholder="请选择经营范围"
          title="请选择经营范围"
          options={mccOptions}
          fieldNames={{ label: 'name', value: 'code' }}
          required
        />
        <BizFormItemDatePicker
          label="证件起始日期"
          name={['businessLicenseInfo', 'startDate']}
          placeholder="请选择证件起始日期"
          title="请选择证件起始日期"
          datePickerProps={{ max: MaxDate, min: MinDate }}
          required
        />
        <ItemSpecialDatePicker
          label="证件终止日期"
          name={['businessLicenseInfo', 'endDate']}
          placeholder="请选择证件终止日期"
          title="请选择证件终止日期"
          datePickerProps={{ max: MaxDate, min: MinDate }}
          required
        />
        <ItemAreaCode
          label="经营场所"
          name={['businessLicenseInfo', 'areaCode']}
          placeholder="请选择经营场所"
          title="请选择经营场所"
          required
        />
        <BizFormItemTextArea
          label="详细地址"
          name={['businessLicenseInfo', 'address']}
          placeholder="请输入详细地址"
          textAreaProps={{ maxLength: 200 }}
          required
        />
      </div>
    </BizForm>
  );
}

export default Demo;
