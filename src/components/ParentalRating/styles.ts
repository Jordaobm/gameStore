import styled, { css } from 'styled-components';

interface ContainerProps {
    color:string
}

export const Container = styled.div<ContainerProps>`
margin:10px 0;
    display:flex;
    justify-content:center;
    align-items:center;
    width:30px;
    height:30px;
    border-radius:5px;
    ${props=>props.color && css`background-color:${props.color};`}
`;
export const Value = styled.p`
    color:#fff;
    font-size:14px;
`;