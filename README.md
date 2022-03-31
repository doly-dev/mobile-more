# mobile-more

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/doly-dev/mobile-more.svg)

基于 [antd-mobile] 扩展的业务场景组件。

[查看文档和示例][site]

## 对应版本

| mobile-more | antd-mobile |
| ----------- | ----------- |
| `v0.x`      | `v5.x`      |

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

// 描述列表
ReactDon.render(
  <Descriptions title="标题">
    <Descriptions.Item label="营业执照编号">1**************6</Descriptions.Item>
    <Descriptions.Item label="商户名称">xxx生活馆</Descriptions.Item>
  </Descriptions>,
  mountNode
);
```

## API

- 数据录入
  - [BizForm](/components/biz-form/form) - 表单
  - [BizFormItem](/components/biz-form/form-item) - 表单项
  - [BizFormArray](/components/biz-form/form-array) - 表单数组
- 数据展示
  - [Descriptions](/components/descriptions) - 描述列表
  - [Dictionary](/components/dictionary) - 数据字典
  - [Image](/components/image) - 图片，支持预览
- 其他
  - [CaptchaButton](/components/cascade-button) - 验证码按钮
  - [CheckListPopup](/components/check-list-popup) - 勾选列表弹层
  - [ImageUploader](/components/image-uploader) - 图片上传
  - [Popup](/components/popup) - 弹出层
  - [ScrollLoadView](/components/scroll-load-view) - 滚动加载视图
  - [ToolHead](/components/tool-head) - 工具头

[npm]: https://img.shields.io/npm/v/mobile-more.svg
[npm-url]: https://npmjs.com/package/mobile-more
[site]: https://doly-dev.github.io/mobile-more/latest/index.html
[antd-mobile]: https://mobile.ant.design
[captchabutton]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/captcha-button
[checklistpopup]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/check-list-popup
[imageuploader]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/image-uploader
[popup]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/popup
[scrollloadview]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/scroll-load-view
[toolhead]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/tool-head
[descriptions]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/descriptions
[dictionary]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/dictionary
[image]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/image
[bizform]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/biz-form/form
[bizformitem]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/biz-form/form-item
[bizformarray]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/biz-form/form-array
