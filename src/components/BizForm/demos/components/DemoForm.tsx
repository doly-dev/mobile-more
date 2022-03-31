import * as React from 'react';
import { Button, Selector, Space } from 'antd-mobile';
import { BizForm, BizFormProps, BizFormLayout, BizFormJustify } from 'mobile-more';

const layoutOptions = [
  {
    label: '水平布局',
    value: 'horizontal'
  },
  {
    label: '垂直布局',
    value: 'vertical'
  }
];

const justifyOptions = [
  {
    label: '左对齐',
    value: 'start'
  },
  {
    label: '居中对齐',
    value: 'center'
  },
  {
    label: '右对齐',
    value: 'end'
  }
];

const DemoForm: React.FC<BizFormProps> = (props) => {
  const uniqueFormName = React.useMemo(() => `form-${Math.random()}`, []);
  const [justify, setJustify] = React.useState<[BizFormJustify]>(['start']);
  const [layout, setLayout] = React.useState<[BizFormLayout]>(['horizontal']);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Space block wrap style={{ '--gap': '24px' }}>
          <Selector
            value={layout}
            onChange={(value) => value && value.length > 0 && setLayout(value as [BizFormLayout])}
            options={layoutOptions}
          />
          <Selector
            value={justify}
            onChange={(value) => value && value.length > 0 && setJustify(value as [BizFormJustify])}
            options={justifyOptions}
          />
        </Space>
      </div>
      <BizForm
        name={uniqueFormName}
        layout={layout[0]}
        justify={justify[0]}
        onFinish={(values) => {
          console.log(values);
        }}
        footer={
          <Button type="submit" color="primary" block>
            提交
          </Button>
        }
        {...props}
      />
    </>
  );
};

export default DemoForm;
