import styled from 'styled-components';

export const StyledContactForm = styled.div`
  form {
    background-color: #9ab1e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.space[4]}px;
    padding: ${({ theme }) => theme.space[4]}px;
    width: 350px;
    height: auto;
    border-radius: ${({ theme }) => theme.radii.sm};
  }

  input {
    width: 100%;
    margin-top: ${({ theme }) => theme.space[2]}px;
    border-radius: ${({ theme }) => theme.radii.sm};
    outline: none;
    border: none;
    padding: ${({ theme }) => theme.space[2]}px;
  }

  button {
    width: 100px;
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
