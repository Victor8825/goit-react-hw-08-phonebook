import React from 'react';
import { ContactListItem } from 'components/contacts/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { List, Typography } from '@mui/material';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List bgcolor="info" sx={{ maxWidth: '500px', bgColor: 'black', pl: 0 }}>
      {visibleContacts.length ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} name={name} number={number} id={id} />
          );
        })
      ) : (
        <Typography variant="h6" color="secondary" mt={4}>
          There are no contacts, friend!
        </Typography>
      )}
    </List>
  );
};
