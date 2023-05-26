import { useDispatch } from 'react-redux';
import { Div } from './UserMenu.styled';
import { useAuth } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Div>
      <p>
        Wellcome, <span>{user.name}</span>
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Div>
  );
};

export default UserMenu;
