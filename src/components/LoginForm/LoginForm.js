import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledLoginForm } from './StyledLoginForm';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit} autoComplete="off">
      <label>
        email
        <input type="email" name="email" autoComplete="off" />
      </label>
      <label>
        password
        <input type="password" name="password" autoComplete="off" />
      </label>
      <button type="submit">Log In</button>
    </StyledLoginForm>
  );
};
