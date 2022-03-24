import { waitTime } from 'util-helpers';
import LicenseBase64 from './licese-base64';

export default async function getLicenseInfo() {
  await waitTime();

  return {
    data: {
      businessLicenseInfo: {
        address: '张杨北路x弄',
        areaCode: '310115',
        constraintBusiness: [132, 104039],
        endDate: '9999-12-31',
        image: LicenseBase64,
        licenseNo: '132435467890098765',
        merchantType: '4',
        startDate: '2022-03-23'
      }
    }
  };
}
