import React from 'react';

import PropTypes from 'prop-types';
import { StyledContactListItem } from './StyledContactListItem';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    console.log(id);
  };

  return (
    <StyledContactListItem>
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={handleDelete}>
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
};
