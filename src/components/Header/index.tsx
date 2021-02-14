import React from 'react';
import { Container, Content, Logo, Categories, Icons, MyLink, MyLinkDiv, CircleItensCart, SpanNumber, FlexCart } from './styles';
import { FiShoppingCart } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import { useCart } from '../../hooks/cart';

const Header: React.FC = () => {

    const match = useRouteMatch();
    const { cart } = useCart();
    return (
        <Container>
            <Content>
                <Logo to="/">
                    <p>GameStore</p>
                </Logo>
                <Categories>
                    <MyLinkDiv active={match.path === '/'}><MyLink to='/' >Home</MyLink></MyLinkDiv>
                    <MyLinkDiv active={match.path === '/games'}><MyLink to='/games' >Games</MyLink></MyLinkDiv>
                    <MyLinkDiv active={match.path === '/favorites'}><MyLink to='/favorites' >Favoritos</MyLink></MyLinkDiv>
                </Categories>
                <Icons>
                    <Link to="/cart" children={
                        <FlexCart>
                            <FiShoppingCart size={22} />
                            {cart.products.length>0 && <CircleItensCart>
                                <SpanNumber>{cart.products.length}</SpanNumber>
                            </CircleItensCart>}
                        </FlexCart>
                    } />
                </Icons>

            </Content>
        </Container>
    )
}

export default Header;