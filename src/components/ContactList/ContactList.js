import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledContactlist } from './StyledContactList';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <StyledContactlist>
      <ul>
        {visibleContacts.length ? (
          visibleContacts.map(({ id, name, phone }) => {
            return (
              <ContactListItem key={id} name={name} phone={phone} id={id} />
            );
          })
        ) : (
          <p>There are no contacts, friend!</p>
        )}
      </ul>
    </StyledContactlist>
  );
};
