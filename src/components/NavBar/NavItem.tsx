import React from 'react';
import { useLocation } from 'react-router-dom';

import { FontSizes, FontWeights, responsiveSx } from '@/lib/ui';

import SvgImgIcon from '@/components/Common/SvgImgIcon';
import Row from '@/components/Common/Row';

import { Typography } from '@mui/material';
import NavPathOrLink from '@/components/Common/NavPathOrLink';
import { INavItem } from '@/hooks/nav/useNavItems';

const NavItem: React.FC<INavItem> = ({ path, img, minWidth, url }) => {
  const { pathname } = useLocation();

  const pathName = pathname.split('/')[1];

  const isSelected = pathName === path || (pathName === '' && path === 'rsvp');

  return (
    <Row
      minWidth={minWidth}
      sx={{
        ...responsiveSx({
          sm: {
            justifyContent: 'center',
            '&:first-child': {
              justifyContent: 'flex-start',
            },
            '&:last-child': {
              justifyContent: 'flex-end',
            },
          },
          lg: {
            gap: '32px',
          },
        }),
        '&:hover': {
          fontSize: FontSizes.lg,
        },
      }}
    >
      <NavPathOrLink path={path} url={url}>
        <Row gap={0.5} alignItems="center">
          <SvgImgIcon
            src={img.src}
            width={img.dimensions.width}
            height={img.dimensions.height}
          />
          <Typography
            color="text.primary"
            sx={{
              fontSize: isSelected ? FontSizes.lg : 'inherit',
              fontWeight: FontWeights.bold,
              cursor: 'pointer',
              width: 'max-content',
              zIndex: 1,
            }}
          >
            {path}
          </Typography>
        </Row>
      </NavPathOrLink>
    </Row>
  );
};

export default NavItem;
