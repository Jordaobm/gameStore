import React from 'react';
import CardGame from '../../components/CardGame';
import Header from '../../components/Header';
import { useFavorites } from '../../hooks/favorites';
import { List } from '../Games/styles';
import { Container, Content, NotFavorite } from './styles';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <Container>
      <Header />
      <Content>
        <h1>Meus jogos favoritos:</h1>

        <List>
          {favorites.length > 0 ? (
            favorites.map(product => (
              <CardGame key={product.id} product={product} />
            ))
          ) : (
            <NotFavorite>Você não tem nenhum jogo favorito</NotFavorite>
          )}
        </List>
      </Content>
    </Container>
  );
};

export default Favorites;
