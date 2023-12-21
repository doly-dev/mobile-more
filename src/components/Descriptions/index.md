---
group:
  title: 数据展示
---

# Descriptions - 描述列表

描述列表

## 代码演示

### 基础用法

<code src='./demos/basic.tsx' />

### 排列

<code src='./demos/justify.tsx' />

### 文字大小颜色

<code src='./demos/more.tsx' />

## API

### Descriptions

| 参数  | 说明 | 类型        | 默认值 |
| ----- | ---- | ----------- | ------ |
| title | 标题 | `ReactNode` | -      |
| colon | 冒号 | `boolean`   | `true` |

### Descriptions.Item

| 参数             | 说明             | 类型            | 默认值 |
| ---------------- | ---------------- | --------------- | ------ |
| label            | 内容的描述       | `ReactNode`     | -      |
| labelStyle       | 自定义标签样式   | `CSSProperties` | -      |
| labelClassName   | 自定义标签 class | `string`        | -      |
| contentStyle     | 自定义内容样式   | `CSSProperties` | -      |
| contentClassName | 自定义内容 class | `string`        | -      |

### CSS 变量

| 变量名               | 说明                    | 默认值                  |
| -------------------- | ----------------------- | ----------------------- |
| --font-size          | 标签和内容的文字大小    | `14px`                  |
| --color              | 颜色                    | `var(--adm-color-text)` |
| --title-color        | 标题颜色                | `var(--color)`          |
| --padding-inner      | 上下内间距              | `6px`                   |
| --flex-direction     | flex 布局，主轴的方向   | `row`                   |
| --justify-content    | flex 布局，水平排列方式 | `flex-start`            |
| --label-color        | 标签颜色                | `var(--color)`          |
| --label-width        | 标签宽度                | `7em`                   |
| --label-text-align   | 标签对齐方式            | `left`                  |
| --content-color      | 内容颜色                | `var(--color)`          |
| --content-text-align | 内容对齐方式            | `left`                  |
