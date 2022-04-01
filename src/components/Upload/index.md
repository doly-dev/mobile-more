---
group:
  title: 其他
---

# Upload - 上传

> [&lt;input type="file"&gt;](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file)

只封装了 `input[type='file']`， 不支持预览。

## 代码演示

### 基础用法

<code src='./demos/basic.tsx' />

### 块级

<code src='./demos/block.tsx' />

### 多选

<code src='./demos/multiple.tsx' />

## API

```typescript
import { Upload, UploadProps } from 'mobile-more';
```

| 参数      | 说明                   | 类型                                 | 默认值 |
| --------- | ---------------------- | ------------------------------------ | ------ |
| onChange  | 上传文件时触发         | `(files: FileList \| null) => void`  | -      |
| accept    | 文件类型               | `string`                             | -      |
| multiple  | 选择多个文件           | `boolean`                            | -      |
| capture   | 捕获图像或视频数据的源 | `boolean \| 'user' \| 'environment'` | -      |
| block     | 块级展示               | `boolean`                            | -      |
| id        | input id 属性          | `string`                             | -      |
| name      | input name 属性        | `string`                             | -      |
| className | 外层容器 class         | `string`                             | -      |
| style     | 外层容器 样式          | `CSSProperties`                      | -      |
