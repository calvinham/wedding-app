import React from 'react';

import { Typography } from '@mui/material';

import { FontWeights, FontSizes, device } from '@/lib/ui';
import { invitationImg } from '@/assets';

import Col from '@/components/Common/Col';
import BouncingScrollArrow, {
  IBouncingScrollArrow,
} from '@/components/Rsvp/BouncingScrollArrow';
import MediaController from '@/components/Common/MediaController';

export type ILanding = Pick<IBouncingScrollArrow, 'handleScroll'>;

const LandingImg: React.FC<{}> = () => {
  return (
    <img
      src={invitationImg}
      alt="invitation"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  );
};

const LandingText: React.FC<{}> = () => {
  return (
    <Typography
      fontWeight={FontWeights.bold}
      textAlign="center"
      sx={{
        [device.lg]: {
          fontSize: `${FontSizes.xxl} !important`,
        },
        [device.sm]: {
          fontSize: `${FontSizes.xl} !important`,
        },
      }}
    >
      You&apos;re invited to the Wedding!
    </Typography>
  );
};

const Landing: React.FC<ILanding> = (props) => {
  return (
    <Col alignItems="center" height="100%">
      <Col
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        alignItems="center"
        width="100%"
        height="100%"
        maxWidth={{ sm: '1000px' }}
        gap={6}
      >
        <MediaController
          sm={
            <Col gap={4} pb={8}>
              <LandingText />
              <LandingImg />
            </Col>
          }
          lg={
            <>
              <LandingText />
              <LandingImg />
              <BouncingScrollArrow pb={4} {...props} />
            </>
          }
        />
      </Col>
      <MediaController
        sm={
          <BouncingScrollArrow
            position="relative"
            alignItems="center"
            zIndex={99}
            pb={4}
            {...props}
          />
        }
      />
    </Col>
  );
};

export default Landing;
