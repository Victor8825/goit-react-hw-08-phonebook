import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { nanoid } from 'nanoid';
import { StyledContactForm } from './StyledContactForm';
import PropTypes from 'prop-types';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  number: yup.number().required('A phone number is required'),
});

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    const newValues = values;
    addContact({
      id: nanoid(),
      name: newValues.name,
      number: newValues.number,
    });
    actions.resetForm();
  };

  return (
    <StyledContactForm>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            <span>Name</span>
            <Field type="tel" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            <span>Number</span>
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </StyledContactForm>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
