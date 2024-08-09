---
group:
  title: 其他
---

# FileViewer - 文件预览

目前支持 `image` `audoi` `video` `pdf` 等文件类型预览，其他文件类型可以参照 `上传文件自定义预览` 显示下载文件。你也可以通过 `renderView` 自定义预览。

## 代码演示

### 基础用法

<code src="./demos/basic.tsx" />

### 不同文件格式

<code src="./demos/multiple.tsx" />

### 上传文件自定义预览

<code src="./demos/upload.tsx" />

### 详情展示

<!-- 建议根据项目中的文件格式，再次封装一个通用的文件预览组件。 -->

<code src="./demos/detail.tsx" />

## API

```typescript
FileViewerFileType = string | ImageUploadItem | File;
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| file | 要预览的文件。支持 `url` 或 `ImageUploadItem` 或 `File`。 | `FileViewerFileType` | - |
| visible | 显示预览文件。 | `boolean` | - |
| onClose | 关闭预览文件时触发。 | `() => void` | - |
| afterClose | 完全关闭预览文件后回调。 | `() => void` | - |
| getContailner | 自定义弹窗的父容器。 | `HTMLElement \| (() => HTMLElement) \| null` | - |
| renderView | 自定义文件预览渲染。 | `(dom: ReactNode, props: FileViewerProps) => ReactNode` | - |
| showName | 显示文件名称。 | `boolean` | `true` |
| unsupportedTipText | 不支持预览时提示内容。 | `ReactNode` | `'该文件不支持预览'` |
| imageViewerProps | 图片查看器属性，仅在预览文件为`图片格式`才生效。 | `Omit<ImageViewerProps, 'image'>` | - |
| modalProps | 弹窗属性。 | `ModalProps` | - |

`renderView` `showName` `unsupportedTipText` `modalProps` 仅在预览文件为`非图片格式`才生效。

### FileViewer.transformUploadFile(file?: FileViewerFileType)

将 `url` 或 `ImageUploadItem` 或 `File` 转为 `UploadFile` 格式：

```typescript
{
  uid: string;
  name: string;
  url: string;
  fileType: "audio" | "video" | "image" | "pdf" | "word" | "excel" | undefined;
  type?: string;
  size?: number;
  lasModified?: number;
  originFileObj?: File;
}
```

如果传入的是 `File` 且没有 `url` 会通过 `URL.createObjectURL` 创建一个 `url`，以确保 `url` 有值。

### FileViewer.getFileThumbUrl(file?: FileViewerFileType): string

获取文件缩略图。

结果如下：

- 如果传入的对象含有 `thumbnailUrl` 优先返回该值。
- 如果传入的是图片文件对象（ `File.type` 或 `File.name` 识别为图片）， 返回 `URL.createObjectURL` 值。
- 如果传入的是图片对象（ `obj.name` 或 `obj.type` 或 `obj.url` 识别为图片）且含有 `url`，返回 `url` 值。
- 返回文件格式对应的缩略图。

### FileViewer.supports(file?: FileViewerFileType): boolean

如果 `FileViewer` 组件支持该文件预览返回 `true`，否则返回 `false`。
