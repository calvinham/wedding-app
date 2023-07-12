import useRsvpFlowState from '@/hooks/rsvp/useRsvpFlowState';
import { Box, Drawer } from '@mui/material';
import React from 'react';
import { RSVPFlowState } from '@/state/reducers/rsvp';
import RsvpNameForm from './form/RsvpNameForm';
import { useAllInvitations } from '@/hooks/invitations';
import FormFrame from '../Common/FormFrame';
import RSVP_FORM_CONFIG from './form/rsvpFormConfig';

export type IRSVPDrawer = {
  invitations: ReturnType<typeof useAllInvitations>;
};

const RSVPDrawer: React.FC<IRSVPDrawer> = ({ invitations }) => {
  const [flowState] = useRsvpFlowState();

  const open = flowState !== RSVPFlowState.INITIAL;

  return (
    <Drawer
      anchor="bottom"
      open={open}
      ModalProps={{
        keepMounted: open ? true : false,
      }}
    >
      <Box height="100vh" width="100%">
        <FormFrame title={RSVP_FORM_CONFIG[flowState].title}>
          {flowState === RSVPFlowState.NAME && (
            <RsvpNameForm invitations={invitations} />
          )}
        </FormFrame>
      </Box>
    </Drawer>
  );
};

export default RSVPDrawer;
