import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { StyledContactForm } from './StyledContactForm';
import PropTypes from 'prop-types';

export const ContactForm = ({ addContact }) => {
  const [label, setLabel] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'label':
        setLabel(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addNewContactToPhonebook = event => {
    event.preventDefault();
    addContact({
      id: nanoid(),
      name: label,
      number: number,
    });

    event.currentTarget.reset();
    setLabel('');
    setNumber('');
  };

  return (
    <StyledContactForm>
      <form onSubmit={addNewContactToPhonebook} autoComplete="off">
        <label>
          <span>Name</span>
          <input
            type="tel"
            name="label"
            onChange={onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            onChange={onInputChange}
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
