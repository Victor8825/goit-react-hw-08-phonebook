import { Outlet } from 'react-router-dom';
import { StyledLayout } from './StyledLayout';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from 'components/Utils/Loader';

export const Layout = () => {
  return (
    <StyledLayout>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledLayout>
  );
};
