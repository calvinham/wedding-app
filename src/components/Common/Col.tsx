import React from 'react';

import { StackProps, Stack } from '@mui/material';

const Col: React.FC<StackProps> = (props) => (
  <Stack direction="column" {...props} />
);

export default Col;
