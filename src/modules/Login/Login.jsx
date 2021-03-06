import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { ToastContainer, Slide } from "react-toastify";

import FormInput from '../../components/FormInput';
import { Button } from '../../components/Button/Button';
import FieldWrapper from '../../components/FieldWrapper';

import { loginThunk } from '../../store/users/thunks';
import { loginValidationData, passwordValidationData } from '../../constants/formPatterns';

import { FormAuth, FormAuthTitle, AuthLink } from '../../containers/Auth/styled';
import "react-toastify/dist/ReactToastify.css";
import { routes } from '../../constants/routes';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ login, password }) => {
    dispatch(loginThunk({
      login,
      password
    }))
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        transition={Slide}
      />
      <FormAuth onSubmit={handleSubmit(onSubmit)}>
        <FormAuthTitle>Sing In</FormAuthTitle>
        <FieldWrapper label="Login" error={errors.login || ''}>
          <FormInput
            className="auth"
            type="text"
            name="login"
            placeholder="Enter your login"
            invalid={'login' in errors}
            ref={register(loginValidationData)}
          />
        </FieldWrapper>
        <FieldWrapper mb label="Password" error={errors.password || ''}>
          <FormInput
            className="auth"
            type="password"
            name="password"
            placeholder="Enter your password"
            invalid={'password' in errors}
            ref={register(passwordValidationData)}
          />
        </FieldWrapper>
        <Button type="submit">Sing In</Button>
      </FormAuth>
      <AuthLink>
        If you not have account you can <Link to={routes.registration.path}>Registration</Link>
      </AuthLink>
    </>
  );
}

export default Login;