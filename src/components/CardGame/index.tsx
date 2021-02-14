import React from 'react';
import { Container, GameInfo, GamePrice, GameTitle, ImageContent, ImageGame } from './styles';
import { formatValue } from '../../utils/formatValue';
import { Product } from '../../dtos/types';


interface CardGameProps {
    product: Product;
}


const CardGame: React.FC<CardGameProps> = ({ product }) => {



    return (
        <Container to={`/product/${product.id}`}>
            <ImageContent>

                <ImageGame src={product.image}/>

            </ImageContent>
            <GameInfo>
                <GameTitle>{product.name}</GameTitle>
                <GamePrice>{formatValue(product.price)}</GamePrice>
            </GameInfo>
        </Container>
    )
}
export default CardGame;