import { useAppDispatch, useAppSelector } from '@/state';
import { RSVPFlowState, updateFlowState } from '@/state/reducers/rsvp';
import { useMemo } from 'react';

export const RSVPFlowOrder = [
  RSVPFlowState.INITIAL,
  RSVPFlowState.NAME,
  RSVPFlowState.ATTENDING,
  RSVPFlowState.PLUS_ONE,
  RSVPFlowState.PLUS_ONE_NAME,
  RSVPFlowState.DONE,
];

export default function useRsvpFlowState() {
  const flowState = useAppSelector((s) => s.rsvp.flowState);
  const dispatch = useAppDispatch();

  const util = useMemo(() => {
    const goNext = () => {
      const currIndex = RSVPFlowOrder.indexOf(flowState);

      if (currIndex === RSVPFlowOrder.length - 1) {
        dispatch(updateFlowState(RSVPFlowState.INITIAL));
      } else {
        dispatch(updateFlowState(RSVPFlowOrder[currIndex + 1]));
      }
    };

    const close = () => {
      dispatch(updateFlowState(RSVPFlowState.INITIAL));
    };

    return {
      goNext,
      close,
    };
  }, [flowState, dispatch]);

  return [flowState, util] as const;
}
