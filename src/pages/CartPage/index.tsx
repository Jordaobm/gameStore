import React, { useCallback } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ParentalRating from '../../components/ParentalRating';
import { useCart } from '../../hooks/cart';
import { formatValue } from '../../utils/formatValue';
import { Container, Content, ButtonFinishOrder, ListGamesInCard, OrderSummary, CardGame, GameInfo, Image, Name, Quantity, SubtotalPrice, Info, ItensAndTotal, Itens, Total, ValueFrete, Frete, FretePrice, TotalOrder, ContentCardGames, Resume, KeepBuying, AlterQuantity, ButtonAddProductQuantity, ButtonRemoveProductQuantity } from './styles';
import { Product } from '../../dtos/types';
import { motion } from 'framer-motion';

const CartPage: React.FC = () => {
    const { cart, removeProductTheCart, addProductInCart } = useCart();

    const addQuantityProduct = useCallback((product: Product) => {
        addProductInCart(product);
    }, [addProductInCart])
    const removeQuantityProduct = useCallback((product: Product) => {
        removeProductTheCart(product);
    }, [removeProductTheCart])

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }


    return (
        <Container>
            <Header />

            <Content>
                <h1>Carrinho</h1>

                <ListGamesInCard>

                    <ContentCardGames>
                        {cart.products.map(product => (
                            <motion.div key={product.product.id} whileHover={{ transition: { duration: 1 } }} initial="hidden" animate="visible" variants={variants}>
                                <CardGame >

                                    <Image src={product.product.image} />
                                    <GameInfo>
                                        <Info>
                                            <Name>{product.product.name}</Name>
                                            <Quantity>
                                                {product.quantity}
                                                <AlterQuantity>
                                                    <ButtonAddProductQuantity onClick={() => addQuantityProduct(product.product)}><FiPlus size={12} /></ButtonAddProductQuantity>
                                                    <ButtonRemoveProductQuantity onClick={() => removeQuantityProduct(product.product)}><FiMinus size={12} /></ButtonRemoveProductQuantity>
                                                </AlterQuantity>
                                            </Quantity>
                                            <SubtotalPrice>
                                                <h5>{formatValue(product.product.price * product.quantity)}</h5>
                                                <h6>{formatValue(product.product.price * 1)} unit.</h6>
                                            </SubtotalPrice>
                                        </Info>

                                        <ParentalRating productParentalRating={product.product.ParentalRating} />

                                    </GameInfo>
                                </CardGame>
                            </motion.div>
                        ))}



                    </ContentCardGames>



                    <Resume>
                        <OrderSummary>
                            <h3>Resumo do pedido</h3>
                            <ItensAndTotal>
                                <Itens>{`Itens(${cart.products.length})`}</Itens>
                                <Total>{formatValue(cart.OrderSubtotal)}</Total>
                            </ItensAndTotal>
                            <ValueFrete>
                                <Frete>Valor do frete</Frete>
                                {cart.FreteTotal === 0 ? <FretePrice color="green">Frete grátis</FretePrice> : <FretePrice color="red">{formatValue(cart.FreteTotal)}</FretePrice>}
                            </ValueFrete>
                            <hr />
                            <TotalOrder>Total: {formatValue(cart.OrderTotal)}</TotalOrder>

                            <ButtonFinishOrder>Finalizar comprar</ButtonFinishOrder>
                            <KeepBuying><Link to='/'>Continue comprando</Link></KeepBuying>
                        </OrderSummary>
                    </Resume>

                </ListGamesInCard>

            </Content>
        </Container>
    )
}

export default CartPage;