# ImageUploader

图片上传

## 代码演示

### 基础用法

<code src='./demos/basic.tsx' />

支持多选

<code src='./demos/multiple.tsx' />

自定义上传按钮

<code src='./demos/basic-custom.tsx' />

### 营业执照

<code src='./demos/business-license.tsx' />

### 身份证

<code src='./demos/idcard.tsx' />

### 主动触发上传

当上传数量达到上限后，就不再触发。

<code src='./demos/actionRef.tsx' />

### 表单中使用

> TODO

<!-- ### 上传背景

内置三种上传背景

<code src='./demos/bg.tsx' /> -->

## API

除了以下属性，其余和 [antd-mobile ImageUploader](ttps://mobile.ant.design/zh/components/image-uploader#属性) 一样。

```typescript
import type { ImageUploaderProps as ImageUploaderBaseProps } from 'antd-mobile/es/components/image-uploader';
import type { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';

export type { ImageUploadItem };

export type ImageUploaderActionType = {
  // api 触发上传
  clickInput: () => void;
};

export interface ImageUploaderProps extends ImageUploaderBaseProps {
  type?: 'license' | 'idcardFront' | 'idcardBack';
  maxSize?: number;
  comfirmDelete?: boolean;
  actionRef?: MutableRefObject<ImageUploaderActionType | undefined>;
}
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 使用内置的上传背景类型 | `'license'\|'idcardFront'\|'idcardBack'` | - |
| maxSize | 最大上传文件大小，单位 `MB` | `number` | `2` |
| comfirmDelete | 删除时是否需要二次确认 | `boolean` | `false` |
| actionRef | 操作引用 | `MutableRefObject<ImageUploaderActionType \| undefined>` | - |
