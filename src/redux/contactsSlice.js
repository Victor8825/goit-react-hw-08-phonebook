import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: {
    items: [],
  },
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        if (state.contacts.items.find(({ name }) => name === payload.name)) {
          return alert(`${payload.name} is already in contacts`);
        }
        state.contacts.items.push(payload);
      },
      prepare: ({ id, name, number }) => {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
