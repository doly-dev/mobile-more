import * as React from 'react';
import { Grid } from 'antd-mobile';
import ImageWithService from './components/ImageWithService';

function Demo() {
  const idCardInfo = {
    cardPersonFssId: 'al12',
    cardNationalFssId: '12z1765'
  };

  return (
    <Grid columns={2} gap={30}>
      <Grid.Item>
        <ImageWithService
          height={100}
          fit="cover"
          border="dashed"
          preview
          name="法人身份证人像面"
          fssid={idCardInfo.cardPersonFssId}
        />
      </Grid.Item>
      <Grid.Item>
        <ImageWithService
          height={100}
          fit="cover"
          border="dashed"
          preview
          name="法人身份证国徽面"
          fssid={idCardInfo.cardNationalFssId}
        />
      </Grid.Item>
    </Grid>
  );
}

export default Demo;
