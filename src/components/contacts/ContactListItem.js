import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useTheme } from '@mui/material';

export const ContactListItem = ({ id, name, number }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem key={id}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: theme.palette.secondary.main }} alt={name} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />

      <IconButton
        sx={{ color: theme.palette.secondary.main }}
        edge="end"
        aria-label="delete"
        onClick={handleDelete}
      >
        <Delete />
      </IconButton>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
