import * as React from 'react';
import { BizForm, BizFormItemInput } from 'mobile-more';
import DemoForm from '../components/BizForm/demos/components/DemoForm';
import styles from './item-branch-bank2.less';
import { List, Mask } from 'antd-mobile';

const allOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const Demo = () => {
  const [form] = BizForm.useForm();
  const [visible, setVisible] = React.useState(false);
  const [options, setOptions] = React.useState(allOptions);

  return (
    <div style={{ padding: 50 }}>
      <DemoForm form={form}>
        <BizFormItemInput label="前面" name="before" />
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
                    setOptions(options.filter((item) => item.indexOf(realVal) > -1));
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
        <BizFormItemInput label="后面" name="after" />
      </DemoForm>
    </div>
  );
};

export default Demo;
