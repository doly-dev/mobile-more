import * as React from 'react';
import { useAsync } from 'rc-hooks';
import { BizFormItemCheckList, BizFormItemCheckListProps } from 'mobile-more';
import getBranchBanks from '../services/getBranchBanks';

interface ItemBranchBankProps extends Omit<BizFormItemCheckListProps, 'options'> {
  areaCode?: string;
}

const ItemBranchBank: React.FC<ItemBranchBankProps> = ({ areaCode, ...restProps }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const { data = [], loading } = useAsync(
    async () => {
      if (areaCode) {
        return getBranchBanks({ areaCode, keyword: searchValue }).then((res) => res.data);
      }
      return [];
    },
    {
      loadingDelay: 1100,
      debounceInterval: 300,
      refreshDeps: [areaCode, searchValue]
    }
  );

  return (
    <BizFormItemCheckList
      options={data}
      fieldNames={{ label: 'name', value: 'name' }}
      checkListPopupProps={{
        showSearch: true,
        searchValue,
        onSearch: setSearchValue,
        filterOption: () => true, // 通过服务端请求，客户端无需过虑
        emptyProps: {
          description: '暂无数据，输入关键词试试'
        },
        bodyStyle: {
          height: '50vh'
        },
        loading
      }}
      transform={(value) => value[0]}
      {...restProps}
    />
  );
};

export default ItemBranchBank;
