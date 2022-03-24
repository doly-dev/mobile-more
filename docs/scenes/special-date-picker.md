---
group:
  title: 数据录入
---

# 证件终止日期

身份证或营业执照证件终止日期，包含`长期`或`永久`。不同业务对该值的需要也不一样。

## 代码演示

### 基础用法

<code src='../../src/demos/item-special-date-picker.tsx' />

## API

### ItemSpecialDatePicker

| 参数         | 说明     | 类型        | 默认值                   |
| ------------ | -------- | ----------- | ------------------------ |
| specialLabel | 显示内容 | `ReactNode` | `'长期'`                 |
| specialValue | 值       | `Date`      | `new Date('9999-12-31')` |
