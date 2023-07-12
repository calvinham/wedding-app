import { InvitationTableRow } from '@/lib/types';
import { useAppDispatch, useAppSelector } from '@/state';
import {
  RSVPFlowState,
  setActiveInvitation,
  updateFlowState,
} from '@/state/reducers/rsvp';
import { useCallback, useMemo } from 'react';

export const RSVPFlowOrder = [
  RSVPFlowState.INITIAL,
  RSVPFlowState.NAME,
  RSVPFlowState.ATTENDING,
  RSVPFlowState.PLUS_ONE,
  RSVPFlowState.PLUS_ONE_NAME,
  RSVPFlowState.DONE,
];

const RSVP_HAS_FORM = [
  RSVPFlowState.NAME,
  RSVPFlowState.ATTENDING,
  RSVPFlowState.PLUS_ONE,
  RSVPFlowState.PLUS_ONE_NAME,
];

export default function useRsvpFlowState() {
  const flowState = useAppSelector((s) => s.rsvp.flowState);
  const invitation = useAppSelector((s) => s.rsvp.invitation);

  const dispatch = useAppDispatch();

  const setInvitation = useCallback(
    (inviteTableRow: InvitationTableRow) => {
      if (flowState !== RSVPFlowState.NAME) {
        return;
      }
      dispatch(setActiveInvitation(inviteTableRow));
      dispatch(updateFlowState(RSVPFlowState.ATTENDING));
    },
    [flowState, dispatch]
  );

  const setAttending = useCallback(
    (attending: boolean) => {
      if (!invitation || flowState !== RSVPFlowState.ATTENDING) {
        return;
      }
      if (!attending) {
        dispatch(updateFlowState(RSVPFlowState.NOT_ATTENDING));
        return;
      } else {
        dispatch(updateFlowState(RSVPFlowState.PLUS_ONE));
        return;
      }
    },
    [invitation, flowState, dispatch]
  );

  const util = useMemo(() => {
    // const goNext = () => {
    //   const currIndex = RSVPFlowOrder.indexOf(flowState);

    //   if (currIndex === RSVPFlowOrder.length - 1) {
    //     dispatch(updateFlowState(RSVPFlowState.INITIAL));
    //   } else {
    //     dispatch(updateFlowState(RSVPFlowOrder[currIndex + 1]));
    //   }
    // };

    const stepHasForm = RSVP_HAS_FORM.includes(flowState);

    const close = () => {
      dispatch(updateFlowState(RSVPFlowState.INITIAL));
    };

    return {
      stepHasForm,
      setInvitation,
      close,
    };
  }, [flowState, dispatch, setInvitation]);

  return [flowState, util] as const;
}
