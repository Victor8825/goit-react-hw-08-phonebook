import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Button variant="outlined" color="inherit" sx={{ mr: 5 }}>
        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to="/register"
        >
          Register
        </Link>
      </Button>
      <Button color="inherit" variant="outlined">
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/login">
          Login
        </Link>
      </Button>
    </>
  );
};
