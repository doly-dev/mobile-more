---
order: 1
group:
  order: 1
  title: 数据录入
---

# BizForm - 表单

基于 antd-mobile 的 Form 扩展了数据转换、布局

## 代码演示

### 登录

<code src='./demos/form-login.tsx' />

### 登录 2

<code src='./demos/form-login2.tsx' />

### 营业执照

<code src='./demos/form-license.tsx' />

### 营业执照 - 默认值

<code src='./demos/form-license-default.tsx' />

### 法人信息

<code src='./demos/form-legal.tsx' />

### 结算信息

<code src='./demos/form-settlement.tsx' />

### 其他信息

<code src='./demos/form-other.tsx' />

## API

```typescript
import { BizForm, BizFormProps } from 'mobile-more';
```

同 antd-mobile 的 [Form] ，也支持 `BizForm.Item` `BizForm.Array` `BizForm.Subscribe` `BizForm.useForm` 。

`layout` 默认为 `horizontal` 。

| 参数    | 说明         | 类型                           | 默认值    |
| ------- | ------------ | ------------------------------ | --------- |
| justify | 水平对齐方式 | `'start' \| 'center' \| 'end'` | `'start'` |

[form]: https://mobile.ant.design/zh/components/form#form
