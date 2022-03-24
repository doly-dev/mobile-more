---
group:
  title: 其他
---

# ImageUploader - 图片上传

图片上传，扩展了文件类型、文件大小校验。

## 代码演示

### 基础用法

<code src='./demos/basic.tsx' />

支持多选

<code src='./demos/multiple.tsx' />

自定义上传按钮

<code src='./demos/basic-custom.tsx' />

使用默认的删除样式

<code src='./demos/delete-style.tsx' />

### 营业执照

<code src='./demos/business-license.tsx' />

### 身份证

<code src='./demos/idcard.tsx' />

### 主动触发上传

当上传数量达到上限后，就不再触发。

<code src='./demos/actionRef.tsx' />

## API

除了以下属性，其余和 [antd-mobile ImageUploader](ttps://mobile.ant.design/zh/components/image-uploader#属性) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 使用内置的上传背景类型 | `'license' \| 'idcardFront' \| 'idcardBack'` | - |
| maxSize | 最大上传文件大小，单位 `MB` | `number` | `2` |
| comfirmDelete | 删除时是否需要二次确认 | `boolean` | `false` |
| deleteStyle | 删除样式 | `'default' \| 'circle'` | `'circle'` |
| actionRef | 操作引用 | `MutableRefObject<ImageUploaderActionType \| undefined>` | - |
