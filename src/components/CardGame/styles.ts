import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  text-decoration: none;
  border-radius: 5px;

  :hover {
    background-color: white;
  }
`;
export const ImageContent = styled.div`
  width: 180px;
`;

export const ImageGame = styled.img`
  width: 180px;
  height: 180px;
`;
export const GameInfo = styled.div`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const GameTitle = styled.div`
  h3 {
    font-weight: 600;
    font-size: 16px;
    color: #363636;
  }
`;
export const GamePrice = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    color: #363636;
    transition: 0.2s;

    :hover {
      color: #46b314;
    }
  }
`;
