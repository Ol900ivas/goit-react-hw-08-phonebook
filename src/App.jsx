import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import Wrap from './Wrap/Wrap';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import Contacts from './Contacts/Contacts';
// import { TitleH1, TitleH2 } from './Wrap/Wrap.styled';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
// import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { Toaster } from 'react-hot-toast';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';

const Home = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            border: '2px solid #72b372',
            padding: '15px',
            marginTop: '30px',
          },
        }}
      />
    </>

    // <>
    //   <Wrap>
    //     <AppBar />
    //     <TitleH1>Phonebook</TitleH1>
    //     <ContactForm />
    //     <TitleH2>Contacts</TitleH2>
    //     <Filter />
    //     {isLoading && !error && <b>Request in progress...</b>}
    //     <Contacts />
    //     <Toaster
    //       toastOptions={{
    //         style: {
    //           border: '2px solid #72b372',
    //           padding: '15px',
    //           marginTop: '30px',
    //         },
    //       }}
    //     />
    //   </Wrap>
    // </>
  );
};