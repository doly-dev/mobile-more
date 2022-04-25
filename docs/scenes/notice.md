---
group:
  title: 数据展示
---

# Notice

通知条

## 代码演示

### 基础用法

<code src='../../src/demos/components/Notice/demos/basic.tsx' />

## API

```typescript
export interface NoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: React.ReactNode;
  color?: 'warning' | 'info' | 'error';
  showChangeText?: boolean;
  changeText?: string;
  onClickChangeText?: () => void;
}
```

| 参数              | 说明             | 类型                         | 默认值       |
| ----------------- | ---------------- | ---------------------------- | ------------ |
| text              | 文本             | `ReactNode`                  | -            |
| color             | 颜色             | `'warning'\|'info'\|'error'` | `'warning'`  |
| showChangeText    | 是否显示立即修改 | `boolean`                    | `'true'`     |
| changeText        | 修改显示文本     | `string`                     | `'立即修改'` |
| onClickChangeText | 点击立即修改回调 | `()=>void;`                  | -            |
