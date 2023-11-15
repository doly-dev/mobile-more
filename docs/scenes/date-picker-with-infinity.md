---
group:
  title: 数据录入
---

# 证件有效期

身份证或营业执照证件终止日期，包含`长期`或`永久`。不同业务对该值的需求也不一样。

## 代码演示

### 基础用法

<code src='../../src/demos/item-date-picker-with-infinity.tsx' />

### 推荐

<code src='../../src/demos/item-date-picker-recommend.tsx' />

## API

### ItemDatePickerWithInfinity

| 参数          | 说明     | 类型        | 默认值                   |
| ------------- | -------- | ----------- | ------------------------ |
| infinityValue | 值       | `Date`      | `new Date('9999-12-31')` |
| infinityLabel | 显示内容 | `ReactNode` | `'长期'`                 |
