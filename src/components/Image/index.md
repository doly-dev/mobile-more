# Image

图片，支持预览

## 代码演示

### 基础用法

<code src='./demos/basic.tsx' />

### 营业执照

<code src='./demos/business-license.tsx' />

### 身份证

<code src='./demos/idcard.tsx' />

### 小图列表

<code src='./demos/small.tsx' />

### 服务端获取-营业执照

服务端获取是基于图片组件再结合业务简单的封装一层即可。

<code src='./demos/business-license-service.tsx' />

### 服务端获取-身份证

<code src='./demos/idcard-service.tsx' />

## API

除了以下属性，其余和 [antd-mobile Image](ttps://mobile.ant.design/zh/components/image#属性) 一样。

| 参数       | 说明                   | 类型                | 默认值  |
| ---------- | ---------------------- | ------------------- | ------- |
| border     | 边框                   | `'dashed'\|'solid'` | -       |
| name       | 名称                   | `ReactNode`         | -       |
| preview    | 点击是否预览           | `boolean`           | `false` |
| previewUrl | 点击预览图片，默认 src | `string`            | -       |
