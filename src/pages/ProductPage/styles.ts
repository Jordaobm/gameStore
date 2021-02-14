import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    position:absolute;
`;

export const Content = styled.div`
    position:relative;
    top:-220px;
    width:100%;
    max-width:1120px;
    margin:0 auto;
    background-color:white;
    display:flex;
    justify-content:space-around;
    padding:40px;
    border-radius:5px 5px 0px 0px;
    @media(max-width: 1050px){
       flex-direction:column;
       align-items:center;
       justify-content:center;
       top:0;
    }
    
`;

export const GameBanner = styled.div`
   background-color:#000;
`;

export const Banner = styled.img`
    width:100%;
    opacity:0.8;
`;

export const Image = styled.img`
    width:30%;
    @media(max-width: 1050px){
        width:100%;
        max-width:500px;
    }
`;

export const GameInfo = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;  
    @media(max-width: 1050px){
        width:100%;
        flex-direction:column;
        margin-top:20px;
        justify-content:center;
        align-items:center;
    } 
    div {
        @media(max-width: 1050px){
            text-align:center;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }  
    } 
    
`;

export const Name = styled.div`
    h1 {
        font-size: 34px;
        line-height: 42px;
    }
`;
export const Developer = styled.h3`
    
        font-size: 15px;
        font-weight:400;
        color: #000;
    
`;


export const Category = styled.p`
    margin-left:10px;
    font-size: 15px;
    font-weight:400;
    font-weight: 600;
    color: #0067b8;
`;


export const ParentalRating = styled.div`
    font-size: 13px;
    font-weight:400;
    font-weight: 600;
    color: #0067b8;
`;
export const Description = styled.div`
padding-right:10px;
    font-size: 15px;
    color: #000;
`;

export const DeveloperAndCategory = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

`;


export const Buy = styled.div`
    width:20%;
    @media(max-width: 1050px){
        margin-top:20px;
        width:100%;
        justify-content:center;
        align-items:center;
        text-align:center;
    }  
`;



export const Price = styled.div`
    font-size: 30px;
    font-weight: 600;
`;


export const Button = styled.button`
    width:200px;
    margin-top:20px;
    font-weight: 600;
    min-height: 44px;
    height: auto;
    white-space: normal;
    max-width: none;
    position: relative;
    border: 2px solid transparent;
    outline: 0;
    color: #fff;
    background-color: #0067b8;
    cursor: pointer;
    transition:0.2s;

    :hover{
        background-color:#005da6;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    }

    :focus{
        background-color:#005293;
        box-shadow: 0 8px 10px 0 rgb(0 0 0 / 20%);
    }

    @media(max-width: 1050px){
       
        width:100%;
        max-width:300px;
    }  

`;

export const KeepBuying = styled.div`
    margin-top:10px;
    a {
        text-decoration:none;
        font-size: 15px;
        color: #0067b8;
        border:0;
        background-color:transparent;
        cursor: pointer;
    }
`;