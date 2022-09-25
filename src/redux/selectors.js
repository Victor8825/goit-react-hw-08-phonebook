export const getContacts = state => state.items.contacts.items;

export const getFilter = state => state.filter.contacts.filter;

export const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
