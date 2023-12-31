import { receptionImg } from '@/assets';
import Col from '@/components/Common/Col';

import { FontWeights, NavBarHeights } from '@/lib/ui';
import { Typography } from '@mui/material';
import React from 'react';
import FullSizeImg from '../Common/FullSizeImg';

const copy = {
  address: '20 Red Fox Court, Chico CA 95973',
  date: 'October 28th, 5 PM - 8 PM',
  rsvp: "No RSVP required, but feel free to text Ryann or Ryan if you're coming :)",
};

const ReceptionDetails: React.FC<{}> = () => (
  <Col
    alignItems="center"
    height="100%"
    py={{
      xs: NavBarHeights.smPx,
      md: NavBarHeights.lgPx,
    }}
  >
    <Col
      alignItems="center"
      justifyContent="space-between"
      spacing={3}
      width="100%"
      height="100%"
    >
      <Col spacing={2} alignItems="center" width="100%">
        <Typography variant="h1" textAlign="center">
          {copy.address}
        </Typography>
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight={FontWeights.base}
        >
          {copy.date}
        </Typography>
      </Col>
      <FullSizeImg alt="reception" src={receptionImg} />
      <Col alignItems="center">
        <Typography
          variant="h2"
          fontWeight={FontWeights.base}
          textAlign="center"
        >
          {copy.rsvp}
        </Typography>
      </Col>
    </Col>
  </Col>
);

export default ReceptionDetails;
