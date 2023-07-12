import React from 'react';

import { Box, ButtonBase, ButtonBaseProps } from '@mui/material';

import { numToPx } from '@/lib/util';

import FullSizeImg from '@/components/Common/FullSizeImg';

export type ISvgButton = {
  src: string;
  alt: string;
  maxWidth?: number;
} & Omit<ButtonBaseProps, 'maxWidth'>;

const SvgButton: React.FC<ISvgButton> = ({
  src,
  alt,
  maxWidth,
  ...buttonProps
}) => {
  return (
    <Box
      sx={{
        maxWidth: maxWidth ? numToPx(maxWidth) : undefined,
      }}
    >
      <ButtonBase {...buttonProps}>
        <FullSizeImg
          src={src}
          alt={alt}
          grayscale={buttonProps.disabled ? 50 : undefined}
        />
      </ButtonBase>
    </Box>
  );
};

export default SvgButton;
