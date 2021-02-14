import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Content, GameBanner, Image, GameInfo, Name, Category, Description, Developer, Price, Button, Buy, DeveloperAndCategory, Banner, KeepBuying } from './styles';
import { Link, useRouteMatch } from 'react-router-dom';
import { api } from '../../services/api';
import { Product } from '../../dtos/types';
import { formatValue } from '../../utils/formatValue';
import ParentalRating from '../../components/ParentalRating';
import { useCart } from '../../hooks/cart';
interface RouteParams {
    product: string;
}

const ProductPage: React.FC = () => {
    const { addProductInCart } = useCart();
    const { params } = useRouteMatch<RouteParams>();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        api.get(`/products/${params.product}`).then(response => {
            setProduct(response.data);
        })
    }, [params.product]);

    const handleAddProductInCart = useCallback((product?: Product) => {

        if (product) {
            addProductInCart(product)

        }
    }, [addProductInCart])

    return (
        <>
            <Header />

            <Container>
                <GameBanner>
                    <Banner src={product?.banner} />
                </GameBanner>
                <Content>
                    <Image src={product?.image} />
                    <GameInfo>
                        <div>
                            <Name><h1>{product?.name}</h1></Name>
                            <DeveloperAndCategory>
                                <Developer>‪{product?.developer_name}</Developer>
                                <Category>{product?.categories}‬</Category>
                            </DeveloperAndCategory>
                        </div>
                        {product && <ParentalRating productParentalRating={product.ParentalRating} />}
                        <Description>{product?.Description}</Description>
                    </GameInfo>
                    <Buy>
                        <Price>{product && formatValue(product.price)}</Price>

                        <Button onClick={() => handleAddProductInCart(product)}>Adicionar ao carrinho!</Button>
                        <KeepBuying><Link to='/'>Continue comprando</Link></KeepBuying>
                    </Buy>
                </Content>




            </Container>
        </>

    )
}

export default ProductPage;