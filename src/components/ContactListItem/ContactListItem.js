import React from 'react';

import PropTypes from 'prop-types';
import { StyledContactListItem } from './StyledContactListItem';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <StyledContactListItem>
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    </StyledContactListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
