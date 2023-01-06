---
order: 1
---

# 快速上手

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/doly-dev/mobile-more.svg)

基于 [antd-mobile v5](http://mobile.ant.design/) 扩展移动端 UI 组件。

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
import { Descriptions } from 'mobile-more';

ReactDon.render(
  <Descriptions>
    <Descriptions.Item label="名称">xxx</Descriptions.Item>
    <Descriptions.Item label="类型">xxx</Descriptions.Item>
  </Descriptions>,
  mountNode
);
```

## API

### 数据录入

- [BizForm](/components/biz-form/form) - 表单
- [BizFormItem](/components/biz-form/form-item) - 表单项
- [BizFormArray](/components/biz-form/form-array) - 表单数组

### 数据展示

- [Descriptions](/components/descriptions) - 描述列表
- [Dictionary](/components/dictionary) - 数据字典
- [Image](/components/image) - 图片，支持预览

### 其他

- [CaptchaButton](/components/captcha-button) - 验证码按钮
- [CheckListPopup](/components/check-list-popup) - 勾选列表弹层
- [ImageUploader](/components/image-uploader) - 图片上传
- [Popup](/components/popup) - 弹出层
- [ScrollLoadView](/components/scroll-load-view) - 滚动加载视图
- [ToolHead](/components/tool-head) - 工具头

[npm]: https://img.shields.io/npm/v/mobile-more.svg
[npm-url]: https://npmjs.com/package/mobile-more
[site]: https://doly-dev.github.io/mobile-more/latest/index.html
