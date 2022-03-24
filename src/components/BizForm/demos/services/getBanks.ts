import { waitTime } from 'util-helpers';

export default async function getBanks() {
  await waitTime();

  return {
    data: [
      {
        name: '兴业银行',
        code: 'CIB'
      },
      {
        name: '交通银行',
        code: 'COMM'
      },
      {
        name: '泉州银行',
        code: 'BOQZ'
      }
    ]
  };
}
