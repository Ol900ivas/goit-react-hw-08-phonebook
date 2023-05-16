import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Loader from '../Loader/Loader';
// import { useAuth } from 'hooks';
import { Header } from './SharedLayout.styled';

const SharedLayout = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Navigation />
        <UserMenu />
        <AuthNav />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
