import React from 'react';

import { Typography } from '@mui/material';

import { numToPx } from '@/lib/util';

import { WithChildren } from '@/lib/types';
import { APP_MAX_WIDTH } from '@/lib/ui';

import Col from '@/components/Common/Col';

export type IFormFrame = {
  title: string;
} & WithChildren;

const FormFrame: React.FC<IFormFrame> = ({ title, children }) => {
  return (
    <Col width="100%" height="100%" alignItems="center" py={{ xs: 8, md: 8 }}>
      <Col maxWidth={numToPx(APP_MAX_WIDTH)} height="100%" width="100%">
        <Typography variant="h3" textAlign="center">
          {title}
        </Typography>
        {children}
      </Col>
    </Col>
  );
};

export default FormFrame;
