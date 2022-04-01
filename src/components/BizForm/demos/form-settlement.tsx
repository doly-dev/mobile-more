import * as React from 'react';
import { useAsync } from 'rc-hooks';
import { Button, Toast } from 'antd-mobile';
import { BizForm, BizFormItemInput, BizFormItemCheckList, Upload } from 'mobile-more';
import IconScanCard from './images/icon-scan-card@3x.png';
import getBanks from './services/getBanks';
import ocr from './services/ocr';
import ItemAreaCode from './components/ItemAreaCode';
import ItemBranchBank from './components/ItemBranchBank';

function Demo() {
  const [form] = BizForm.useForm();
  const { data: banks = [] } = useAsync(() => getBanks().then((res) => res.data), {
    persisted: true,
    cacheKey: 'banks',
    cacheTime: 60 * 60 * 1000
  });

  const handleOCR = React.useCallback(
    (files: FileList | null) => {
      if (files) {
        ocr(files[0]).then((res) => {
          form.setFieldsValue({
            settlementInfo: {
              bankCardNo: res.data
            }
          });
        });
      }
    },
    [form]
  );

  return (
    <BizForm
      name="form-settlement"
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
    >
      <BizFormItemInput
        label="账户名"
        name={['settlementInfo', 'accountName']}
        disabledWhiteSpace
        placeholder="请输入账户名"
        inputProps={{ maxLength: 32 }}
        clearable
        required
      />
      <BizFormItemInput
        label="银行账号"
        name={['settlementInfo', 'bankCardNo']}
        placeholder="请输入银行账号"
        type="bankCard"
        inputProps={{
          suffix: (
            <Upload onChange={handleOCR}>
              <img src={IconScanCard} alt="" width="24" height="24" />
            </Upload>
          )
        }}
        clearable
        required
      />
      <BizFormItemCheckList
        label="开户银行"
        name={['settlementInfo', 'bankCode']}
        placeholder="请选择开户银行"
        title="请选择开户银行"
        options={banks}
        fieldNames={{ label: 'name', value: 'code' }}
        required
      />
      <ItemAreaCode
        label="开户行所在地"
        name={['settlementInfo', 'areaCode']}
        placeholder="请选择开户行所在地"
        title="请选择开户行所在地"
        showArea={false}
        required
      />
      <BizForm.Subscribe to={[['settlementInfo', 'areaCode']]}>
        {({ settlementInfo: { areaCode } }) => {
          return (
            <ItemBranchBank
              label="开户支行名称"
              name={['settlementInfo', 'bankBranch']}
              placeholder="请选择开户支行名称"
              title="请选择开户支行名称"
              areaCode={areaCode?.[1]}
              readOnly={!areaCode?.[1]}
              onClick={() => {
                if (!areaCode?.[1]) {
                  Toast.show({ content: '请先选择开户行所在地' });
                }
              }}
              required
            />
          );
        }}
      </BizForm.Subscribe>
      <BizFormItemInput
        label="银行预留手机号"
        name={['settlementInfo', 'bankMobilePhone']}
        placeholder="请输入银行预留手机号"
        type="mobile"
        clearable
        required
        style={{ '--prefix-width': '7em' }}
      />
    </BizForm>
  );
}

export default Demo;
