import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
  }
`;

export const Info = styled.div`
  h1 {
    font-size: 40px;
    color: white;
    font-weight: 800;
  }

  h2 {
    font-size: 20px;
    color: white;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    color: white;
    font-weight: 200;
  }
`;
