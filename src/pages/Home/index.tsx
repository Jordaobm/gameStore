import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import {
  BackgroundParallax,
  Container,
  FeaturedInfo,
  FeaturedText,
  NewGames,
  NewGameScroll,
  NewGamesTextAndAction,
} from './styles';
import CardGame from '../../components/CardGame';
import Arrow from '../../components/Arrow';
import { Product } from '../../dtos/types';
import data from '../../products.json';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredGame, setFeaturedGame] = useState<Product>();

  useEffect(() => {
    const { products } = data;

    setProducts(products);

    let scoreCompare = 0;
    products.map(product => {
      const isBigger = product.score > scoreCompare;
      if (isBigger) {
        scoreCompare = product.score;
      }
      setFeaturedGame(products.find(product => product.score === scoreCompare));

      return product;
    });
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Header />
      <motion.div
        whileHover={{ transition: { duration: 1 } }}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <BackgroundParallax>
          <Parallax
            blur={3}
            bgImageStyle={{ opacity: '.5', backgroundColor: '#000' }}
            style={{ height: '88vh' }}
            bgImage={featuredGame?.banner}
            strength={200}
          >
            <FeaturedText>
              <FeaturedInfo>
                <h3>Destaque da semana</h3>
                <h4>{featuredGame?.name}</h4>
              </FeaturedInfo>
            </FeaturedText>
          </Parallax>
        </BackgroundParallax>
        <Container>
          <NewGames>
            <NewGamesTextAndAction>
              <h3>Novos Jogos</h3>
              <Link to="/games">Visualizar todos</Link>
            </NewGamesTextAndAction>
            <NewGameScroll
              data={products.map(product => (
                <CardGame product={product} key={product.id} />
              ))}
              arrowLeft={<Arrow icon="left" />}
              arrowRight={<Arrow icon="rigth" />}
              alignCenter={false}
              dragging={false}
              wheel={false}
              transition={0.5}
            />
          </NewGames>
        </Container>
      </motion.div>
    </>
  );
};
export default Home;
