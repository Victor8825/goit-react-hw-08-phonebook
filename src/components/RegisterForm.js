import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material';

export const RegisterForm = () => {
  const theme = useTheme();
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{
        my: 5,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        ml: 5,
        mr: 'auto',
        gap: theme.spacing(4),
      }}
    >
      <TextField
        color="secondary"
        name="name"
        type="text"
        label="Name"
        autoComplete="off"
      ></TextField>
      <TextField
        color="secondary"
        name="email"
        autoComplete="off"
        type="email"
        label="Email"
      ></TextField>
      <TextField
        color="secondary"
        name="password"
        autoComplete="off"
        type="password"
        label="Password"
      ></TextField>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ maxWidth: '160px' }}
      >
        Register
      </Button>
    </Box>
  );
};
