import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/slice';
import { TextField, Typography } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <Typography variant="h6" color="secondary" mt={6} mb={1}>
        Find contacts by name
      </Typography>
      <TextField
        color="secondary"
        type="text"
        name="filter"
        label="name"
        onChange={handleFilter}
      />
    </>
  );
};
