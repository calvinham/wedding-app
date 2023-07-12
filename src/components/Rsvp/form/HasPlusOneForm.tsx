import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/state';
import {
  RSVPFlowState,
  resetRsvpState,
  setHasPlusOne,
  updateFlowState,
} from '@/state/reducers/rsvp';

import useActiveInvitation from '@/hooks/rsvp/useActiveInvitation';

import { SEE_YOU_SOON_SLUG } from '@/components/App/slugs';

import Col from '@/components/Common/Col';
import SvgButton from '@/components/Common/SvgButton';

import { yesButtonTextImg, noButtonTextImg } from '@/assets';
import useUpdateInvitation from '@/hooks/useUpdateInvitation';
import useBoolean from '@/hooks/ui/useBoolean';

const HasPlusOneForm: React.FC<{}> = () => {
  const [loading, { setTrue, setFalse }] = useBoolean(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const activeInvitation = useActiveInvitation();

  const [updateInvitation] = useUpdateInvitation();

  const setPlusOne = useCallback(
    async (hasPlusOne: boolean) => {
      if (!activeInvitation) return;
      setTrue();

      if (hasPlusOne) {
        dispatch(setHasPlusOne(hasPlusOne));
        setFalse();
        dispatch(updateFlowState(RSVPFlowState.PLUS_ONE_NAME));
        return;
      }

      await updateInvitation({
        hasPlusOne: false,
      });
      setFalse();
      dispatch(resetRsvpState());
      navigate(`/${SEE_YOU_SOON_SLUG}`);
    },
    [dispatch, updateInvitation, setTrue, setFalse]
  );

  if (!activeInvitation) return null;

  return (
    <Col width="100%" height="100%" alignItems="center" pt={8}>
      <SvgButton
        src={yesButtonTextImg}
        alt="yes"
        disabled={loading}
        onClick={() => setPlusOne(true)}
        sx={{ width: '100%', height: '80px', maxWidth: '382px' }}
      />
      <SvgButton
        src={noButtonTextImg}
        alt="no"
        disabled={loading}
        onClick={() => setPlusOne(false)}
        sx={{ width: '100%', height: '80px', maxWidth: '382px' }}
      />
    </Col>
  );
};

export default HasPlusOneForm;
