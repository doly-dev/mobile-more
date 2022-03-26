---
order: 2
group:
  title: 数据录入
---

# BizFormItem - 表单项

基于 antd-mobile 的 Form.Item 扩展了数据转换、校验

## 代码演示

### 所有表单项

<code src='./demos/item-all.tsx' />

## API

```typescript
import { BizFormItem, BizFormItemProps } from 'mobile-more';
```

除了以下属性，其余同 antd-mobile 的 [Form.Item](https://mobile.ant.design/zh/components/form#formitem) 。

| 参数        | 说明                                       | 类型                     | 默认值 |
| ----------- | ------------------------------------------ | ------------------------ | ------ |
| extendRules | 扩展校验规则。如果需要覆盖，请使用 `rules` | `FormItemProps['rules']` | -      |
| transform   | 转换该字段值，表单提交时执行。             | `(value: any) => any`    | -      |

## 扩展组件

下列组件是基于 BizFormItem 扩展，继承 BizFormItem 所有属性。

### CascadePicker - 级联选择器

<code src='./demos/cascade-picker.tsx' />

#### API

```typescript
import { BizFormItemCascadePicker, BizFormItemCascadePickerProps } from 'mobile-more';

type Option = Partial<Omit<CascadePickerProps['options'][0], 'children'>> &
  Record<string, any> & {
    children?: Option[];
  };

type CascadePickerColumnItem = Partial<PickerColumnItem> & Record<string, any>;

type CascadePickerValueExtend = {
  columns: CascadePickerColumnItem[][];
  items: (CascadePickerColumnItem | null)[];
};
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | - |
| readOnly | 只读。<br/>点击不弹出 CascadePicker 。 | `boolean` | - |
| title | CascadePicker 标题 | `ReactNode` | - |
| options | CascadePicker 树形的选项数据 | `Option[]` | - |
| fieldNames | 自定义 options 数据节点 `label` `value` `children` 字段名 | `{ label?: string; value?: string; children?: string; }` | - |
| renderCurrentValue | 自定义渲染当前选中值 | `(value: PickerValue[], extend: CascadePickerValueExtend) => string \| undefined;` | - |
| cascadePickerProps | 透传 CascadePicker 组件属性 | [CascadePickerProps](https://mobile.ant.design/zh/components/picker#cascadepicker) | - |

### CheckList - 勾选列表

<code src='./demos/check-list.tsx' />

#### API

```typescript
import { BizFormItemCheckList, BizFormItemCheckListProps } from 'mobile-more';

type Option = {
  label?: ReactNode;
  value?: any;
  readOnly?: boolean;
  disabled?: boolean;
  [key: string]: any;
};
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | - |
| readOnly | 只读。<br/>点击不弹出 CheckListPopup 。 | `boolean` | - |
| title | CheckListPopup 标题 | `ReactNode` | - |
| loading | 显示加载中 | `boolean` | - |
| options | CheckList 选项数据 | `Option[]` | - |
| fieldNames | 自定义 options 数据节点 `label` `value` `readOnly` `disabled` 字段名 | `{ label?: string; value?: string; readOnly?: string; disabled?: string; }` | - |
| renderCurrentValue | 自定义渲染当前选中值 | `(value: any, option?: Option) => string \| undefined;` | - |
| checkListProps | 透传 CheckList 组件属性 | [CheckListProps](https://mobile.ant.design/zh/components/check-list#属性) | - |
| searchBarProps | 透传 SearchBar 组件属性 | [SearchBarProps](https://mobile.ant.design/zh/components/search-bar#属性) | - |
| emptyProps | 透传 Empty 组件属性 | [SearchBarProps](https://mobile.ant.design/zh/components/empty#属性) | - |
| checkListPopupProps | 透传 CheckListPopup 组件属性 | [CheckListPopupProps](/components/check-list-popup#api) | - |

### DatePicker - 日期

<code src='./demos/date-picker.tsx' />

#### API

```typescript
import { BizFormItemDatePicker, BizFormItemDatePickerProps } from 'mobile-more';

// 默认不同精度的日期格式
export const defaultFormat = {
  year: 'YYYY',
  month: 'YYYY-MM',
  day: 'YYYY-MM-DD',
  hour: 'YYYY-MM-DD HH',
  minute: 'YYYY-MM-DD HH:mm',
  second: 'YYYY-MM-DD HH:mm:ss'
};
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | - |
| readOnly | 只读。<br/>点击不弹出 CheckListPopup 。 | `boolean` | - |
| title | CheckListPopup 标题 | `ReactNode` | - |
| format | 日期格式，默认根据不同 `precision` 设置。 | `string \| ((date: Date, precision: DatePickerProps['precision']) => string)` | - |
| precision | 精度 | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day'` | `'day'` |
| renderLabel | 自定义渲染每列展示的内容，透传 DatePicker 组件。默认设置了`年/月/日/时/分/秒/周`。 | `(type: string, data: number) => ReactNode` | - |
| datePickerProps | 透传 DatePicker 组件属性 | [DatePickerProps](https://mobile.ant.design/zh/components/picker#属性-2) | - |

### ImageUploader - 图片上传

<code src='./demos/image-uploader.tsx' />

#### API

```typescript
import { BizFormItemImageUploader, BizFormItemImageUploaderProps } from 'mobile-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| upload | 上传方法，入参是需要被上传的文件对象，经过异步处理之后，返回上传结果。 | `(file: File) => Promise<ImageUploadItem>` | - |
| maxCount | 最多上传几张图片，超出数量会自动隐藏上传按钮，`0` 表示不做限制。 | `number` | `0` |
| multiple | 是否支持选择多张图片 | `boolean` | `false` |
| comfirmDelete | 删除时显示确认弹窗 | `boolean` | `false` |
| maxSize | 最大图片尺寸，单位 `MB` | `number` | `2` |
| type | 内置类型。当设置类型后 `maxCount` 强制等于 `1`，BizFormItem 的 `noStyle` 默认为 `true` 。 | `'license' \| 'idcardFront' \| 'idcardBack'` | - |
| imageUploaderProps | 透传 ImageUploader 组件属性 | [ImageUploaderProps](/components/image-uploader) | - |

### Input - 输入框

<code src='./demos/input.tsx' />

#### API

```typescript
import { BizFormItemInput, BizFormItemInputProps } from 'mobile-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | - |
| type | 类型，在原生基础上做了扩展。 | `HTMLInputTypeAttribute \| 'mobile' \| 'bankCard' \| 'idCard'` | `'text'` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean` | `false` |
| maxLength | 最大字符数 | `number` | - |
| disabledWhiteSpace | 禁止空字符 | `boolean` | `false` |
| max | 最大值，仅在 `type` 为 `number` 时生效。 | `number` | `Number.MAX_SAFE_INTEGER` |
| min | 最小值，仅在 `type` 为 `number` 时生效。 | `number` | `Number.MIN_SAFE_INTEGER` |
| precision | 数值精度，仅在 `type` 为 `number` 时生效。 | `number` | - |
| visibilityToggle | 是否显示密码切换按钮，仅在 `type` 为 `password` 时生效。 | `boolean` | `true` |
| iconRender | 自定义切换按钮，仅在 `type` 为 `password` 时生效。 | `(visibility: boolean) => ReactNode;` | - |
| inputProps | 透传 Input 组件属性 | [InputProps](https://mobile.ant.design/zh/components/input#属性) | - |

### TextArea - 文本域

<code src='./demos/text-area.tsx' />

#### API

```typescript
import { BizFormItemTextArea, BizFormItemTextAreaProps } from 'mobile-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | - |
| autoSize | 自适应内容高度 | `boolean \| { minRows?: number, maxRows?: number }` | `false` |
| rows | 行数 | `number` | `2` |
| maxLength | 最大字符数 | `number` | - |
| showCount | 显示字数，支持自定义渲染 | `boolean \| ((length: number, maxLength?: number) => ReactNode)` | - |
| textAreaProps | 透传 TextArea 组件属性 | [TextAreaProps](https://mobile.ant.design/zh/components/text-area#属性) | - |
