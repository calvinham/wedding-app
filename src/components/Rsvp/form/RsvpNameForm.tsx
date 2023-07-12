import React, { useCallback } from 'react';
import FormFrame from '@/components/Common/FormFrame';
import FormInput from '@/components/Common/FormInput';
import useRsvpFlowState from '@/hooks/rsvp/useRsvpFlowState';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';

import { nextButtonTextImg } from '@/assets';

import SvgButton from '@/components/Common/SvgButton';
import Col from '@/components/Common/Col';
import { Box } from '@mui/material';
import { IRSVPDrawer } from '../RSVPDrawer';
import { useGetIsInvited } from '@/hooks/invitations';

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
          <FormInput fieldName="name" fullWidth />
        </Box>
        <SvgButton
          type="submit"
          src={nextButtonTextImg}
          alt="rsvp-next"
          maxWidth={218}
          disabled={disabled}
        />
      </Col>
    </Form>
  );
};

const RsvpNameForm: React.FC<IRSVPDrawer> = ({ invitations }) => {
  const [_, { goNext }] = useRsvpFlowState();

  const [getIsInvited] = useGetIsInvited();

  const onSubmit = useCallback(
    (
      values: RsvpNameFormState,
      formActions: FormikHelpers<RsvpNameFormState>
    ) => {
      try {
        formActions.setSubmitting(true);
        const invitedUser = getIsInvited(values.name);
        console.log('invited User: ', invitedUser);

        formActions.setSubmitting(false);
      } catch (e: any) {
        const err = e as Error;
        console.debug('error: ', err);
        formActions.setSubmitting(false);
        formActions.setFieldError('name', e.message);
      }
    },
    [invitations]
  );

  return (
    <Formik initialValues={defaultState} onSubmit={onSubmit}>
      {(formikProps) => <FormInner {...formikProps} />}
    </Formik>
  );
};

export default RsvpNameForm;
