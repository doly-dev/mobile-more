# 快速上手

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/doly-dev/mobile-more.svg)

## 使用

### npm 或 yarn 安装

```shell
npm install mobile-more
```

<br />

```shell
yarn add mobile-more
```

### 示例

```javascript
import { BizField } from 'mobile-more';

// 值类型为颜色，显示红色色块
ReactDon.render(<BizField value="red" valueType="color" />, mountNode);
```

## API

- **数据展示**
  - [BizField] - 业务字段
  - [BizDescriptions] - 业务描述
  - [BizTable] - 业务表格
  - [EditableBizTable] - 可编辑业务表格
- **数据录入**
  - [BizForm] - 业务表单
  - [Item] - 表单项
  - [Modal/Drawer] - 浮层表单
  - [QueryForm] - 查询表单
  - [StepsForm] - 分步表单

## 精选第三方 react 组件

- [qrcode.react] - 生成二维码
- [wangeditor] - 轻量级 web 富文本编辑器

[npm]: https://img.shields.io/npm/v/mobile-more.svg
[npm-url]: https://npmjs.com/package/mobile-more
[site]: https://doly-dev.github.io/mobile-more/latest/index.html
[babel-plugin-import]: https://www.npmjs.com/package/babel-plugin-import
