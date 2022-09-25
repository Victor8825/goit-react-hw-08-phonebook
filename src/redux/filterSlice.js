import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  contacts: {
    filter: '',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.contacts.filter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
