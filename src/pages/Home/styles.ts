import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';


export const Container = styled.div`
    width:100%;
    max-width:1120px;
    margin:0 auto;
    padding:0 2%;

`;

export const FeaturedText = styled.div`
    max-width:1120px;
    margin:0 auto;
    height:550px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding:0 2%;

   
`;

export const FeaturedInfo = styled.div`
    text-align:right;

    h3 {
        font-weight:200;
        font-style: normal;
        font-size: 48px;
        line-height: 48px;
        color: #FFFFFF;
    }
    h4 {
        font-weight:400;
        font-style: normal;
        font-size: 30px;
        color: #FFFFFF;
    }
`;

export const NewGames = styled.div`
    margin:60px 0;

   
`;
export const NewGamesTextAndAction = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    h3 {
        font-size: 40px;
        font-weight: 300;
    }

    a {
        font-size: 16px;
        font-weight: 600;
        color:#0172ce;
        text-decoration:none;
        transition:0.2s;
        :hover{
            color:#0167b9;
        }
    }
`;


export const NewGameScroll = styled(ScrollMenu)`
    display:flex;
    position:relative;
    left:-20px;
    
`;
export const NewGameCard = styled.div`
    margin:50px 0;
`;
