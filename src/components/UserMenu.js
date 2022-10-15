import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Typography variant="h6">Welcome, {user.name}</Typography>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ ml: 5 }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
};
