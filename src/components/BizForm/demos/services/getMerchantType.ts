import { sleep } from 'ut2';

export default async function getMerchantType() {
  await sleep();

  return {
    data: [
      {
        label: '有限责任公司',
        value: '1'
      },
      {
        label: '股份有限责任公司',
        value: '2'
      },
      {
        label: '私营合伙企业',
        value: '3'
      },
      {
        label: '私营独资企业',
        value: '4'
      },
      {
        label: '个体工商户',
        value: '5'
      },
      {
        label: '非公司企业法人',
        value: '6'
      }
    ]
  };
}
