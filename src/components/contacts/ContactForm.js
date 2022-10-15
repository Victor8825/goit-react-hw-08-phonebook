import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { TextField, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material';

export const ContactForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (contacts.find(({ name }) => name === form.name.value)) {
      alert(`${form.name.value} is already in contacts`);
      form.reset();
      return;
    }
    dispatch(
      addContact({
        name: form.name.value,
        number: form.number.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        gap: theme.spacing(4),
      }}
    >
      <TextField
        color="secondary"
        name="name"
        type="text"
        label="Name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        color="secondary"
        name="number"
        autoComplete="off"
        type="number"
        label="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ maxWidth: '160px' }}
      >
        Add contact
      </Button>
    </Box>
  );
};
