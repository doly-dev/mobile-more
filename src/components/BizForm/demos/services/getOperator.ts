import { sleep } from 'ut2';

export default async function getOperator() {
  await sleep();

  return {
    data: [
      {
        code: 'admin',
        name: 'admin'
      },
      {
        code: 'abc',
        name: '测试'
      }
    ]
  };
}
