import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/contacts/ContactList';
import { ContactForm } from 'components/contacts/ContactForm';
import { Filter } from '../components/contacts/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { Container, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material';

const Contacts = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container
      sx={{
        my: 5,
        ml: 5,
        mr: 'auto',
        gap: theme.spacing(4),
      }}
    >
      <ContactForm />
      {isLoading && <CircularProgress />}
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
