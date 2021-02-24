import React from 'react';
import {
  Container,
  GameInfo,
  GamePrice,
  GameTitle,
  ImageContent,
  ImageGame,
} from './styles';
import { formatValue } from '../../utils/formatValue';
import { Product } from '../../dtos/types';

interface CardGameProps {
  product: Product;
}

const CardGame: React.FC<CardGameProps> = ({ product }) => {
  return (
    <Container to={`/product/${product.id}`}>
      <ImageContent>
        <ImageGame src={product.image} />
      </ImageContent>
      <GameInfo>
        <GameTitle>
          <h3>{product.name}</h3>
        </GameTitle>
        <GamePrice>
          <p>{formatValue(product.price)}</p>
        </GamePrice>
      </GameInfo>
    </Container>
  );
};
export default CardGame;
