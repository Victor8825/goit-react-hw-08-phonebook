import { Link } from './StyledAuthNav';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
