# Dictionary

数据字典

## 代码演示

### 基础用法

数据中配置样式

<code src='./demos/basic.tsx' />

### 自定义字段

<code src='./demos/fieldNames.tsx' />

### 自定义匹配方法

<code src='./demos/match.tsx' />

### 自定义包裹组件

<code src='./demos/component.tsx' />

## API

```typescript
export interface DictionaryProps<ValueType = any> extends React.HTMLAttributes<HTMLSpanElement> {
  valueEnum: {
    label?: React.ReactNode;
    value?: ValueType;
    style?: CSSPropertiesWithVariable;
    [key: string]: any;
  }[];
  value: ValueType;
  defaultLabel?: React.ReactNode;
  stylePropName?: string;
  fieldNames?: {
    label?: string;
    value?: string;
  };
  match?: (itemValue: ValueType, value: ValueType) => boolean;
  component?: keyof React.ReactHTML | null;
}
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 值 | `any` | - |
| valueEnum | 值枚举数据 | `{ label?: ReactNode; value?: any; style?: CSSPropertiesWithVariable; [key:string]: any; }` | - |
| defaultLabel | 没有匹配到值时默认展示内容 | `ReactNode` | `'-'` |
| stylePropName | 枚举数据中的样式属性名。<br/>在匹配到值之后，会将样式带入。 | `string` | `'style'` |
| fieldNames | 自定义字段名 | `{ label?: string; value?: string; }` | - |
| match | 自定义 value 匹配方法 | `(itemValue: ValueType, currentValue: ValueType) => boolean;` | - |
| component | 包裹组件 | `keyof React.ReactHTML \| null` | `span` |
