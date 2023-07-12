import React from 'react';

import { missYouImg } from '@/assets';
import SvgImgIcon from '@/components/Common/SvgImgIcon';
import Col from '@/components/Common/Col';
import Page from '@/components/Common/Page';
import { NavBarHeights } from '@/lib/ui';

const MissYou: React.FC<{}> = () => {
  return (
    <Page pageMaxWidth={'xl'}>
      <Col
        height="100%"
        justifyContent="center"
        alignItems="center"
        mb={{ xs: NavBarHeights.smPx, md: NavBarHeights.lgPx }}
      >
        <Col sx={{ maxWidth: '715px', width: '100%' }}>
          <SvgImgIcon src={missYouImg} />
        </Col>
      </Col>
    </Page>
  );
};

export default MissYou;
