import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { BackgroundParallax, Container, FeaturedInfo, FeaturedText, NewGames, NewGameScroll, NewGamesTextAndAction } from './styles';
import banner from '../../assets/banner.jpg';
import { Background, Parallax } from 'react-parallax';
import CardGame from '../../components/CardGame';
import Arrow from '../../components/Arrow';
import { api } from '../../services/api';
import { Product } from '../../dtos/types';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [featuredGame, setFeaturedGame] = useState<Product>();

    useEffect(() => {
        api.get<Product[]>('/products').then(response => {
            setProducts(response.data);
            const products = response.data;

            let scoreCompare = 0
            const compare = products.map(product => {
                const isBigger = product.score > scoreCompare;
                if (isBigger) {
                    scoreCompare = product.score;
                }
            })
            setFeaturedGame(products.find(product => product.score === scoreCompare))
        })
    }, [])

    return (
        <>
            <Header />

            <BackgroundParallax>
                <Parallax blur={3} bgImageStyle={{ opacity: '.5', backgroundColor: '#000' }} style={{ height: '88vh' }} bgImage={featuredGame?.banner} strength={200}>

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
                        data={products.map(product => <CardGame product={product} key={product.id} />)}
                        arrowLeft={<Arrow icon="left" />}
                        arrowRight={<Arrow icon="rigth" />}
                        alignCenter={false}
                        dragging={false}
                        wheel={false}
                        transition={0.5}

                    />
                </NewGames>

                {/* <NewGames>
                    <NewGamesTextAndAction>
                        <h3>Em breve</h3>
                        <h4>Visualizar todos</h4>
                    </NewGamesTextAndAction>
                    <NewGameScroll
                        data={products.map(product => <CardGame product={product} key={product.id} />)}
                        arrowLeft={<Arrow icon="left" />}
                        arrowRight={<Arrow icon="rigth" />}
                        alignCenter={false}
                        dragging={false}
                        wheel={false}
                        transition={1}

                    />
                </NewGames> */}
            </Container>


        </>
    )
}
export default Home;