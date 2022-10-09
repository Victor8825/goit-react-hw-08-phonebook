import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledRegisterForm } from './StyledRegisterForm';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" autoComplete="off" />
      </label>
      <label>
        Email
        <input type="email" name="email" autoComplete="off" />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="off" />
      </label>
      <button type="submit">Register</button>
    </StyledRegisterForm>
  );
};