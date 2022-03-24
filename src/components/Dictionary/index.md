---
group:
  title: 数据展示
---

# Dictionary - 数据字典

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 值 | `any` | - |
| valueEnum | 值枚举数据 | `{ label?: ReactNode; value?: any; props?: Record<string,any>; [key:string]: any; }` | - |
| defaultLabel | 没有匹配到值时默认展示内容 | `ReactNode` | `'-'` |
| fieldNames | 自定义字段名 | `{ label?: string; value?: string; props?: string; }` | - |
| match | 自定义 value 匹配方法 | `(itemValue: ValueType, currentValue: ValueType) => boolean;` | - |
| component | 包裹组件 | `keyof HTMLElement \| Parameters<typeof React.cloneElement>[0] \| null` | `span` |
