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

- [Descriptions](/components/descriptions) - 描述列表
- [Dictionary](/components/dictionary) - 数据字典
- [Image](/components/image) - 图片，支持预览
- [ImageUploader](/components/image-uploader) - 图片上传
- [ScrollLoadView](/components/scroll-load-view) - 滚动加载视图

[npm]: https://img.shields.io/npm/v/mobile-more.svg
[npm-url]: https://npmjs.com/package/mobile-more
[site]: https://doly-dev.github.io/mobile-more/latest/index.html
