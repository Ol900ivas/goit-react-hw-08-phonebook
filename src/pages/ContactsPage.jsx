import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Wrap from 'components/Wrap/Wrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrap>
      <ContactForm />
      <Filter />
      <Contacts />
    </Wrap>
  );
};

export default ContactsPage;
