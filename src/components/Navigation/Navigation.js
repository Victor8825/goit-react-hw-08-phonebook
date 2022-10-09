import { StyledNavigation, Link } from './StyledNavigation';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledNavigation>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </StyledNavigation>
  );
};
