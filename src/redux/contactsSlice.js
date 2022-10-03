import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const actions = [fetchContacts, addContact, deleteContact];

const handleFetchContacts = (state, action) => {
  state.contacts.items = action.payload;
};
const handleAddContact = (state, action) => {
  state.contacts.items.push(action.payload);
};

const handleDeleteContact = (state, action) => {
  const idx = state.contacts.items.findIndex(
    item => item.id === action.payload.id
  );
  state.contacts.items.splice(idx, 1);
};

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.contacts.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      ),
});
export const { setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
