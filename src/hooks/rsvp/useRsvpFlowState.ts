import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/state';
import { RSVPFlowState, updateFlowState } from '@/state/reducers/rsvp';

const RSVP_HAS_FORM = [
  RSVPFlowState.NAME,
  RSVPFlowState.ATTENDING,
  RSVPFlowState.HAS_PLUS_ONE,
  RSVPFlowState.PLUS_ONE_NAME,
];

export default function useRsvpFlowState() {
  const flowState = useAppSelector((s) => s.rsvp.flowState);

  const dispatch = useAppDispatch();

  const util = useMemo(() => {
    const stepHasForm = RSVP_HAS_FORM.includes(flowState);

    const close = () => {
      dispatch(updateFlowState(RSVPFlowState.INITIAL));
    };

    return {
      stepHasForm,
      close,
    };
  }, [flowState, dispatch]);

  return [flowState, util] as const;
}
