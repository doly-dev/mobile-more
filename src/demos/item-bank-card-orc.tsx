import * as React from 'react';
import { BizForm, BizFormItemInput } from 'mobile-more';
import ocr from '../components/BizForm/demos/services/ocr';
import BankCardOCR from '../components/BizForm/demos/components/BankCardOCR';
import DemoForm from '../components/BizForm/demos/components/DemoForm';

const Demo = () => {
  const [form] = BizForm.useForm();
  const handleOCR = React.useCallback(
    (file: File) => {
      ocr(file).then((res) => {
        form.setFieldsValue({
          bankCardNo: res.data
        });
      });
    },
    [form]
  );

  return (
    <DemoForm form={form}>
      <BizFormItemInput
        label="银行卡号"
        name="bankCardNo"
        placeholder="请输入银行卡号"
        type="bankCard"
        inputProps={{
          suffix: <BankCardOCR onChange={handleOCR} />
        }}
        clearable
        required
      />
    </DemoForm>
  );
};

export default Demo;
