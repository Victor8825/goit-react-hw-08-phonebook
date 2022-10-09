import styled from 'styled-components';

export const StyledContactlist = styled.div`
  background-color: #9ab1e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]}px;
  padding: ${({ theme }) => theme.space[4]}px;
  width: 350px;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.sm};

  p {
    text-align: center;
  }

  ul {
    padding: ${({ theme }) => theme.space[0]}px;
  }
`;
