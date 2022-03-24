---
group:
  title: 其他
---

# ScrollLoadView - 滚动加载视图

滚动加载视图

## 代码演示

### 基础用法

<code src='./demos/basic.tsx' />

### 自定义内容

<code src='./demos/define.tsx' />

### 展示优先级

如果 `loading` `done` `error` 都为 `true` ，展示优先级 `loading` -> `error` -> `done` 。

<code src='./demos/priority.tsx' />

### 滚动加载列表

结合 `rc-hooks` 的 [useLoadMore](https://doly-dev.github.io/rc-hooks/latest/index.html#/async/use-load-more) 可以很方便实现滚动底部加载

<code src='./demos/list.tsx' />

## API

除了以下参数，其余同 `div` 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 加载中 | `boolean` | `false` |
| done | 加载完成 | `boolean` | `false` |
| error | 加载失败 | `boolean` | `false` |
| text | 不同状态展示内容 | `{ default?: ReactNode; loading?: ReactNode; done?: ReactNode; error?: ReactNode; }` | `{ default: '滚动底部加载更多', loading: '加载中', done: '全部加载完成', error: '加载失败' }` |
| showLoadingIcon | 加载中时文本后显示加载图标 | `boolean` | `true` |
