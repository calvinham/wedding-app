import SvgButton from '@/components/Common/SvgButton';

import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { yesButtonTextImg, noButtonTextImg } from '@/assets';
import { useAppDispatch } from '@/state';

import useActiveInvitation from '@/hooks/rsvp/useActiveInvitation';

import {
  RSVPFlowState,
  setUserAttending,
  updateFlowState,
} from '@/state/reducers/rsvp';

import Col from '@/components/Common/Col';
import { MISS_YOU_SLUG, SEE_YOU_SOON_SLUG } from '@/components/App/slugs';

const AttendanceForm: React.FC<{}> = () => {
  const activeInvitation = useActiveInvitation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setAttending = useCallback(
    (attending: boolean) => {
      if (!activeInvitation) return;

      dispatch(setUserAttending(attending));

      if (!attending) {
        dispatch(updateFlowState(RSVPFlowState.DONE));
        navigate(`/${MISS_YOU_SLUG}`);
        return;
      }

      if (activeInvitation.numGuests === 2) {
        dispatch(updateFlowState(RSVPFlowState.PLUS_ONE));
      } else {
        dispatch(updateFlowState(RSVPFlowState.DONE));
        navigate(`/${SEE_YOU_SOON_SLUG}`);
      }
    },
    [activeInvitation, dispatch, navigate]
  );

  if (!activeInvitation) return null;

  return (
    <Col width="100%" height="100%" alignItems="center" pt={8}>
      <SvgButton
        src={yesButtonTextImg}
        alt="yes"
        onClick={() => setAttending(true)}
        sx={{ width: '100%', height: '80px', maxWidth: '382px' }}
      />
      <SvgButton
        src={noButtonTextImg}
        alt="no"
        onClick={() => setAttending(false)}
        sx={{ width: '100%', height: '80px', maxWidth: '382px' }}
      />
    </Col>
  );
};

export default AttendanceForm;
