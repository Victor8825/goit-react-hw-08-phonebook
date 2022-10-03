import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Box } from './Box.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
// import { getContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  fetchContacts();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box border="none" p={4} bg="muted">
      <GlobalStyle />
      <h1>Phonebook</h1>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Box>
  );
};
