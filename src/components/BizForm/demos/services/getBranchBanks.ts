import { sleep } from 'ut2';
import Mockjs from 'mockjs';

export default async function getBranchBanks({ areaCode = '', keyword = '' } = {}) {
  await sleep();

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
