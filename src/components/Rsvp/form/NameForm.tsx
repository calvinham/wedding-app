import React, { useCallback } from 'react';
import FormInput from '@/components/Common/FormInput';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';

import { nextButtonTextImg } from '@/assets';

import SvgButton from '@/components/Common/SvgButton';
import Col from '@/components/Common/Col';
import { Box } from '@mui/material';
import { IRSVPDrawer } from '@/components/Rsvp/RSVPDrawer';
import { useAppDispatch } from '@/state';
import {
  RSVPFlowState,
  setActiveInvitation,
  setFirstName,
  setLastName,
  updateFlowState,
} from '@/state/reducers/rsvp';

import { useFindInvitation } from '@/hooks/useFindInvitation';

type RsvpNameFormState = {
  name: string | undefined;
};

const defaultState: RsvpNameFormState = {
  name: undefined,
};

const FormInner: React.FC<FormikProps<RsvpNameFormState>> = ({ values }) => {
  const disabled = !values.name;

  return (
    <Form
      autoComplete="off"
      noValidate
      style={{ height: '100%', width: '100%' }}
    >
      <Col
        width="100%"
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        pt={4}
      >
        <Box maxWidth="700px" width="100%">
          <FormInput fieldName="name" placeholder="John Doe" fullWidth />
        </Box>
        <SvgButton
          type="submit"
          src={nextButtonTextImg}
          alt="rsvp-next"
          disabled={disabled}
          sx={{
            width: '100%',
            maxWidth: '218px',
            height: '82px',
          }}
        />
      </Col>
    </Form>
  );
};

const NameForm: React.FC<IRSVPDrawer> = ({ invitations }) => {
  const dispatch = useAppDispatch();

  const [findInvitation] = useFindInvitation();

  const onSubmit = useCallback(
    (
      values: RsvpNameFormState,
      formActions: FormikHelpers<RsvpNameFormState>
    ) => {
      const { setSubmitting, setFieldError } = formActions;

      try {
        setSubmitting(true);
        const result = findInvitation(values.name);
        console.debug('[Rsvp/NameForm]: invited User: ', result);

        dispatch(setActiveInvitation(result.invitedUser));
        dispatch(setFirstName(result.firstName));
        dispatch(setLastName(result.lastName));
        dispatch(updateFlowState(RSVPFlowState.ATTENDING));

        setSubmitting(false);
      } catch (e: any) {
        const err = e as Error;

        setSubmitting(false);
        setFieldError('name', err.message);
      }
    },
    [invitations, findInvitation, dispatch]
  );

  return (
    <Formik initialValues={defaultState} onSubmit={onSubmit}>
      {(formikProps) => <FormInner {...formikProps} />}
    </Formik>
  );
};

export default NameForm;
