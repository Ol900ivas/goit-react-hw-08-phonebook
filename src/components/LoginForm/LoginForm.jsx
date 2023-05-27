// import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

import { Form, FormTitle } from '../RegisterForm/RegisterForm.styled';
import {
  FormBtn,
  Input,
  InputWrap,
} from 'components/ContactForm/ContactForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

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
    <Form onSubmit={handleSubmit}>
      <FormTitle>Login form</FormTitle>

      <InputWrap>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
          required
        />
      </InputWrap>
      <InputWrap>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          required
        />
      </InputWrap>
      <FormBtn type="submit" variant="contained">
        Login
      </FormBtn>
      <div>
        <Link to="/register">Sign up (зареєструватися)</Link>
      </div>
    </Form>
  );
};

export default LoginForm;
