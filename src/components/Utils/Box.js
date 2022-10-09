import styled from 'styled-components';

import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
} from 'styled-system';

export const Box = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '10px',
    alignItems: 'center',
  },
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);
