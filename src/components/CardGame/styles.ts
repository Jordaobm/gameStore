import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    padding:40px 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transition:0.2s;
    text-decoration:none;

    :hover{
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    }
    

`;
export const ImageContent = styled.div`
    width:180px;
    

`;

export const ImageGame = styled.img`
    width:180px;
    height:180px;
`;
export const GameInfo = styled.div`
    margin:8px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
export const GameTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #363636;
`;
export const GamePrice = styled.div`
    color: #363636;
    font-size: 1rem;
`;