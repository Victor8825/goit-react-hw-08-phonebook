import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledContactForm } from './StyledContactForm';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (contacts.find(({ name }) => name === form.name.value)) {
      alert(`${form.name.value} is already in contacts`);
      form.reset();
      return;
    }
    dispatch(
      addContact({
        name: form.name.value,
        phone: form.phone.value,
      })
    );
    form.reset();
  };

  return (
    <StyledContactForm>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="text"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </StyledContactForm>
  );
};
