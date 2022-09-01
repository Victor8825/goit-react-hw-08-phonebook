import React from 'react';

import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledContactlist } from './StyledContactList';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <StyledContactlist>
      <ul>
        {contacts.length ? (
          contacts.map(({ id, name, number }) => {
            return (
              <ContactListItem
                key={id}
                name={name}
                number={number}
                id={id}
                deleteContact={deleteContact}
              />
            );
          })
        ) : (
          <p>There are no contacts, friend!</p>
        )}
      </ul>
    </StyledContactlist>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
