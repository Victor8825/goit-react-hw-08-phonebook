import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledContactlist } from './StyledContactList';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, getVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

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
