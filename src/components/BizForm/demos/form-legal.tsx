import * as React from 'react';
import dayjs from 'dayjs';
import { safeDate } from 'util-helpers';
import { Button, Toast, Grid } from 'antd-mobile';
import {
  BizForm,
  BizFormItemInput,
  BizFormItemImageUploader,
  BizFormItemDatePicker
} from 'mobile-more';
import ItemSpecialDatePicker from './components/ItemSpecialDatePicker';
import mockUpload from './services/mockUpload';
import styles from './demo.less';

const DefaultFormat = 'YYYY-MM-DD';

// 最大/最小可选日期
export const MinDate = safeDate(dayjs().subtract(20, 'year').format(DefaultFormat));
export const MaxDate = safeDate(dayjs().add(50, 'year').format(DefaultFormat));

function Demo() {
  return (
    <BizForm
      name="form-legal"
      className={styles.wrapper}
      layout="horizontal"
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
      <Grid columns={2} gap={24}>
        <Grid.Item>
          <BizFormItemImageUploader
            name={['legalInfo', 'idCardPerson']}
            label="身份证人像面"
            upload={mockUpload}
            type="idcardFront"
            required
          />
        </Grid.Item>
        <Grid.Item>
          <BizFormItemImageUploader
            name={['legalInfo', 'idCardNational']}
            label="身份证徽章面"
            upload={mockUpload}
            type="idcardBack"
            required
          />
        </Grid.Item>
      </Grid>
      <div style={{ marginTop: 24 }}>
        <BizFormItemInput
          label="法人姓名"
          name={['legalInfo', 'legalName']}
          disabledWhiteSpace
          placeholder="请输入法人姓名"
          inputProps={{ maxLength: 32 }}
          clearable
          required
        />
        <BizFormItemInput
          label="身份证号"
          name={['legalInfo', 'idCardNo']}
          placeholder="请输入身份证号"
          type="idCard"
          clearable
          required
        />
        <BizFormItemDatePicker
          label="证件起始日期"
          name={['legalInfo', 'startDate']}
          placeholder="请选择证件起始日期"
          title="请选择证件起始日期"
          datePickerProps={{ max: MaxDate, min: MinDate }}
          required
        />
        <ItemSpecialDatePicker
          label="证件终止日期"
          name={['legalInfo', 'endDate']}
          placeholder="请选择证件终止日期"
          title="请选择证件终止日期"
          datePickerProps={{ max: MaxDate, min: MinDate }}
          required
        />
      </div>
    </BizForm>
  );
}

export default Demo;
