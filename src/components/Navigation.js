import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Box, Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ mr: 'auto' }}>
      <Button variant="outlined" color="inherit" sx={{ mr: 5 }}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
          Home
        </Link>
      </Button>

      {isLoggedIn && (
        <Button variant="outlined" color="inherit">
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/contacts"
          >
            Contacts
          </Link>
        </Button>
      )}
    </Box>
  );
};
