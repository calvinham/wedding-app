import React from 'react';

import { Box, BoxProps } from '@mui/material';
import { downArrowIconImg } from '@/assets';

import SvgImgIcon from '@/components/Common/SvgImgIcon';
import Bounce from '@/components/Common/Bounce';

export type IBouncingScrollArrow = {
  handleScroll: () => void;
} & Omit<BoxProps, 'onClick'>;

const BouncingScrollArrow: React.FC<IBouncingScrollArrow & BoxProps> = ({
  handleScroll,
  ...boxProps
}) => {
  return (
    <Box {...boxProps}>
      <Bounce>
        <Box sx={{ cursor: 'pointer' }} onClick={handleScroll}>
          <SvgImgIcon src={downArrowIconImg} />
        </Box>
      </Bounce>
    </Box>
  );
};

export default BouncingScrollArrow;
