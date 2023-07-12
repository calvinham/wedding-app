import useRsvpFlowState from '@/hooks/rsvp/useRsvpFlowState';
import { Box, Drawer } from '@mui/material';
import React from 'react';
import { RSVPFlowState } from '@/state/reducers/rsvp';

import { useAllInvitations } from '@/hooks/invitations';

import RSVP_FORM_CONFIG from '@/components/Rsvp/formConfig';

import FormFrame from '@/components/Common/FormFrame';
import NameForm from '@/components/Rsvp/form/NameForm';
import AttendanceForm from '@/components/Rsvp/form/AttendanceForm';
import { PageMargins } from '@/lib/ui';
import HasPlusOneForm from './form/HasPlusOneForm';
import PlusOneNameForm from './form/PlusOneNameForm';

export type IRSVPDrawer = {
  invitations: ReturnType<typeof useAllInvitations>;
};

const RSVPDrawer: React.FC<IRSVPDrawer> = ({ invitations }) => {
  const [flowState, util] = useRsvpFlowState();

  const { stepHasForm: open, close } = util;

  const handleOnClose = (e: any, reason: 'escapeKeyDown' | 'backdropClick') => {
    if (reason == 'escapeKeyDown') {
      e.preventDefault();
      return;
    }
    close();
  };

  return (
    <Drawer anchor="bottom" open={open} onClose={handleOnClose}>
      <Box height="100vh" width="100%" px={PageMargins.x}>
        <FormFrame title={RSVP_FORM_CONFIG[flowState].title}>
          {invitations.isLoading || !invitations.data ? (
            <>loading...</>
          ) : open ? (
            <>
              {flowState === RSVPFlowState.NAME ? (
                <NameForm invitations={invitations} />
              ) : null}
              {flowState === RSVPFlowState.ATTENDING ? (
                <AttendanceForm />
              ) : null}
              {flowState === RSVPFlowState.HAS_PLUS_ONE ? (
                <HasPlusOneForm />
              ) : null}
              {flowState === RSVPFlowState.PLUS_ONE_NAME ? (
                <PlusOneNameForm />
              ) : null}
            </>
          ) : (
            <></>
          )}
        </FormFrame>
      </Box>
    </Drawer>
  );
};

export default RSVPDrawer;
