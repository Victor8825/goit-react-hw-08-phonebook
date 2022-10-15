import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderAppBar } from './AppBar';
import { Box, LinearProgress, CssBaseline } from '@mui/material';
export const Layout = () => {
  return (
    <Box>
      <CssBaseline />
      <HeaderAppBar />
      <Suspense fallback={<LinearProgress />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
