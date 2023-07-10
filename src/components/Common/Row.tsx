import React from 'react';

import { StackProps, Stack } from '@mui/material';

const Row: React.FC<StackProps> = (props) => (
  <Stack direction="row" {...props} />
);

export default Row;
