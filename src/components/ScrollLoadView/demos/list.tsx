import * as React from 'react';
import { ScrollLoadView } from 'mobile-more';
import { useLoadMore } from 'rc-hooks';
import { List } from 'antd-mobile';
import getUserList from './services/getUserList';

function Demo() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { noMore, loading, loadMore, data, error } = useLoadMore(
    ({ current }) => {
      return getUserList({
        current
      }).then((res) => ({
        list: res.data,
        total: res.total
      }));
    },
    {
      target: () => containerRef.current,
      isNoMore: (result) => !!result && result.list.length >= result.total
    }
  );

  return (
    <div ref={containerRef} style={{ height: 300, overflow: 'auto' }}>
      <List header="用户列表">
        {data?.list.map((item) => (
          <List.Item key={item.id} description={item.email}>
            {item.name}
          </List.Item>
        ))}
      </List>
      <ScrollLoadView
        loading={loading}
        done={noMore}
        error={!!error}
        text={{ default: '点击或滚动底部加载更多' }}
        onClick={loadMore}
      />
    </div>
  );
}

export default Demo;
