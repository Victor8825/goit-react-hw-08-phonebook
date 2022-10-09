import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  &.active {
    color: orangered;
  }
`;
