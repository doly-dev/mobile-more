import { waitTime } from 'util-helpers';

export default async function getOperator() {
  await waitTime();

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
