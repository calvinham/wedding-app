import React from 'react';

import { keyframes } from '@mui/system';
import { Box } from '@mui/material';

import { WithChildren } from '@/lib/types';

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export type IBounce = {
  ms?: number;
} & WithChildren;

const Bounce: React.FC<IBounce> = ({ children, ms }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        animation: `${bounceAnimation} ${ms || 1000}ms infinite`,
      }}
    >
      {children}
    </Box>
  );
};

export default Bounce;
