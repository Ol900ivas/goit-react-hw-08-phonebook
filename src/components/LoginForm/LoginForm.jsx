import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  FormBtn,
  Input,
  InputWrap,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import Wrap from 'components/Wrap/Wrap';
import { TitleH1 } from 'components/Wrap/Wrap.styled';
import { nanoid } from '@reduxjs/toolkit';
import { FormLink } from 'components/RegisterForm/RegisterForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  //   const [showPassword, setShowPassword] = React.useState(false);

  //   const handleClickShowPassword = () => setShowPassword(show => !show);

  //   const handleMouseDownPassword = event => {
  //     event.preventDefault();
  //   };
  return (
    <Wrap>
      <form onSubmit={handleSubmit}>
        <TitleH1>Login form</TitleH1>
        <InputWrap>
          <Label htmlFor={emailInputId}>Email</Label>
          <Input
            type="email"
            name="email"
            id={emailInputId}
            // placeholder="Email"
            onChange={handleChange}
            value={email}
            required
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor={passwordInputId}>Password</Label>
          <Input
            type="password"
            name="password"
            id={passwordInputId}
            // placeholder="Password"
            onChange={handleChange}
            value={password}
            required
          />
        </InputWrap>
        <FormBtn type="submit" disabled={!email || !password}>
          Login
        </FormBtn>

        <FormLink to="/register">Don't have an account? Sign up</FormLink>
      </form>
    </Wrap>
  );
};

export default LoginForm;
