import { Link } from 'components/Navigation/Navigation.styled';

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default AuthNav;
