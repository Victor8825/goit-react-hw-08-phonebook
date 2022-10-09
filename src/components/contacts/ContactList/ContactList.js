import React from 'react';
import { ContactListItem } from 'components/contacts/ContactListItem/ContactListItem';
import { StyledContactlist } from './StyledContactList';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <StyledContactlist>
      <ul>
        {visibleContacts.length ? (
          visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id} name={name} number={number} id={id} />
            );
          })
        ) : (
          <p>There are no contacts, friend!</p>
        )}
      </ul>
    </StyledContactlist>
  );
};
