import { useAppSelector } from '@/state';
import { useUpdateInvitationMutation } from '@/state/api';
import { RsvpUIState } from '@/state/reducers/rsvp';
import { useCallback } from 'react';

export default function useUpdateInvitation() {
  const [handleMutation] = useUpdateInvitationMutation();

  const rsvpState = useAppSelector((s) => s.rsvp);

  const update = useCallback(
    async (partialState?: Partial<RsvpUIState>) => {
      const _rsvpState = {
        ...rsvpState,
        ...partialState,
      };

      const mutatedState = await handleMutation(_rsvpState).unwrap();
      console.debug('[useUpdateInvitation]: ', mutatedState);
    },
    [handleMutation, rsvpState]
  );

  return [update] as const;
}
