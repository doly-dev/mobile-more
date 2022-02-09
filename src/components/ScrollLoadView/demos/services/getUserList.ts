/* eslint-disable @typescript-eslint/no-unused-vars */
import Mock from 'mockjs';
import waitTime from '../../../../utils/waitTime';

type DataItem = {
  id: string;
  name: string;
  gender: 'male' | 'female';
  email: string;
  disabled: boolean;
};

type Result = {
  data: DataItem[];
  total: number;
  errCode: string;
  errMsg: string;
};

export default async function getUserList({ current = 1, pageSize = 5 }) {
  await waitTime();
  return Mock.mock({
    [`data|${pageSize}`]: [
      {
        id: '@guid',
        name: '@cname',
        'gender|1': ['male', 'female'],
        email: '@email',
        disabled: false
      }
    ],
    total: 15,
    errCode: '00',
    errMsg: ''
  }) as Result;
}
