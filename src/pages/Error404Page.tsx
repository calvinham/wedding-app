import React from 'react';

import { invitationImg } from '@/assets';
import Col from '@/components/Common/Col';
import { Button, Typography } from '@mui/material';
import Page from '@/components/Common/Page';

import { NavBarHeights } from '@/lib/ui';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { SLUGS } from '@/components/App/slugs';

const Error404Page: React.FC<{}> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${SLUGS.reception}`);
  };

  return (
    <Page pageMaxWidth={'xl'}>
      <Col
        height="100%"
        alignItems="center"
        justifyContent="space-around"
        py={{
          xs: NavBarHeights.smPx,
          md: NavBarHeights.lgPx,
        }}
        spacing={5}
      >
        <Col spacing={2}>
          <Typography variant="h2" textAlign="center">
            Whoops! Looks like you&apos;re lost
          </Typography>
          <Typography textAlign="center">
            Click&nbsp;
            <Typography
              component="span"
              sx={{
                cursor: 'pointer',
                ':hover': {
                  textDecoration: 'underline',
                },
              }}
              onClick={handleClick}
            >
              here
            </Typography>
            &nbsp;to go back
          </Typography>
        </Col>
        <img
          src={invitationImg}
          alt="invitation"
          style={{
            width: '75%',
            height: 'auto',
          }}
        />
        <Box />
        <Box />
      </Col>
    </Page>
  );
};

export default Error404Page;
