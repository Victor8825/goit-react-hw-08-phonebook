import PropTypes from 'prop-types';
import { StyledFilter } from './StyledFilter';

export const Filter = ({ onFilterChange }) => {
  return (
    <StyledFilter>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={onFilterChange} />
    </StyledFilter>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
