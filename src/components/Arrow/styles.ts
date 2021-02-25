import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #0172ce;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: #0167b9;
  }
`;
