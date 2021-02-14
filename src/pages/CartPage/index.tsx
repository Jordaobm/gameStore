import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ParentalRating from '../../components/ParentalRating';
import { useCart } from '../../hooks/cart';
import { formatValue } from '../../utils/formatValue';
import { Container, Content, ButtonFinishOrder, ListGamesInCard, OrderSummary, CardGame, GameInfo, Image, Name, Quantity, SubtotalPrice, RemoveGameTheCart, Info, ItensAndTotal, Itens, Total, ValueFrete, Frete, FretePrice, TotalOrder, ContentCardGames, Resume, KeepBuying } from './styles';


const CartPage: React.FC = () => {
    const { cart, removeProductTheCart } = useCart();

    return (
        <Container>
            <Header />

            <Content>
                <h1>Carrinho</h1>

                <ListGamesInCard>

                    <ContentCardGames>
                        {cart.products.map(product => (
                            <CardGame key={product.product.id}>

                                <Image src={product.product.image} />
                                <GameInfo>
                                    <Info>
                                        <Name>{product.product.name}</Name>
                                        <Quantity>{product.quantity}</Quantity>
                                        <SubtotalPrice>
                                            <h5>{formatValue(product.product.price * product.quantity)}</h5>
                                            <h6>{formatValue(product.product.price)} unit.</h6>
                                        </SubtotalPrice>
                                    </Info>

                                    <ParentalRating productParentalRating={product.product.ParentalRating} />
                                    <RemoveGameTheCart onClick={()=>removeProductTheCart(product.product)}>Remover</RemoveGameTheCart>

                                </GameInfo>
                            </CardGame>
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