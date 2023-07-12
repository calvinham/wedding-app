import React, { useCallback } from 'react';

import { Box, Typography } from '@mui/material';

import { FontSizes, FontWeights, NavBarHeights, responsiveSx } from '@/lib/ui';
import { alpineLoopImg, rsvpButtonTextImg } from '@/assets';

import Col from '@/components//Common/Col';
import FullSizeImg from '@/components/Common/FullSizeImg';
import MediaController from '@/components//Common/MediaController';
import { useAppDispatch } from '@/state';
import { RSVPFlowState, updateFlowState } from '@/state/reducers/rsvp';

const RsvpInfoText: React.FC<{}> = () => (
  <Col gap={1}>
    <Typography
      textAlign="center"
      fontWeight={FontWeights.bold}
      sx={{
        ...responsiveSx({
          sm: {
            fontSize: FontSizes.lg,
          },
          lg: {
            fontSize: FontSizes.xxl,
          },
        }),
      }}
    >
      8841 N Alpine Loop Rd. Sundance, UT 84604
    </Typography>
    <Typography
      textAlign="center"
      sx={{
        ...responsiveSx({
          sm: {
            fontSize: FontSizes.lg,
          },
          lg: {
            fontSize: FontSizes.xl,
          },
        }),
      }}
    >
      September 29, 5 PM - 10 PM
    </Typography>
  </Col>
);

const RsvpInfo: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const handleStartRsvpFlow = useCallback(() => {
    dispatch(updateFlowState(RSVPFlowState.NAME));
  }, [dispatch]);

  return (
    <Col
      alignItems="center"
      height="100%"
      pb={{
        xs: NavBarHeights.smPx,
        md: NavBarHeights.lgPx,
      }}
    >
      <Col
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="100%"
        maxWidth={{ sm: '1000px' }}
        gap={{ xs: 1, md: 6 }}
      >
        <MediaController
          lg={
            <>
              <RsvpInfoText />
              <FullSizeImg src={alpineLoopImg} alt="Alpine-Loop-wedding-rsvp" />
            </>
          }
          sm={
            <>
              <Box />
              <Col gap={2} pb={2}>
                <RsvpInfoText />
                <FullSizeImg
                  src={alpineLoopImg}
                  alt="Alpine-Loop-wedding-rsvp"
                />
              </Col>
            </>
          }
        />
        <Box
          onClick={handleStartRsvpFlow}
          sx={{ width: '244px', cursor: 'pointer' }}
        >
          <FullSizeImg src={rsvpButtonTextImg} alt="RSVP-button-text" />
        </Box>
      </Col>
    </Col>
  );
};

export default RsvpInfo;
