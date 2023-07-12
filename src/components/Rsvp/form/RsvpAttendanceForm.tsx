import SvgButton from '@/components/Common/SvgButton';

import React, { useCallback } from 'react';

import { yesButtonTextImg, noButtonTextImg } from '@/assets';
import { useAppDispatch } from '@/state';
import {
  RSVPFlowState,
  setUserAttending,
  updateFlowState,
} from '@/state/reducers/rsvp';

import Col from '@/components/Common/Col';
import { useNavigate } from 'react-router-dom';
import { MISS_YOU_SLUG } from '@/components/App/slugs';

const AttendanceForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setAttending = useCallback(
    (attending: boolean) => {
      dispatch(setUserAttending(attending));
      if (!attending) {
        dispatch(updateFlowState(RSVPFlowState.DONE));
        navigate(`/${MISS_YOU_SLUG}`);
      } else {
        dispatch(updateFlowState(RSVPFlowState.PLUS_ONE));
      }
    },
    [dispatch, navigate]
  );

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
