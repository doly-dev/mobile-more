import { sleep } from 'ut2';

export default async function getBanks() {
  await sleep();

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
