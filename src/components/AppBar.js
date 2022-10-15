import { Navigation } from './Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from 'hooks';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { useTheme } from '@mui/material';

export const HeaderAppBar = () => {
  const theme = useTheme();
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.mode,
      }}
    >
      <Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

// export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <StyledAppBar>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </StyledAppBar>
//   );
// };
