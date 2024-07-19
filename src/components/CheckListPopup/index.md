---
group:
  title: 其他
---

# CheckListPopup - 勾选列表弹层

> 推荐使用 [BizFormItemCheckList](/components/biz-form/form-item#checklist---勾选列表)

可勾选列表+弹出层。

## 代码演示

### 基础用法

<code src='./demos/basic.tsx' />

### 受控

<code src='./demos/control.tsx' />

### 异步加载选项

<code src='./demos/async.tsx' />

### 显示搜索

<code src='./demos/search.tsx' />

### 多选

<code src='./demos/multiple.tsx' />

## API

```typescript
type Option = {
  label?: React.ReactNode;
  value?: any;
  readOnly?: boolean;
  disabled?: boolean;
  [key: string]: any;
};
```

**注意：未开启 multiple 时，将视为单选，值为 string**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中项 | `string \| string[]` | - |
| onChange | 选中项改变时触发 | `(value: string \| string[]) => void` | - |
| changeClosable | 触发 onChange 后是否关闭弹层。<br/>仅在单选模式下且有值时生效。 | `boolean` | `true` |
| renderLabel | 自定义列表项渲染 | `(option: Option) => ReactNode` | `[]` |
| options | 可选项 | `Option[]` | `[]` |
| fieldNames | 自定义字段名 | `{ label: string; value: string; readOnly: string; disabled: string; }` | - |
| showSearch | 显示搜索框 | `boolean` | `false` |
| searchValue | 搜索值。如果有值表示为受控。 | `string` | - |
| onSearch | 搜索内容变化时触发 | `(value: string) => void` | - |
| filterOption | 根据搜索内容过滤可选项。默认根据 `value` 和 `label` 模糊匹配过滤。 | `(searchValue: string, option: Option) => boolean;` | - |
| radioMode | 单选模式，不允许取消选择。仅在 `multiple=false` 时生效。 | `boolean` | `true` |
| multiple | 多选 | `boolean` | `false` |
| loading | 加载 | `boolean` | - |
| title | 标题 | `ReactNode` | - |
| closable | 是否显示标题右侧关闭图标 | `boolean` | `true` |
| trigger | 触发展示隐藏的元素 | `ReactElement` | - |
| visible | 是否展示弹层 | `boolean` | - |
| onVisibleChange | 弹层切换展示时触发 | `(visible: boolean) => void` | - |
| header | 自定义头部组件 | `ReactNode` | - |
| headerProps | 自定义头部属性 | [CloseToolHeadProps](/components/tool-head#toolheadclosetoolhead) | - |
| checkListProps | 可选项列表属性 | [CheckListProps](https://mobile.ant.design/zh/components/check-list#checklist) | - |
| searchBarProps | 搜索框属性 | [SearchBarProps](https://mobile.ant.design/zh/components/search-bar#属性) | - |
| emptyProps | 空状态属性 | [EmptyProps](https://mobile.ant.design/zh/components/empty#属性) | - |

### CSS 变量

| 变量名           | 说明         | 默认值 |
| ---------------- | ------------ | ------ |
| --list-font-size | 列表文字大小 | `15px` |

还可通过设置 `--adm-color-primary` 设置激活时文字颜色和打勾图标颜色。
