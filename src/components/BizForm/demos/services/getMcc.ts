import { waitTime } from 'util-helpers';

export default async function getMcc() {
  await waitTime();

  return {
    data: [
      {
        code: 130,
        name: '铁路售票类',
        children: [
          {
            code: 1071,
            name: '国家铁路总公司'
          },
          {
            code: 1072,
            name: '铁路客运'
          }
        ]
      },
      {
        code: 131,
        name: '烟草类',
        children: [
          {
            code: 115123,
            name: '烟草配送'
          }
        ]
      },
      {
        code: 132,
        name: '一般服务类',
        children: [
          {
            code: 104026,
            name: '照片洗印服务'
          },
          {
            code: 104037,
            name: '电器设备维修'
          },
          {
            code: 104038,
            name: '空调、制冷设备维修'
          },
          {
            code: 104039,
            name: '小家电维修 '
          },
          {
            code: 104058,
            name: '法律事务'
          },
          {
            code: 104068,
            name: '工业设计、建筑与工程设计'
          },
          {
            code: 104069,
            name: '装修装潢服务'
          },
          {
            code: 104070,
            name: '会计、审计、财务服务'
          }
        ]
      },
      {
        code: 133,
        name: '一般票据类',
        children: [
          {
            code: 11191,
            name: '金融机构－人工现金支付'
          },
          {
            code: 11194,
            name: '非金融机构提供的金融类服务'
          }
        ]
      }
    ]
  };
}
