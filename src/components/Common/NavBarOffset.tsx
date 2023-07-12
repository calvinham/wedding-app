import React from 'react';
import { StackProps } from '@mui/material';
import Col from '@/components/Common/Col';
import { NavBarHeights } from '@/lib/ui';

const NavBarOffset: React.FC<StackProps> = (props) => {
  return (
    <Col
      height="100%"
      justifyContent="center"
      alignItems="center"
      pb={{ xs: NavBarHeights.smPx, md: NavBarHeights.lgPx }}
      {...props}
    />
  );
};

export default NavBarOffset;
