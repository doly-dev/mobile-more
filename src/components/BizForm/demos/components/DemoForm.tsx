import { Button, Selector, Space } from 'antd-mobile';
import { BizForm, BizFormProps } from 'mobile-more';
import { useSetState } from 'rc-hooks';
import * as React from 'react';
import { uniqueId } from 'ut2';

type LayoutType = NonNullable<BizFormProps['layout']>;
type JustifyType = NonNullable<BizFormProps['justify']>;

const layoutOptions: { label: string; value: LayoutType }[] = [
  {
    label: '水平布局',
    value: 'horizontal'
  },
  {
    label: '垂直布局',
    value: 'vertical'
  }
];

const justifyOptions: { label: string; value: JustifyType }[] = [
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
  const formName = React.useMemo(() => uniqueId('form'), []);
  const [state, setState] = useSetState({
    layout: layoutOptions[0].value,
    justify: justifyOptions[0].value
  });

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Space block wrap style={{ '--gap': '24px' }}>
          <Selector
            value={[state.layout]}
            onChange={(value) => value[0] && setState({ layout: value[0] })}
            options={layoutOptions}
          />
          <Selector
            value={[state.justify]}
            onChange={(value) => value[0] && setState({ justify: value[0] })}
            options={justifyOptions}
          />
        </Space>
      </div>
      <BizForm
        name={formName}
        layout={state.layout}
        justify={state.justify}
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
