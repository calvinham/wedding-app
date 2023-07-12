import React from 'react';

import NavItem from '@/components/NavBar/NavItem';
import navItems from '@/components/NavBar/navItems';
import { Box } from '@mui/material';
import { responsiveSx } from '@/lib/ui';

const NavBar: React.FC<{}> = () => {
  return (
    <Box
      width="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={999}
      sx={{ background: 'yellow' }}
    >
      <Box
        sx={{
          alignItems: 'center',
          boxSizing: 'border-box',
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
