import useRsvpFlowState from '@/hooks/rsvp/useRsvpFlowState';
import { Box, Drawer } from '@mui/material';
import React from 'react';
import { RSVPFlowState } from '@/state/reducers/rsvp';

import { useAllInvitations } from '@/hooks/invitations';
import FormFrame from '@/components/Common/FormFrame';
import RSVP_FORM_CONFIG from '@/components/Rsvp/form/rsvpFormConfig';
import RsvpNameForm from '@/components/Rsvp/form/RsvpNameForm';
import RsvpAttendanceForm from '@/components/Rsvp/form/RsvpAttendanceForm';

export type IRSVPDrawer = {
  invitations: ReturnType<typeof useAllInvitations>;
};

const RSVPDrawer: React.FC<IRSVPDrawer> = ({ invitations }) => {
  const [flowState, { stepHasForm }] = useRsvpFlowState();

  const open =
    flowState !== RSVPFlowState.INITIAL &&
    flowState !== RSVPFlowState.NOT_ATTENDING;

  return (
    <Drawer
      anchor="bottom"
      open={stepHasForm}
      ModalProps={{
        keepMounted: open ? true : false,
      }}
    >
      <Box height="100vh" width="100%">
        <FormFrame title={RSVP_FORM_CONFIG[flowState].title}>
          {invitations.isLoading || !invitations.data ? (
            <>loading...</>
          ) : stepHasForm ? (
            <>
              {flowState === RSVPFlowState.NAME ? (
                <RsvpNameForm invitations={invitations} />
              ) : null}
              {flowState === RSVPFlowState.ATTENDING ? (
                <RsvpAttendanceForm />
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
