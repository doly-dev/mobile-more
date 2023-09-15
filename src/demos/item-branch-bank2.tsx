import * as React from 'react';
import { BizForm, BizFormItemInput } from 'mobile-more';
import DemoForm from '../components/BizForm/demos/components/DemoForm';
import styles from './item-branch-bank2.less';
import { List, Mask } from 'antd-mobile';

const allOptions = [
  '中国农业银行',
  '中国建设银行',
  '中国光大银行',
  '中国工商银行',
  '中国民生银行',
  '中国邮政储蓄银行',
  '上海浦东发展银行',
  '上海农村商业银行'
];

const Demo = () => {
  const [form] = BizForm.useForm();
  const [visible, setVisible] = React.useState(false);
  const [options, setOptions] = React.useState(allOptions);

  return (
    <div style={{ padding: 50 }}>
      <DemoForm form={form}>
        <BizFormItemInput label="前表单项" name="before" />
        <div className={styles.wrapper}>
          <div className={styles.searchContent}>
            <BizFormItemInput
              label="支行名称"
              name="bankBranch"
              className={styles.input}
              clearable
              inputProps={{
                onFocus() {
                  setVisible(true);
                },
                onChange(val) {
                  const realVal = val.trim();
                  if (!realVal) {
                    setOptions(allOptions);
                  } else {
                    setOptions(allOptions.filter((item) => item.indexOf(realVal) > -1));
                  }
                }
              }}
            />
            <List className={styles.result} style={{ display: visible ? 'block' : 'none' }}>
              {options.map((item) => (
                <List.Item
                  key={item}
                  onClick={() => {
                    form.setFieldValue('bankBranch', item);
                    setVisible(false);
                  }}
                  arrow={false}
                >
                  {item}
                </List.Item>
              ))}
            </List>
          </div>
          <Mask visible={visible} onMaskClick={() => setVisible(false)} />
        </div>
        <BizFormItemInput label="后表单项" name="after" />
      </DemoForm>
    </div>
  );
};

export default Demo;
