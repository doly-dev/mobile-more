import * as React from 'react';
import { List, Mask } from 'antd-mobile';
import { useSetState } from 'rc-hooks';
import { BizForm, BizFormItemInput } from 'mobile-more';
import DemoForm from '../components/BizForm/demos/components/DemoForm';
import styles from './item-branch-bank2.less';

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
  const [state, setState] = useSetState({
    visible: false,
    options: allOptions
  });

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
                  setState({ visible: true });
                },
                onChange(val) {
                  const realVal = val.trim();
                  setState({
                    options: !realVal
                      ? allOptions
                      : allOptions.filter((item) => item.indexOf(realVal) > -1)
                  });
                }
              }}
            />
            <List className={styles.result} style={{ display: state.visible ? 'block' : 'none' }}>
              {state.options.map((item) => (
                <List.Item
                  key={item}
                  onClick={() => {
                    form.setFieldValue('bankBranch', item);
                    setState({ visible: false });
                  }}
                  arrowIcon={false}
                >
                  {item}
                </List.Item>
              ))}
            </List>
          </div>
          <Mask visible={state.visible} onMaskClick={() => setState({ visible: false })} />
        </div>
        <BizFormItemInput label="后表单项" name="after" />
      </DemoForm>
    </div>
  );
};

export default Demo;
