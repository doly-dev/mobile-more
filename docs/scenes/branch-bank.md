---
group:
  title: 数据录入
---

# 开户支行名称

选择 和 回显开户支行名称。

**注意**

- 值和显示名称一致，所以 `fieldNames={label:'name',value:'name'}`
- 自定义显示当前值，由于当前数据来源于接口，所以可能没有 options 来解析当前值，没有当前值时显示 value。

## 代码演示

### 基础用法

<code src='../../src/demos/item-branch-bank.tsx' />

## API

### ItemBranchBank

| 参数     | 说明                         | 类型     | 默认值 |
| -------- | ---------------------------- | -------- | ------ |
| areaCode | 地区码，当有该值时才请求数据 | `string` | -      |
