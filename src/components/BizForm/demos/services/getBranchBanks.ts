import { waitTime } from 'util-helpers';
import Mockjs from 'mockjs';

export default async function getBranchBanks({ areaCode = '', keyword = '' } = {}) {
  await waitTime();

  const res = Mockjs.mock({
    'data|5-15': [
      {
        name: `${areaCode}${keyword}@cword(5,7)`,
        code: '@word(3,5)'
      }
    ]
  });

  // console.log(res);

  return res;
}
