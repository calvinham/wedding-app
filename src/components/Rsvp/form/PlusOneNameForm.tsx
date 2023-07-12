import { rsvpPlainTextImg } from '@/assets';
import { SEE_YOU_SOON_SLUG } from '@/components/App/slugs';
import Col from '@/components/Common/Col';
import FormInput from '@/components/Common/FormInput';
import SvgButton from '@/components/Common/SvgButton';
import { useAppDispatch } from '@/state';
import {
  RSVPFlowState,
  setPlusOneName,
  updateFlowState,
} from '@/state/reducers/rsvp';
import { Box } from '@mui/material';
import { Formik, FormikHelpers, FormikProps, Form } from 'formik';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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
          src={rsvpPlainTextImg}
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

const PlusOneNameForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (
      values: RsvpNameFormState,
      formActions: FormikHelpers<RsvpNameFormState>
    ) => {
      const { setSubmitting, setFieldError } = formActions;
      try {
        if (!values.name) {
          throw new Error('Name is required');
        }

        setSubmitting(true);
        dispatch(setPlusOneName(values.name));
        setSubmitting(false);

        dispatch(updateFlowState(RSVPFlowState.DONE));
        navigate(`/${SEE_YOU_SOON_SLUG}`);
      } catch (e) {
        const err = e as Error;
        console.log('err: ', err);
        setFieldError('name', err.message);
        setSubmitting(false);
      }
    },
    [dispatch]
  );

  return (
    <Formik initialValues={defaultState} onSubmit={onSubmit}>
      {(formikProps) => <FormInner {...formikProps} />}
    </Formik>
  );
};

export default PlusOneNameForm;
