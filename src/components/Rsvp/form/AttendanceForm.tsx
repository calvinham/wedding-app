import SvgButton from '@/components/Common/SvgButton';

import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { yesButtonTextImg, noButtonTextImg } from '@/assets';
import { useAppDispatch } from '@/state';

import useActiveInvitation from '@/hooks/rsvp/useActiveInvitation';

import {
  RSVPFlowState,
  resetRsvpState,
  setUserAttending,
  updateFlowState,
} from '@/state/reducers/rsvp';

import Col from '@/components/Common/Col';
import { MISS_YOU_SLUG, SEE_YOU_SOON_SLUG } from '@/components/App/slugs';
import useUpdateInvitation from '@/hooks/useUpdateInvitation';
import useBoolean from '@/hooks/ui/useBoolean';
import { RSVP } from '@/lib/types';

const AttendanceForm: React.FC<{}> = () => {
  const activeInvitation = useActiveInvitation();
  const [loading, { setTrue, setFalse }] = useBoolean(false);

  const [updateInvitation] = useUpdateInvitation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setAttending = useCallback(
    async (attending: boolean) => {
      if (!activeInvitation) return;
      setTrue();

      if (!attending) {
        await updateInvitation({
          attending: RSVP.NO,
        });
        setFalse();
        dispatch(resetRsvpState());
        navigate(`/${MISS_YOU_SLUG}`);
        return;
      }

      if (activeInvitation.numGuests === 1) {
        await updateInvitation({
          attending: RSVP.YES,
          hasPlusOne: false,
        });
        setFalse();
        dispatch(resetRsvpState());
        navigate(`/${SEE_YOU_SOON_SLUG}`);
        return;
      }

      dispatch(setUserAttending(RSVP.YES));
      setFalse();
      dispatch(updateFlowState(RSVPFlowState.HAS_PLUS_ONE));
    },
    [activeInvitation, updateInvitation, dispatch, navigate, setTrue, setFalse]
  );

  if (!activeInvitation) return null;

  return (
    <Col width="100%" height="100%" alignItems="center" pt={8}>
      <SvgButton
        src={yesButtonTextImg}
        alt="yes"
        disabled={loading}
        onClick={() => setAttending(true)}
        sx={{ width: '100%', height: '80px', maxWidth: '382px' }}
      />
      <SvgButton
        src={noButtonTextImg}
        alt="no"
        disabled={loading}
        onClick={() => setAttending(false)}
        sx={{ width: '100%', height: '80px', maxWidth: '382px' }}
      />
    </Col>
  );
};

export default AttendanceForm;
