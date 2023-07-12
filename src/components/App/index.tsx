import React from 'react';

import Providers from '@/components/App/Providers';
import Routes from '@/components/App/Routes';

import NavBar from '@/components/NavBar/NavBar';
import { NavBarHeights, responsiveSx } from '@/lib/ui';
import Loader from '@/components/App/Loader';
import { Box } from '@mui/material';

const App: React.FC<{}> = () => {
  return (
    <Providers>
      <Loader />
      <Box width="100%" height="100vh">
        <Box width="100%" height="100%">
          <NavBar />
          <Box
            sx={{
              position: 'relative',
              boxSizing: 'border-box',
              ...responsiveSx({
                sm: {
                  top: NavBarHeights.smPx,
                  height: `calc(100vh - ${NavBarHeights.smPx})`,
                },
                lg: {
                  top: NavBarHeights.lgPx,
                  height: `calc(100vh - ${NavBarHeights.lgPx})`,
                },
              }),
            }}
          >
            <Routes />
          </Box>
        </Box>
      </Box>
    </Providers>
  );
};

export default App;
