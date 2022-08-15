import styled from 'styled-components';

export const StyledContactListItem = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }

  button {
    width: 70px;
    text-align: center;
    border-radius: ${({ theme }) => theme.radii.sm};
    padding: ${({ theme }) => theme.space[2]}px;
    border: none;

    &:hover,
    &:focus {
      cursor: pointer;
      background-color: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.secondary};
      outline: none;
    }
  }
`;
