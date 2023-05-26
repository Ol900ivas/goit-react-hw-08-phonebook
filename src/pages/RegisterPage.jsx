import { useState } from 'react';

import { Link } from 'react-router-dom';
import { signUp } from 'services/auth';
import { Form, FormTitle } from './RegisterPage.styled';
import {
  FormBtn,
  Input,
  InputWrap,
} from 'components/ContactForm/ContactForm.styled';
// import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [showPassword, setShowPassword] = useState(false);
  //   const { isAuth } = useSelector(state => state.isAuth);
  //   console.log(isAuth);
  const dispatch = useDispatch();

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
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    form.reset();
    // console.log(data);
    // if (!error) toast.success('created successfully');
    // else toast.error(error.response.data.message);
  };

  //   const handleClickShowPassword = () => setShowPassword(show => !show);

  //   const handleMouseDownPassword = event => {
  //     event.preventDefault();
  //   };

  return (
    // <form onSubmit={handleSubmit}>
    //   <h1>Register form</h1>
    //   </form>
    //   <Button type="submit" variant="contained">
    //       Register
    //     </Button>
    <Form onSubmit={handleSubmit}>
      <FormTitle>Sign up</FormTitle>

      <InputWrap>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={name}
          required
        />
      </InputWrap>
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

      <div>
        <Link to="/login">Sign in (Вже маєте аккаунт? Увійти)</Link>
      </div>
      <FormBtn type="submit" disabled={!name || !email || !password}>
        Sign up (Register)
      </FormBtn>
    </Form>
  );
};

export default RegisterPage;
