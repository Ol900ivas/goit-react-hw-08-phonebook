import { Link } from './Navigation.styled';
// import { useAuth } from 'hooks';

const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {/* {isLoggedIn && (
        <Link className={css.link} to="/tasks">
          Tasks
        </Link>
      )} */}
    </nav>
  );
};

export default Navigation;
