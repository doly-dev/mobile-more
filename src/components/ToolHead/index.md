---
group:
  title: 其他
---

# ToolHead - 工具头

工具头

## 代码演示

### 基础用法

<code src="./demos/basic.tsx" />

### 带关闭

<code src="./demos/close.tsx" />

### 带确认

<code src="./demos/confirm.tsx" />

## API

### ToolHead

| 参数   | 说明     | 类型                       | 默认值 |
| ------ | -------- | -------------------------- | ------ |
| left   | 左边内容 | `ReactNode \| ReactNode[]` | -      |
| right  | 右边内容 | `ReactNode \| ReactNode[]` | -      |
| center | 中间内容 | `ReactNode`                | -      |

### ToolHead.CloseToolHead

| 参数             | 说明             | 类型                | 默认值    |
| ---------------- | ---------------- | ------------------- | --------- |
| title            | 标题             | `ReactNode`         | -         |
| showCloseIcon    | 是否显示关闭图标 | `boolean`           | `true`    |
| closeIcon        | 自定义关闭图标   | `ReactNode`         | -         |
| onClickCloseIcon | 点击关闭图标触发 | `string`            | -         |
| closePlacement   | 关闭图标位置     | `'left' \| 'right'` | `'right'` |

### ToolHead.ConfirmToolHead

| 参数        | 说明         | 类型        | 默认值   |
| ----------- | ------------ | ----------- | -------- |
| title       | 标题         | `ReactNode` | -        |
| cancelText  | 取消文本     | `ReactNode` | `'取消'` |
| confirmText | 确认文本     | `ReactNode` | `'确认'` |
| onConfirm   | 点击确认触发 | `ReactNode` | -        |
| onCancel    | 点击取消触发 | `ReactNode` | -        |

### CSS 变量

| 变量名            | 说明             | 默认值 |
| ----------------- | ---------------- | ------ |
| --title-font-size | 标题文字大小     | `15px` |
| --side-font-size  | 左右侧面文字大小 | `15px` |
