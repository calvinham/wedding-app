import React from 'react';

import NavItem from '@/components/NavBar/NavItem';

import { Box } from '@mui/material';
import { AppPalette, NavBarHeights, responsiveSx } from '@/lib/ui';
import useNavItems from '@/hooks/nav/useNavItems';

const NavBar: React.FC<{}> = () => {
  const navItems = useNavItems();

  return (
    <Box
      width="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={999}
      sx={{ background: AppPalette.white }}
    >
      <Box
        sx={{
          alignItems: 'center',
          boxSizing: 'border-box',
          minHeight: NavBarHeights.lgPx,
          gap: 4,
          ...responsiveSx({
            sm: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridGap: 2,
              padding: 2,
            },
            lg: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              padding: 4,
            },
          }),
        }}
      >
        {navItems.map((item) => (
          <NavItem key={item.path} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
