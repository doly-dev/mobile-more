# mobile-more

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/doly-dev/mobile-more.svg)

基于 [antd-mobile] 扩展的业务场景组件。

[查看文档和示例][site]

## 对应版本

| mobile-more | antd-mobile |
| ----------- | ----------- |
| `v0.x`      | `v5.x`      |

## 使用

### 安装

```shell
npm install mobile-more
```

```shell
yarn add mobile-more
```

```shell
pnpm add mobile-more
```

### 示例

```javascript
import { Descriptions } from 'mobile-more';

function App() {
  return (
    <Descriptions title="标题">
      <Descriptions.Item label="营业执照编号">1**************6</Descriptions.Item>
      <Descriptions.Item label="商户名称">xxx生活馆</Descriptions.Item>
    </Descriptions>
  );
}
```

## API

### 数据录入

- [BizForm] - 表单
- [BizFormItem] - 表单项
- [BizFormArray] - 表单数组

### 数据展示

- [Descriptions] - 描述列表
- [Dictionary] - 数据字典
- [Image] - 图片，支持预览

### 其他

- [BizConfigProvider] - 上下文配置
- [CaptchaButton] - 验证码按钮
- [CheckListPopup] - 勾选列表弹层
- [ImageUploader] - 图片上传
- [Popup] - 弹出层
- [ScrollLoadView] - 滚动加载视图
- [ToolHead] - 工具头
- [Upload] - 上传

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
[bizconfigprovider]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/biz-config-provider
[upload]: https://doly-dev.github.io/mobile-more/latest/index.html#/components/upload
