import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
    width:100%;
    max-width:1120px;
    margin:0 auto;
    display:flex;
    margin-top:50px;
`;
export const Seach = styled.div`
    width:30%;
    /* background-color:red; */

    h1 {
        font-size: 24px;
        line-height: 28px;
        font-weight: 600;
        padding:10px;
    }
`;
export const ListGames = styled.div`
    width:69%;
    margin-left:1%;
    /* background-color:yellow; */
    h1 {
        font-size: 24px;
        line-height: 28px;
        font-weight: 600;
        padding:10px;
    }

`;

export const Filter = styled.div`
    background-color:#fafafa;
    padding:20px 0px;
`;

interface FilterStyleProps {
    select?: boolean;
}

export const PriceOrder = styled.div<FilterStyleProps>`
    padding:20px 0;
    cursor: pointer;
    p {
        padding:0 10px;
        font-size: 15px;
        color: #000;
    }

    :hover {
        background-color:#e1e1e1;
    }

    ${props => props.select && css`background-color:#e1e1e1;`}
`;
export const ScoreOrder = styled.div<FilterStyleProps>`
    padding:20px 0;
    cursor: pointer;
    p {
        padding:0 10px;
        font-size: 15px;
        color: #000;
    }

    :hover {
        background-color:#e1e1e1;
    }
    ${props => props.select && css`background-color:#e1e1e1;`}

`;
export const AlphabeticalOrder = styled.div<FilterStyleProps>`
    padding:20px 0;
    cursor: pointer;
    p {
        padding:0 10px;
        font-size: 15px;
        color: #000;
    }

    :hover {
        background-color:#e1e1e1;
    }
    ${props => props.select && css`background-color:#e1e1e1;`}

`;

export const List = styled.div`
    display:grid;
    grid-gap:20px;
    grid-template-columns: 1fr 1fr 1fr;
    width:100%;
`;

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

export const LinkGame = styled(Link)`
    padding:10px;
    text-decoration:none;
    color:#000;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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
export const SearchContent = styled.div`
    width:100%;
    margin-top:10px;
    margin-bottom:20px;
    /* background-color:red; */
    display:flex;
    justify-content:space-around;
    align-items:center;
`;
export const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-left: 12px;

    font-size:15px;

    :focus{
    border:2px solid #0172ce;
    }
`;

export const SearchButton = styled.div`
    width:20%;
    background-color:red;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#0172ce;
    border-radius:0 5px 5px 0;
    cursor: pointer;

    p {
        color:white;
        margin-left:5px;
    }

    svg {
        color:white;

    }
`;
