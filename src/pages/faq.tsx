import React from 'react';
import { Box } from '@mui/material';

import Page from '@/components/Common/Page';
import FaqList from '@/components/FAQ/faqList';

const Faq: React.FC<{}> = () => {
  return (
    <Page pt={4}>
      <Box mb="120px">
        <FaqList />
      </Box>
    </Page>
  );
};

export default Faq;
