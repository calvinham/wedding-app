import { rsvpPlainTextImg } from '@/assets';
import { SEE_YOU_SOON_SLUG } from '@/components/App/slugs';
import Col from '@/components/Common/Col';
import FormInput from '@/components/Common/FormInput';
import SvgButton from '@/components/Common/SvgButton';
import useActiveInvitation from '@/hooks/rsvp/useActiveInvitation';
import useUpdateInvitation from '@/hooks/useUpdateInvitation';
import { useAppDispatch, useAppSelector } from '@/state';
import { resetRsvpState, setPlusOneName } from '@/state/reducers/rsvp';
import { Box } from '@mui/material';
import { Formik, FormikHelpers, FormikProps, Form } from 'formik';
import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type RsvpNameFormState = {
  name: string | undefined;
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

  const firstNameInput = useAppSelector((s) => s.rsvp.firstName);

  const activeInvitation = useActiveInvitation();

  const [updateInvitation] = useUpdateInvitation();

  const inititalValues: RsvpNameFormState = useMemo(() => {
    if (firstNameInput === activeInvitation?.firstName) {
      return {
        name: activeInvitation?.plusOne || undefined,
      };
    }

    return {
      name: undefined,
    };
  }, [activeInvitation, firstNameInput]);

  const onSubmit = useCallback(
    async (
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

        await updateInvitation({
          plusOneName: values.name,
        });
        setSubmitting(false);
        dispatch(resetRsvpState());
        navigate(`/${SEE_YOU_SOON_SLUG}`);
      } catch (e) {
        const err = e as Error;

        setFieldError('name', err.message);
        setSubmitting(false);
      }
    },
    [dispatch]
  );

  return (
    <Formik initialValues={inititalValues} onSubmit={onSubmit}>
      {(formikProps) => <FormInner {...formikProps} />}
    </Formik>
  );
};

export default PlusOneNameForm;
