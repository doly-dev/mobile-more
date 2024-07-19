---
group:
  title: 其他
---

# Popup - 弹出层

弹出层，扩展了工具头 ToolHead。

## 代码演示

### 基础用法

<code src="./demos/basic.tsx" />

### 受控

<code src="./demos/control.tsx" />

### 配置头部

<code src="./demos/noheader.tsx" />

## API

除了以下属性，其余和 [antd-mobile Popup](ttps://mobile.ant.design/zh/components/popup#属性) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 头部标题 | `ReactNode` | - |
| extra | 头部和内容之间的内容 | `ReactNode` | - |
| closable | 显示头部右侧关闭图标 | `boolean` | `true` |
| maskClosable | 点击蒙层是否关闭弹层 | `boolean` | `true` |
| visible | 显示弹层。如果设置标识为受控模式。 | `boolean` | - |
| onVisibleChange | 切换显示和隐藏时触发 | `(visible: boolean) => void` | - |
| trigger | 用于触发弹层显示的 dom ，一般是 button | `ReactElement` | - |
| header | 自定义头部 | `ReactNode` | - |
| headerStyle | 自定义头部样式 | `CSSProperties` | - |
| headerClassName | 自定义头部类名 | `string` | - |
| headerProps | 自定义头部属性 | [CloseToolHeadProps](/components/tool-head#toolheadclosetoolhead) | - |
| contentStyle | 自定义内容样式 | `CSSProperties` | - |
| contentClassName | 自定义内容类名 | `string` | - |
