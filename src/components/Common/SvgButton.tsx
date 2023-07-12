import React from 'react';

import { Box, ButtonBase, ButtonBaseProps } from '@mui/material';

import FullSizeImg from '@/components/Common/FullSizeImg';

export type ISvgButton = {
  src: string;
  alt: string;
} & ButtonBaseProps;

const SvgButton: React.FC<ISvgButton> = ({ src, alt, ...buttonProps }) => {
  return (
    <ButtonBase
      {...buttonProps}
      sx={{
        ...buttonProps.sx,
      }}
    >
      <Box>
        <FullSizeImg
          src={src}
          alt={alt}
          grayscale={buttonProps.disabled ? 50 : undefined}
        />
      </Box>
    </ButtonBase>
  );
};

export default SvgButton;
