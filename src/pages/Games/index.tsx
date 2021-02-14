import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Product } from '../../dtos/types';
import { api } from '../../services/api';
import { formatValue } from '../../utils/formatValue';
import { Container, Content, Seach, ListGames, PriceOrder, ScoreOrder, AlphabeticalOrder, Filter, List, CardGame, Image, Price, Name, GameInfo, LinkGame, Score, SearchContent, SearchInput } from './styles';

const Games: React.FC = () => {

    const [filterStyle, setFilterStyle] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [filter, setFilter] = useState<Product[]>(products);
    const [search, setSearch] = useState<Product[]>([]);

    useEffect(() => {
        api.get<Product[]>('/products').then(response => {
            setProducts(response.data)
            setFilter(response.data);
        })
    }, [])


    const handleSelectFilter = useCallback((select: string) => {
        setSearch([])
        setFilterStyle(select);
        switch (select) {
            case 'Ordenados por preço':
                const organizingProducts = products.sort((product1, product2) => {
                    return product1.price - product2.price;
                })
                setFilter(organizingProducts);
                break;
            case 'Ordenados por popularidade':
                const organizingProductsScore = products.sort((product1, product2) => {
                    return product2.score - product1.score;
                })
                setFilter(organizingProductsScore);
                break;
            case 'Em ordem alfabética':
                const organizingProductsAlphabetical = products.sort((product1, product2) => {
                    let product1LowCase = product1.name.toLowerCase()
                    let product2LowCase = product2.name.toLowerCase()
                    return product1LowCase === product2LowCase ? 0 : product1LowCase > product2LowCase ? 1 : -1;
                })
                setFilter(organizingProductsAlphabetical);
                break;
            default:
                break;
        }



    }, [products])

    const handleInputSeach = useCallback((search: string) => {
        if (search === '') {
            setSearch([])
            return;
        }
        const searchProduct = products.filter(product => product.name.startsWith(search));
        console.log(searchProduct);
        setSearch(searchProduct)
    }, [products])

    const focusedSearchInput = useCallback(()=>{
        setFilterStyle('')
    },[])

    return (
        <Container>
            <Header />
            <Content>
                <Seach>
                    <h1>Refinar resultados</h1>
                    <Filter>
                        <PriceOrder select={filterStyle === 'Ordenados por preço'} onClick={() => handleSelectFilter('Ordenados por preço')}><p>Ordenar por preço</p></PriceOrder>
                        <ScoreOrder select={filterStyle === 'Ordenados por popularidade'} onClick={() => handleSelectFilter('Ordenados por popularidade')}><p>Ordenar por popularidade</p></ScoreOrder>
                        <AlphabeticalOrder select={filterStyle === 'Em ordem alfabética'} onClick={() => handleSelectFilter('Em ordem alfabética')}><p>Ordenar por ordem alfabética</p></AlphabeticalOrder>
                    </Filter>
                </Seach>
                <ListGames>
                    <h1>{filterStyle !== '' ? filterStyle : 'Pesquise por nomes'}</h1>
                    <SearchContent>
                        <SearchInput onFocus={focusedSearchInput} placeholder="Digite um nome" type="text" onChange={(e) => handleInputSeach(e.target.value)} />
                    </SearchContent>
                    <List>

                        {search.length > 0 ? search.map(product => (
                            <CardGame key={product.id}>
                                <LinkGame to={`/product/${product.id}`}>
                                    <Image src={product.image} />
                                    <GameInfo>
                                        <Name>{product.name}</Name>
                                        <Score>Pontuação na loja: {product.score}</Score>
                                        <Price>{formatValue(product.price)}</Price>
                                    </GameInfo>
                                </LinkGame>
                            </CardGame>
                        )) : filter.map(product => (
                            <CardGame key={product.id}>
                                <LinkGame to={`/product/${product.id}`}>
                                    <Image src={product.image} />
                                    <GameInfo>
                                        <Name>{product.name}</Name>
                                        <Score>Pontuação na loja: {product.score}</Score>
                                        <Price>{formatValue(product.price)}</Price>
                                    </GameInfo>
                                </LinkGame>
                            </CardGame>
                        ))}



                    </List>
                </ListGames>
            </Content>
        </Container>
    )
}
export default Games;