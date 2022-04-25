---
group:
  title: 数据展示
---

# Card

卡片

## 代码演示

### 基础用法

<code src='../../src/demos/components/Card/demos/basic.tsx' background="#f5f5f5" />

## API

```typescript
interface CardProps {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  tip?: React.ReactNode;
  size?: 'small' | 'default';
  contentStyle?: React.CSSProperties;
  contentClassName?: string;
}
```

| 参数             | 说明             | 类型                 | 默认值      |
| ---------------- | ---------------- | -------------------- | ----------- |
| title            | 标题             | `ReactNode`          | -           |
| subTitle         | 副标题           | `ReactNode`          | -           |
| extra            | 头部右侧扩展内容 | `ReactNode`          | -           |
| tip              | 提示内容         | `ReactNode`          | -           |
| size             | 尺寸             | `'small'\|'default'` | `'default'` |
| contentStyle     | 内容样式         | `CSSProperties`      | -           |
| contentClassName | 内容 class       | `string`             | -           |
