import { useDispatch } from 'react-redux';
import { Btn, Div, Name, Text } from './UserMenu.styled';
import { useAuth } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Div>
      <Text>
        Wellcome, <Name>{user.name}</Name>
      </Text>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Div>
  );
};

export default UserMenu;
