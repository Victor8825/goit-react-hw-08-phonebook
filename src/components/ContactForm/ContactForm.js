import { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledContactForm } from './StyledContactForm';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static defaultProps = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  addNewContactToPhonebook = event => {
    event.preventDefault();
    this.props.addContact({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    event.currentTarget.reset();
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledContactForm>
        <form onSubmit={this.addNewContactToPhonebook} autoComplete="off">
          <label>
            <span>Name</span>
            <input
              type="tel"
              name="name"
              onChange={this.onInputChange}
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
              onChange={this.onInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </StyledContactForm>
    );
  }
}
