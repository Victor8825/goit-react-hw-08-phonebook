import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  &.active {
    color: white;
    background-color: orangered;
  }
`;
