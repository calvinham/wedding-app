import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/state';
import {
  RSVPFlowState,
  setHasPlusOne,
  updateFlowState,
} from '@/state/reducers/rsvp';

import useActiveInvitation from '@/hooks/rsvp/useActiveInvitation';

import { SEE_YOU_SOON_SLUG } from '@/components/App/slugs';

import Col from '@/components/Common/Col';
import SvgButton from '@/components/Common/SvgButton';

import { yesButtonTextImg, noButtonTextImg } from '@/assets';

const HasPlusOneForm: React.FC<{}> = () => {
  const activeInvitation = useActiveInvitation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setPlusOne = useCallback(
    (hasPlusOne: boolean) => {
      if (!activeInvitation) return;
      dispatch(setHasPlusOne(hasPlusOne));

      if (hasPlusOne) {
        dispatch(updateFlowState(RSVPFlowState.PLUS_ONE_NAME));
      } else {
        dispatch(updateFlowState(RSVPFlowState.DONE));
        navigate(`/${SEE_YOU_SOON_SLUG}`);
      }
    },
    [dispatch]
  );

  if (!activeInvitation) return null;

  return (
    <Col width="100%" height="100%" alignItems="center" pt={8}>
      <SvgButton
        src={yesButtonTextImg}
        alt="yes"
        onClick={() => setPlusOne(true)}
        sx={{ width: '100%', height: '80px', maxWidth: '382px' }}
      />
      <SvgButton
        src={noButtonTextImg}
        alt="no"
        onClick={() => setPlusOne(false)}
        sx={{ width: '100%', height: '80px', maxWidth: '382px' }}
      />
    </Col>
  );
};

export default HasPlusOneForm;
