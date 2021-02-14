import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Content, GameBanner, Image, GameInfo, Name, Category, Description, Developer, Price, Button, Buy, DeveloperAndCategory, Banner, KeepBuying, GoToCart, Star } from './styles';
import { Link, useRouteMatch } from 'react-router-dom';
import { api } from '../../services/api';
import { Product } from '../../dtos/types';
import { formatValue } from '../../utils/formatValue';
import ParentalRating from '../../components/ParentalRating';
import { useCart } from '../../hooks/cart';
import { FiStar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { useFavorites } from '../../hooks/favorites';

interface RouteParams {
    product: string;
}

interface ProductData {
    existInCart?: boolean;
    quantity: number;
}

const ProductPage: React.FC = () => {
    const { addProductInCart, cart } = useCart();
    const { addProductInFavorites, removeProductTheFavorites, favorites } = useFavorites();
    const { params } = useRouteMatch<RouteParams>();
    const [product, setProduct] = useState<Product>();
    const [buttonAddProductInCartStyle, setButtonAddProductInCartStyle] = useState<ProductData>({ existInCart: false, quantity: 0 });
    const [isFavorite, setIsFavorite] = useState(false);



    useEffect(() => {
        api.get(`/products/${params.product}`).then(response => {
            setProduct(response.data);
        })
    }, [params.product]);

    const handleAddProductInCart = useCallback((product?: Product) => {

        if (product) {
            addProductInCart(product)
            const findProduct = cart.products.find(findproduct => findproduct.product.id === product.id);
            if (findProduct) {
                setButtonAddProductInCartStyle({ quantity: findProduct.quantity, existInCart: true });
            }

        }
    }, [addProductInCart, cart.products])

    useEffect(() => {
        const findProduct = cart.products.find(findproduct => findproduct.product.id === product?.id);
        if (findProduct) {
            setButtonAddProductInCartStyle({ quantity: findProduct.quantity, existInCart: true });
        }
    }, [cart.products, product?.id])

    useEffect(() => {
        if (product) {
            const alreadyIsFavorite = favorites.find(find => find.id === product.id);
            setIsFavorite(!!alreadyIsFavorite);
        }
    }, [favorites, product])

    const handleAddGameInFavorites = useCallback((product?: Product, toggle?: boolean) => {
        setIsFavorite(!isFavorite)

        if (product && toggle) {
            addProductInFavorites(product);
        }
        if (product && !toggle) {
            removeProductTheFavorites(product)
        }
    }, [addProductInFavorites, removeProductTheFavorites, isFavorite])

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
                            <Name><h1>{product?.name}</h1> <Star onClick={() => handleAddGameInFavorites(product, !isFavorite)}>{isFavorite ? <AiFillStar color="yellow" size={30} /> : <FiStar size={30} />}</Star></Name>


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

                        {buttonAddProductInCartStyle.existInCart ? <Button buttonStyle={buttonAddProductInCartStyle.existInCart} onClick={() => handleAddProductInCart(product)}>Produto Adicionado ({buttonAddProductInCartStyle.quantity})</Button> : <Button buttonStyle={false} onClick={() => handleAddProductInCart(product)}>Adicionar ao carrinho!</Button>}
                        <KeepBuying><Link to='/games'>Continue comprando</Link></KeepBuying>

                        <GoToCart><Link to="/cart">Ir para o carrinho!</Link>  </GoToCart>
                    </Buy>
                </Content>




            </Container>
        </>

    )
}

export default ProductPage;