import React from 'react';
import Col from '@/components/Common/Col';
import { PageMargins } from '@/lib/ui';
import { Breakpoint, Container, StackProps } from '@mui/material';

type IPage = {
  pageMaxWidth?: false | Breakpoint | undefined;
  pageRef?: React.MutableRefObject<HTMLDivElement | null>;
} & StackProps;

const Page: React.FC<IPage> = ({ pageMaxWidth, pageRef, ...props }) => {
  return (
    <Container
      sx={{
        height: '100%',
        alignItems: 'center',
        position: 'relative',
      }}
      maxWidth={pageMaxWidth}
      ref={pageRef}
    >
      <Col width="100%" height="100%" flex={1} px={PageMargins.x} {...props} />
    </Container>
  );
};

export default Page;
