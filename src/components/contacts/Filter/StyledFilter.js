import styled from 'styled-components';

export const StyledFilter = styled.div`
  background-color: #9ab1e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]}px;
  padding: ${({ theme }) => theme.space[4]}px;
  width: 350px;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.sm};

  input {
    width: 100%;
    margin-top: ${({ theme }) => theme.space[2]}px;
    border-radius: ${({ theme }) => theme.radii.sm};
    outline: none;
    border: none;
    padding: ${({ theme }) => theme.space[2]}px;
  }

  p {
    margin-bottom: ${p => p.theme.space[0]};
  }
`;
