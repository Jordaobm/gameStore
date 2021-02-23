import styled from 'styled-components';


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
    display:flex;
    align-items:center;

    h1 {
        font-size: 28px;
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
        display:flex;
        flex-direction:column;
    }  
    
`;

export const Price = styled.div`
    font-size: 30px;
    font-weight: 600;
`;