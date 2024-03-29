---
order: 2
group:
  title: 数据录入
---

# BizFormItem - 表单项

基于 antd-mobile 的 Form.Item 扩展了数据转换、校验、布局

## 代码演示

### 所有表单项

<code src='./demos/item-all.tsx' />

## API

```typescript
import { BizFormItem, BizFormItemProps } from 'mobile-more';
```

除了以下属性，其余同 antd-mobile 的 [Form.Item](https://mobile.ant.design/zh/components/form#formitem) 。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extendRules | 扩展校验规则。如果需要覆盖，请使用 `rules` | `FormItemProps['rules']` | - |
| transform | 转换该字段值，表单提交时执行。 | `(value: any) => any` | - |
| justify | 水平对齐方式 | `'start' \| 'center' \| 'end'` | `'start'` |

## 扩展组件

下列组件是基于 BizFormItem 扩展，继承 BizFormItem 所有属性。

### AreaCode - 地区码

> 基于 `CascadePicker` ，输入和输出只包含最后一级数据，适用于只需要输入地区码的场景（不需要省市码）。
>
> 该组件不支持 transform 配置项。

<code src='./demos/area-code.tsx' />

#### API

```typescript
import { BizFormItemAreaCode, BizFormItemAreaCodeProps } from 'mobile-more';

type Option = Partial<Omit<CascaderOption, 'children'>> & {
  children?: Option[];
} & Record<string, any>;
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | `'请选择'` |
| readOnly | 只读。<br/>点击不弹出 Cascader 。 | `boolean` | - |
| title | Cascader 标题 | `ReactNode` | - |
| options | Cascader 树形的选项数据 | `Option[]` | - |
| mapKeys | 数据转换为 `label` `value` `disabled` `children` 键 | `{ label?: string; value?: string; disabled?: string; children?: string; }` | - |
| separator | 默认渲染当前值的分隔符 | `string` | `'/'` |
| renderCurrentValue | 自定义渲染当前选中值 | `(value: CascaderValue[] \| undefined, items: (CascaderOption \| null)[]) => string \| undefined;` | - |
| areaCodeProps | 透传 Cascader 组件属性 | [CascaderProps](https://mobile.ant.design/zh/components/cascader#属性) | - |

### Captcha - 验证码

<code src='./demos/captcha.tsx' />

#### API

```typescript
import { BizFormItemCaptcha, BizFormItemCaptchaProps } from 'mobile-more';

interface BizFormItemCaptchaProps
  extends BizFormItemInputProps,
    Pick<CaptchaButtonProps, 'initText' | 'runText' | 'resetText' | 'second'> {
  onGetCaptcha?: () => boolean | Promise<any>;
  captchaButtonProps?: CaptchaButtonProps;
}
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | `'请输入'` |
| onGetCaptcha | 点击按钮触发。用于验证手机号码或邮箱，请求获取验证码。如果返回 `false` 或 `Promise.reject()` 表示验证失败。 | `()=> boolean \| Promise<any>` | `()=>true` |
| initText | 按钮初始显示文本 | `string` | `获取验证码` |
| runText | 按钮倒计时显示文本，包含 `%s` 会自动替换为秒数 | `string` | `%s秒后重新获取` |
| resetText | 按钮倒计时结束显示文本 | `string` | `重新获取验证码` |
| second | 按钮倒计时时长，单位秒 | `number` | `60` |
| inputProps | 输入框的属性 | [InputProps](https://mobile.ant.design/zh/components/input#属性) | - |
| captchaButtonProps | 按钮的属性 | [CaptchaButtonProps](/components/captcha-button#api) | - |

### CascadePicker - 级联选择器

<code src='./demos/cascade-picker.tsx' />

#### API

```typescript
import { BizFormItemCascadePicker, BizFormItemCascadePickerProps } from 'mobile-more';

type Option = Partial<Omit<CascadePickerOption, 'children'>> & {
  children?: Option[];
} & Record<string, any>;
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | `'请选择'` |
| readOnly | 只读。<br/>点击不弹出 CascadePicker 。 | `boolean` | - |
| title | CascadePicker 标题 | `ReactNode` | - |
| options | CascadePicker 树形的选项数据 | `Option[]` | - |
| mapKeys | 数据转换为 `label` `value` `children` 键 | `{ label?: string; value?: string; children?: string; }` | - |
| names | 级联选项字段名解构，设置该字段后，`name` 将失效。 | `string[]` | - |
| separator | 默认渲染当前值的分隔符 | `string` | `'/'` |
| renderCurrentValue | 自定义渲染当前选中值 | `(value: PickerValue[], items: (PickerColumnItem \| null)[]) => string \| undefined;` | - |
| cascadePickerProps | 透传 CascadePicker 组件属性 | [CascadePickerProps](https://mobile.ant.design/zh/components/picker#cascadepicker) | - |

### Cascader - 级联选择

<code src='./demos/cascader.tsx' />

#### API

```typescript
import { BizFormItemCascader, BizFormItemCascaderProps } from 'mobile-more';

type Option = Partial<Omit<CascaderOption, 'children'>> & {
  children?: Option[];
} & Record<string, any>;
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | `'请选择'` |
| readOnly | 只读。<br/>点击不弹出 Cascader 。 | `boolean` | - |
| title | Cascader 标题 | `ReactNode` | - |
| options | Cascader 树形的选项数据 | `Option[]` | - |
| mapKeys | 数据转换为 `label` `value` `disabled` `children` 键 | `{ label?: string; value?: string; disabled?: string; children?: string; }` | - |
| names | 级联选项字段名解构，设置该字段后，`name` 将失效。 | `string[]` | - |
| separator | 默认渲染当前值的分隔符 | `string` | `'/'` |
| renderCurrentValue | 自定义渲染当前选中值 | `(value: CascaderValue[] \| undefined, items: (CascaderOption \| null)[]) => string \| undefined;` | - |
| cascaderProps | 透传 Cascader 组件属性 | [CascaderProps](https://mobile.ant.design/zh/components/cascader#属性) | - |

### Checkbox - 复选框

<code src='./demos/checkbox.tsx' />

#### API

```typescript
import { BizFormItemCheckbox, BizFormItemCheckboxProps } from 'mobile-more';

type Option = {
  label?: ReactNode;
  value?: CheckboxValue;
  disabled?: boolean;
  [key: string]: any;
};
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 可选项 | `Option[]` | `[]` |
| fieldNames | 自定义 `label` `value` `disabled` 字段名 | `{ label?: string; value?: string; disabled?: string }` | - |
| block | 是否渲染为块级元素 | `boolean` | `false` |
| icon | 自定义 `icon` 图标 | `(checked: boolean) => React.ReactNode` | - |
| spaceProps | 透传 Space 组件属性 | [SpaceProps](https://mobile.ant.design/zh/components/space#属性) | - |
| checkboxProps | 透传 Checkbox 组件属性 | [CheckboxProps](https://mobile.ant.design/zh/components/checkbox#checkbox) | - |
| checkboxGroupProps | 透传 Checkbox.Group 组件属性 | [CheckboxGroupProps](https://mobile.ant.design/zh/components/checkbox#checkboxgroup) | - |

### CheckList - 勾选列表

**注意：未开启 multiple 时，将视为单选，值为 string**

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
| placeholder | 占位符，提示文本 | `string` | `'请选择'` |
| readOnly | 只读。<br/>点击不弹出 CheckListPopup 。 | `boolean` | - |
| title | CheckListPopup 标题 | `ReactNode` | - |
| loading | 加载状态 | `boolean` | - |
| options | CheckList 选项数据 | `Option[]` | - |
| fieldNames | 自定义 options 数据节点 `label` `value` `readOnly` `disabled` 字段名 | `{ label?: string; value?: string; readOnly?: string; disabled?: string; }` | - |
| radioMode | 单选模式，不允许取消选择。仅在 `multiple=false` 时生效。 | `boolean` | `true` |
| multiple | 多选 | `boolean` | `false` |
| renderCurrentValue | 自定义渲染当前选中值 | `(value: string \| string[] \| undefined, items?: (Option \| null)[]) => string \| undefined;` | - |
| separator | 默认渲染当前值的分隔符，仅在 `multiple=true` 时生效。 | `string` | `' - '` |
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
| placeholder | 占位符，提示文本 | `string` | `'请选择'` |
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
| placeholder | 占位符，提示文本 | `string` | `'请输入'` |
| type | 类型，在原生基础上做了扩展。 | `HTMLInputTypeAttribute \| 'mobile' \| 'bankCard' \| 'idCard'` | `'text'` |
| format | 是否格式化。仅在设置为 `type=mobile \| bankCard \| idCard` 时生效。<br/>手机号码和银行卡号格式化，身份证号`x`大写。 | `boolean` | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean` | `false` |
| maxLength | 最大字符数 | `number` | - |
| disabledWhiteSpace | 去除头尾空格 | `boolean` | `false` |
| max | 最大值，仅在 `type` 为 `number` 时生效。 | `number` | `Number.MAX_SAFE_INTEGER` |
| min | 最小值，仅在 `type` 为 `number` 时生效。 | `number` | `Number.MIN_SAFE_INTEGER` |
| precision | 数值精度，仅在 `type` 为 `number` 时生效。 | `number` | - |
| visibilityToggle | 是否显示密码切换按钮，仅在 `type` 为 `password` 时生效。 | `boolean` | `true` |
| iconRender | 自定义切换按钮，仅在 `type` 为 `password` 时生效。 | `(visibility: boolean) => ReactNode;` | - |
| inputProps | 透传 Input 组件属性 | [InputProps](https://mobile.ant.design/zh/components/input#属性) | - |

### Picker - 选择器

<code src='./demos/picker.tsx' />

#### API

```typescript
import { BizFormItemPicker, BizFormItemPickerProps } from 'mobile-more';

type SuperPickerColumnItem = Partial<PickerColumnItem> & Record<string, any>;
type SuperPickerColumn = (string | SuperPickerColumnItem)[];
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | `'请选择'` |
| readOnly | 只读。<br/>点击不弹出 Picker 。 | `boolean` | - |
| title | Picker 标题 | `ReactNode` | - |
| columns | Picker 二维数组选项数据 | `SuperPickerColumn[] \| ((value?: PickerValue[]) => SuperPickerColumn[])` | - |
| mapKeys | 数据转换为 `label` `value` 键 | `{ label?: string; value?: string; }` | - |
| names | 级联选项字段名解构，设置该字段后，`name` 将失效。 | `string[]` | - |
| separator | 默认渲染当前值的分隔符 | `string` | `' - '` |
| renderCurrentValue | 自定义渲染当前选中值 | `(value: PickerValue[], items: (PickerColumnItem \| null)[]) => string \| undefined;` | - |
| pickerProps | 透传 Picker 组件属性 | [PickerProps](https://mobile.ant.design/zh/components/picker#属性) | - |

### Radio - 单选框

<code src='./demos/radio.tsx' />

#### API

```typescript
import { BizFormItemRadio, BizFormItemRadioProps } from 'mobile-more';

type Option = {
  label?: ReactNode;
  value?: RadioValue;
  disabled?: boolean;
  [key: string]: any;
};
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 可选项 | `Option[]` | `[]` |
| fieldNames | 自定义 `label` `value` `disabled` 字段名 | `{ label?: string; value?: string; disabled?: string }` | - |
| block | 是否渲染为块级元素 | `boolean` | `false` |
| icon | 自定义 `icon` 图标 | `(checked: boolean) => React.ReactNode` | - |
| spaceProps | 透传 Space 组件属性 | [SpaceProps](https://mobile.ant.design/zh/components/space#属性) | - |
| radioProps | 透传 Radio 组件属性 | [RadioProps](https://mobile.ant.design/zh/components/radio#radio) | - |
| radioGroupProps | 透传 Radio.Group 组件属性 | [RadioGroupProps](https://mobile.ant.design/zh/components/radio#radiogroup) | - |

### Rate - 评分

<code src='./demos/rate.tsx' />

#### API

```typescript
import { BizFormItemRate, BizFormItemRateProps } from 'mobile-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| allowHalf | 是否允许半选 | `boolean` | `false` |
| character | 自定义字符 | `ReactNode` | `<StarFilled />` |
| count | star 总数 | `number` | `5` |
| readOnly | 只读，无法进行交互 | `boolean` | `false` |
| rateProps | 透传 Rate 组件属性 | [RateProps](https://mobile.ant.design/zh/components/rate#属性) | - |

### Selector - 选择组

**注意：未开启 multiple 时，将视为单选，值为 string**

<code src='./demos/selector.tsx' />

#### API

```typescript
import { BizFormItemSelector, BizFormItemSelectorProps } from 'mobile-more';

type Option = Partial<SelectorOption<SelectorValue>> & Record<string, any>;
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 行展示数 | `number` | - |
| options | 可选项 | `Option[]` | - |
| mapKeys | 数据转换为 `label` `value` `descriotion` `disabled` 键 | `{ label?: string; value?: string; description?: string; disabled?: string; }` | - |
| radioMode | 单选模式，不允许取消选择。仅在 `multiple=false` 时生效。 | `boolean` | `true` |
| multiple | 多选 | `boolean` | `false` |
| showCheckMark | 是否显示对勾角标 | `boolean` | `true` |
| selectorProps | 透传 Selector 组件属性 | [SelectorProps](https://mobile.ant.design/zh/components/selector#属性) | - |

### Slider - 滑块输入条

<code src='./demos/slider.tsx' />

#### API

```typescript
import { BizFormItemSlider, BizFormItemSliderProps } from 'mobile-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| marks | 刻度标记 | `{ [key: number]: React.ReactNode }` | - |
| step | 步距，取值必须大于 0，并且可被 `(max - min)` 整除。当 `marks` 不为空对象时，`step` 的配置失效 | `number` | `1` |
| ticks | 是否显示刻度 | `boolean` | `false` |
| range | 是否为双滑块 | `boolean` | `false` |
| onAfterChange | 与 `touchend` 触发时机一致，把当前值作为参数传入 | `(value: number \| [number, number]) => void` | - |
| icon | 滑块的图标 | `ReactNode` | - |
| sliderProps | 透传 Slider 组件属性 | [SliderProps](https://mobile.ant.design/zh/components/slider#属性) | - |

### Stepper - 步进器

<code src='./demos/stepper.tsx' />

#### API

```typescript
import { BizFormItemStepper, BizFormItemStepperProps } from 'mobile-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| marks | 刻度标记 | `{ [key: number]: React.ReactNode }` | - |
| step | 步距，取值必须大于 0，并且可被 `(max - min)` 整除。当 `marks` 不为空对象时，`step` 的配置失效 | `number` | `1` |
| ticks | 是否显示刻度 | `boolean` | `false` |
| range | 是否为双滑块 | `boolean` | `false` |
| onAfterChange | 与 `touchend` 触发时机一致，把当前值作为参数传入 | `(value: number \| [number, number]) => void` | - |
| icon | 滑块的图标 | `ReactNode` | - |
| sliderProps | 透传 Slider 组件属性 | [SliderProps](https://mobile.ant.design/zh/components/slider#属性) | - |

### Switch - 开关

<code src='./demos/switch.tsx' />

#### API

```typescript
import { BizFormItemSwitch, BizFormItemSwitchProps } from 'mobile-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 加载状态 | `boolean` | `false` |
| beforeChange | 变化前执行 | `(value: boolean) => Promise<void>` | - |
| checkedText | 选中时的内容 | `ReactNode` | - |
| uncheckedText | 非选中时的内容 | `ReactNode` | - |
| switchProps | 透传 Switch 组件属性 | [SwitchProps](https://mobile.ant.design/zh/components/switch#属性) | - |

### TextArea - 文本域

<code src='./demos/text-area.tsx' />

#### API

```typescript
import { BizFormItemTextArea, BizFormItemTextAreaProps } from 'mobile-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 占位符，提示文本 | `string` | `'请输入'` |
| autoSize | 自适应内容高度 | `boolean \| { minRows?: number, maxRows?: number }` | `false` |
| rows | 行数 | `number` | `2` |
| maxLength | 最大字符数 | `number` | - |
| showCount | 显示字数，支持自定义渲染 | `boolean \| ((length: number, maxLength?: number) => ReactNode)` | - |
| textAreaProps | 透传 TextArea 组件属性 | [TextAreaProps](https://mobile.ant.design/zh/components/text-area#属性) | - |
