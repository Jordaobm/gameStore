import React from 'react';
import { Container, Content, Logo, Categories, Icons, MyLink, MyLinkDiv, CircleItensCart, SpanNumber, FlexCart } from './styles';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import { useCart } from '../../hooks/cart';

const Header: React.FC = () => {

    const { path } = useRouteMatch();
    const { cart } = useCart();
    return (
        <Container>
            <Content>
                <Logo>
                    <p>GameStore</p>
                </Logo>
                <Categories>
                    <MyLinkDiv active={path === '/'}><MyLink to='/' >Home</MyLink></MyLinkDiv>
                    <MyLinkDiv active={path === '/games'}><MyLink to='/games' >Games</MyLink></MyLinkDiv>
                    <MyLinkDiv active={path === '/collections'}><MyLink to='/collections' >Coleções</MyLink></MyLinkDiv>
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