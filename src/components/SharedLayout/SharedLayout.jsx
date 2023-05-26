import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Loader from '../Loader/Loader';
// import { useAuth } from 'hooks';
import { Header } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'redux/auth/authSelectors';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster
          toastOptions={{
            style: {
              border: '2px solid #72b372',
              padding: '15px',
              marginTop: '30px',
            },
          }}
        />
      </main>
    </>
  );
};

export default SharedLayout;
