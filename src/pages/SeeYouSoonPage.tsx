import React from 'react';

import Col from '@/components/Common/Col';
import NavBarOffset from '@/components/Common/NavBarOffset';
import Page from '@/components/Common/Page';
import SvgImgIcon from '@/components/Common/SvgImgIcon';

import { seeYouSoonImg } from '@/assets';

const SeeYouSoonPage: React.FC<{}> = () => {
  return (
    <Page pageMaxWidth={'xl'}>
      <NavBarOffset>
        <Col maxWidth="1026px" width="100%">
          <SvgImgIcon src={seeYouSoonImg} />
        </Col>
      </NavBarOffset>
    </Page>
  );
};

export default SeeYouSoonPage;
