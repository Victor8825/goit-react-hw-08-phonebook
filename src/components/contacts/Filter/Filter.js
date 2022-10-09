import React from 'react';
import { StyledFilter } from './StyledFilter';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/contacts/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <StyledFilter>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilter} />
    </StyledFilter>
  );
};
