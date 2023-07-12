import React, { useCallback } from 'react';

import { Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

export type IFormInput = {
  fieldName: string;
} & TextFieldProps;

type TextFieldEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function FormInput<T extends Record<string, any>>({
  fieldName,
  ...props
}: IFormInput) {
  const { values, errors, setFieldValue, handleBlur } = useFormikContext<T>();

  const fieldErr = (errors[fieldName] || '') as string;

  const handleChange = useCallback(
    (event: TextFieldEvent) => {
      if (event.target.value === '-') {
        return;
      }
      setFieldValue(fieldName, event.target.value);
    },
    [setFieldValue]
  );

  return (
    <Stack alignItems="center" gap={1}>
      <TextField
        type="text"
        value={values[fieldName] || ''}
        onChange={handleChange}
        onWheel={handleBlur}
        variant="standard"
        {...props}
        sx={{
          ...props.sx,
        }}
      />
      {fieldErr ? <Typography color="error">{fieldErr}</Typography> : null}
    </Stack>
  );
}
