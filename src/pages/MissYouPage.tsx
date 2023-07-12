import React from 'react';

import SvgImgIcon from '@/components/Common/SvgImgIcon';
import Col from '@/components/Common/Col';
import Page from '@/components/Common/Page';
import NavBarOffset from '@/components/Common/NavBarOffset';

import { missYouImg } from '@/assets';

const MissYou: React.FC<{}> = () => {
  return (
    <Page pageMaxWidth={'xl'}>
      <NavBarOffset>
        <Col maxWidth="716px" width="100%">
          <SvgImgIcon src={missYouImg} />
        </Col>
      </NavBarOffset>
    </Page>
  );
};

export default MissYou;
