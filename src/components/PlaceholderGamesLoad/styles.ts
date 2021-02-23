import styled from 'styled-components';
export const CardGame = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    transition:0.1s;

    :hover {
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
    }
`;

export const LinkGame = styled.div`
    padding:10px;
    text-decoration:none;
    color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   
`;

export const Image = styled.img`
    width:180px;
`;

export const GameInfo = styled.div`
    margin-top:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
`;
export const Name = styled.p`
    font-weight: 300;
    font-size: 15px;
`;
export const Price = styled.p`
    font-weight: 600;
    font-size: 14px;
`;
export const Score = styled.p`
    font-weight: 200;
    font-size: 14px;
    color:#0172ce;
`;