import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
    width:100%;
    max-width:1120px;
    margin:0 auto;
    margin-top:20px;
    padding:0 2%;
    h1 {
        font-size: 24px;
        line-height: 28px;
        padding: 36px 0 4px;
        font-weight: 600;
        padding-top: 0;
        @media(max-width: 500px){
            text-align:center;
            font-size: 24px;
            line-height: 28px;
            padding: 0px;
        }
    }

   
    
`;
export const ListGamesInCard = styled.div`
   display:flex;
   justify-content:space-between;
   margin-top:30px;
   margin-left:-10px;

   @media(max-width: 1000px){
       flex-direction:column;
    }
`;
export const ContentCardGames = styled.div`
    padding-right:20px;
    display:flex;
    flex-direction:column;
    width:70%;
    @media(max-width: 1000px){
       width:100%;
    padding-right:0px;

    }
`;






export const CardGame = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:50px;
    border-top:1px solid rgba(0,0,0,.2);
    padding:20px 0;

    @media(max-width: 500px){
       flex-direction:column;
    }
`;



export const Image = styled.img`
    width:15%;
    @media(max-width: 500px){
       width:100%;
       max-width:200px;
    }
`;

export const Info = styled.div`
    display:flex;
    /* align-items:center; */
    justify-content:space-between;
    width:100%;
`;


export const GameInfo = styled.div`
    width:85%;
    padding:0 10px;

    @media(max-width: 500px){
       margin-top:20px;
    }
`;
export const Name = styled.div`
    width:60%;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
`;
export const Quantity = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const SubtotalPrice = styled.div`
    width:20%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    h5 {
        font-size: 20px;
        color: #000;
    }

    h6 {
        margin-top:10px;
        font-size: 12px;
        color: #8a8a8a;
        font-weight: 200;

    }
   
`;

export const RemoveGameTheCart = styled.button`
    font-size: 15px;
    color: #0067b8;
    border:0;
    background-color:transparent;
    cursor: pointer;
`;
export const Resume = styled.div`
    width:30%;
    margin-left:50px;

    @media(max-width: 1000px){
       width:100%;
       margin-left:5px;
    }
`

export const OrderSummary = styled.div`
    hr {
    margin-top: 18px;
        
    }
    background: #f1f1f1;
    padding: 24px;

    h3 {
        margin:10px 0 20px 0px;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px
    }
`;
export const ItensAndTotal = styled.div`
    padding-top: 18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
export const Itens = styled.div`
    font-weight:400;
    font-size: 15px;
    line-height: 20px;
`;
export const Total = styled.div`
    font-weight:400;
    font-size: 15px;
    line-height: 20px;
`;
export const ValueFrete = styled.div`
    padding-top: 18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
export const Frete = styled.div`
     font-weight:400;
    font-size: 15px;
    line-height: 20px;
`;

interface FretePriceProps {
    color?: string;
}

export const FretePrice = styled.div<FretePriceProps>`
    font-weight:400;
    font-size: 15px;
    line-height: 20px;

    ${props => props.color && css`color:${props.color};`}
`;
export const TotalOrder = styled.div`
    padding-top: 18px;
    font-weight:400;
    font-size: 15px;
    line-height: 20px;

`;
export const ButtonFinishOrder = styled.div`
    margin-top: 18px;
    width:100%;
    border: 2px solid transparent;
    outline: 0;
    color: #fff;
    background-color: #0067b8;
    display:flex;
    align-items:center;
    justify-content:center;
    height:40px;
    cursor: pointer;
    transition:0.2s;

    :hover{
        background-color:#005da6;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

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
export const AlterQuantity = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left:10px;
`;

export const ButtonAddProductQuantity = styled.button`
    cursor: pointer;
    border:0;
    margin-bottom:5px;
    background-color:transparent;

    :hover{
        color:#388f10;
    }
`;
export const ButtonRemoveProductQuantity = styled.button`
     cursor: pointer;
    border:0;
    background-color:transparent;

    :hover{
        color:red;
    }

`;