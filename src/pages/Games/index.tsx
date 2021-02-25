import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import PlaceholderGamesLoad from '../../components/PlaceholderGamesLoad';
import { Product } from '../../dtos/types';
import { formatValue } from '../../utils/formatValue';
import {
  Container,
  Content,
  Seach,
  ListGames,
  PriceOrder,
  ScoreOrder,
  AlphabeticalOrder,
  Filter,
  List,
  CardGame,
  Image,
  Price,
  Name,
  GameInfo,
  LinkGame,
  Score,
  SearchContent,
  SearchInput,
} from './styles';
import data from '../../products.json';

const Games: React.FC = () => {
  const [filterStyle, setFilterStyle] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<Product[]>(products);
  const [search, setSearch] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { products } = data;
    setProducts(products);
    setFilter(products);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleSelectFilter = useCallback(
    (select: string) => {
      setSearch([]);
      setFilterStyle(select);
      setLoading(true);
      switch (select) {
        case 'Ordenados por preço':
          const organizingProducts = products.sort((product1, product2) => {
            return product1.price - product2.price;
          });
          setFilter(organizingProducts);
          setTimeout(() => {
            setLoading(false);
          }, 500);
          break;
        case 'Ordenados por popularidade':
          const organizingProductsScore = products.sort(
            (product1, product2) => {
              return product2.score - product1.score;
            },
          );
          setFilter(organizingProductsScore);
          setTimeout(() => {
            setLoading(false);
          }, 500);
          break;
        case 'Em ordem alfabética':
          const organizingProductsAlphabetical = products.sort(
            (product1, product2) => {
              const product1LowCase = product1.name.toLowerCase();
              const product2LowCase = product2.name.toLowerCase();
              return product1LowCase === product2LowCase
                ? 0
                : product1LowCase > product2LowCase
                ? 1
                : -1;
            },
          );
          setFilter(organizingProductsAlphabetical);
          setTimeout(() => {
            setLoading(false);
          }, 500);
          break;
        default:
          setFilter(products);
          setTimeout(() => {
            setLoading(false);
          }, 500);
          break;
      }
    },
    [products],
  );

  const handleInputSeach = useCallback(
    (search: string) => {
      setLoading(true);
      if (search === '') {
        setSearch([]);
        setLoading(false);
        return;
      }
      const searchProduct = products.filter(product =>
        product.name.startsWith(search),
      );
      setSearch(searchProduct);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    },
    [products],
  );

  const focusedSearchInput = useCallback(() => {
    setFilterStyle('');
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Container>
      <Header />
      <Content>
        <Seach>
          <h1>Refinar resultados</h1>
          <Filter>
            <PriceOrder
              select={filterStyle === 'Ordenados por preço'}
              onClick={() => handleSelectFilter('Ordenados por preço')}
            >
              <p>Ordenar por preço</p>
            </PriceOrder>
            <ScoreOrder
              select={filterStyle === 'Ordenados por popularidade'}
              onClick={() => handleSelectFilter('Ordenados por popularidade')}
            >
              <p>Ordenar por popularidade</p>
            </ScoreOrder>
            <AlphabeticalOrder
              select={filterStyle === 'Em ordem alfabética'}
              onClick={() => handleSelectFilter('Em ordem alfabética')}
            >
              <p>Ordenar por ordem alfabética</p>
            </AlphabeticalOrder>
          </Filter>
        </Seach>
        <ListGames>
          <h1>{filterStyle !== '' ? filterStyle : 'Pesquise por nomes'}</h1>
          <SearchContent>
            <SearchInput
              onFocus={focusedSearchInput}
              placeholder="Digite um nome"
              type="text"
              onChange={e => handleInputSeach(e.target.value)}
            />
          </SearchContent>
          <List>
            {search.length > 0
              ? search.map(product => {
                  if (!loading) {
                    return (
                      <CardGame key={product.id}>
                        <motion.div
                          whileHover={{ transition: { duration: 1 } }}
                          initial="hidden"
                          animate="visible"
                          variants={variants}
                        >
                          <LinkGame to={`/product/${product.id}`}>
                            <Image src={product.image} />
                            <GameInfo>
                              <Name>{product.name}</Name>
                              <Score>Pontuação na loja: {product.score}</Score>
                              <Price>{formatValue(product.price)}</Price>
                            </GameInfo>
                          </LinkGame>
                        </motion.div>
                      </CardGame>
                    );
                  }
                  return <PlaceholderGamesLoad key={product.id} />;
                })
              : filter.map(product => {
                  if (!loading) {
                    return (
                      <CardGame key={product.id}>
                        <motion.div
                          whileHover={{ transition: { duration: 1 } }}
                          initial="hidden"
                          animate="visible"
                          variants={variants}
                        >
                          <LinkGame to={`/product/${product.id}`}>
                            <Image src={product.image} />
                            <GameInfo>
                              <Name>{product.name}</Name>
                              <Score>Pontuação na loja: {product.score}</Score>
                              <Price>{formatValue(product.price)}</Price>
                            </GameInfo>
                          </LinkGame>
                        </motion.div>
                      </CardGame>
                    );
                  }
                  return <PlaceholderGamesLoad key={product.id} />;
                })}
          </List>
        </ListGames>
      </Content>
    </Container>
  );
};
export default Games;
