import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField, Box, Button } from '@mui/material';

import { useTheme } from '@mui/material';

export const LoginForm = () => {
  const theme = useTheme();

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
        name="email"
        label="Name"
        autoComplete="off"
      ></TextField>
      <TextField
        color="secondary"
        name="password"
        autoComplete="off"
        label="Password"
      ></TextField>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ maxWidth: '160px' }}
      >
        Login
      </Button>
    </Box>
  );
};
