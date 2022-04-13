import React from 'react';

import { Button, FormControlLabel, Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import TextField from '@mui/material/TextField/TextField';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getISAuth } from 'redux/selectors/selectorsHeader/selectorsHeader';
import { loginTC } from 'redux/thunks';

type FormikErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

const minValidPassLength = 3;
export const Login = (): any => {
  const isAuth = useSelector(getISAuth);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },

    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < minValidPassLength) {
        errors.password = 'password should biggest that three symbols';
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(loginTC(values));
    },
  });

  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <Grid container justifyContent="center">
      <Grid item justifyContent="center">
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormGroup>
              <TextField
                label="Email"
                margin="normal"
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...formik.getFieldProps('email')}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: ' red' }}>{formik.errors.email}</div>
              ) : null}
              <TextField
                type="password"
                label="Password"
                margin="normal"
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...formik.getFieldProps('password')}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: ' red' }}>{formik.errors.password}</div>
              ) : null}
              <FormControlLabel
                label="Remember me"
                control={
                  <Checkbox
                    checked={formik.values.rememberMe}
                    /* eslint-disable-next-line react/jsx-props-no-spreading */
                    {...formik.getFieldProps('rememberMe')}
                  />
                }
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
