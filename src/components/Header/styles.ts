import { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
   width:100%;
   padding:20px 0;
   /* background-color:red;  */
`;
export const Content = styled.div`
    width:100%;
    max-width:1120px;
    margin:0 auto;
    padding:0 2%;
    /* background-color:yellow; */
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
export const Logo = styled.div`
   
`;
export const Categories = styled.div`
    display:flex;
`;



export const Icons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    a {
        text-decoration:none;
    }
`;

interface MyLinkDivProps extends ButtonHTMLAttributes<MyLinkDivProps> {
    active?:boolean;
}

export const MyLinkDiv = styled.button<MyLinkDivProps>`
    
    background-color:transparent;
    border:0;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;

    color: #363636;
    padding: 8px 20px;

    ${props=>props.active && css`
        border-bottom:4px solid #0172ce;
         a {

            color:#0172ce;
         }
;
    `}
`;





export const MyLink = styled(Link)`

    
    color:black;
    text-decoration:none;
`;

export const FlexCart = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    svg {
        color:#000;
        transition:0.2s;
        :hover{
        color:#0172ce;
    }
    }

   
`;

export const CircleItensCart = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    top:9px;
    left:-9px;
    background-color:#0172ce;

    width:18px;
    height:18px;
    border-radius:9px;
`;
export const SpanNumber = styled.div`
    text-decoration:none;
    color:white;
    font-size:9px;
`;