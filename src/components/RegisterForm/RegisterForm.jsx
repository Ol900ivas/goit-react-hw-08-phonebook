import { useState } from 'react';
import {
  FormBtn,
  Input,
  InputWrap,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
import Wrap from 'components/Wrap/Wrap';
import { TitleH1 } from 'components/Wrap/Wrap.styled';
import { nanoid } from '@reduxjs/toolkit';
import { FormLink } from './RegisterForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [showPassword, setShowPassword] = useState(false);
  //   const { isAuth } = useSelector(state => state.isAuth);
  //   console.log(isAuth);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrap>
      <form onSubmit={handleSubmit}>
        <TitleH1>Register</TitleH1>
        <InputWrap>
          <Label htmlFor={nameInputId}>Name</Label>
          <Input
            type="text"
            name="name"
            id={nameInputId}
            // placeholder="Name"
            onChange={handleChange}
            value={name}
            required
          />
        </InputWrap>
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

        <FormBtn type="submit" disabled={!name || !email || !password}>
          Sign up
        </FormBtn>

        <FormLink to="/login">Already have an account? Sign in</FormLink>
      </form>
    </Wrap>
  );
};

export default RegisterForm;
