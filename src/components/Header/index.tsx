import React, { useCallback, useState } from 'react';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';

import { Link, useRouteMatch } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../hooks/cart';
import {
  Container,
  HeaderDesktop,
  HeaderMobile,
  Content,
  Logo,
  Categories,
  Icons,
  MyLink,
  MyLinkDiv,
  CircleItensCart,
  SpanNumber,
  FlexCart,
  IconMenu,
} from './styles';

const Header: React.FC = () => {
  const match = useRouteMatch();
  const { cart } = useCart();
  const [showCategoriesHeaderMobile, setShowCategoriesHeaderMobile] = useState(
    'none',
  );

  const showOrHideCategories = useCallback(() => {
    if (showCategoriesHeaderMobile === 'none') {
      setShowCategoriesHeaderMobile('flex');
    } else {
      setShowCategoriesHeaderMobile('none');
    }
  }, [showCategoriesHeaderMobile]);
  const variants = {
    open: {
      display: 'block',
      x: 0,
    },
    closed: {
      display: 'none',
      x: '-100%',
    },
  };
  return (
    <Container>
      <HeaderDesktop>
        <Logo to="/">
          <p>GameStore</p>
        </Logo>
        <Categories style={{ display: 'flex' }}>
          <MyLinkDiv active={match.path === '/'}>
            <MyLink to="/">Home</MyLink>
          </MyLinkDiv>
          <MyLinkDiv active={match.path === '/games'}>
            <MyLink to="/games">Games</MyLink>
          </MyLinkDiv>
          <MyLinkDiv active={match.path === '/favorites'}>
            <MyLink to="/favorites">Favoritos</MyLink>
          </MyLinkDiv>
        </Categories>
        <Icons>
          <Link
            to="/cart"
            children={
              <FlexCart>
                <FiShoppingCart
                  size={22}
                  color={match.url === '/cart' ? '#0172ce' : '#000'}
                />
                {cart.products.length > 0 && (
                  <CircleItensCart>
                    <SpanNumber>{cart.products.length}</SpanNumber>
                  </CircleItensCart>
                )}
              </FlexCart>
            }
          />
        </Icons>
      </HeaderDesktop>

      <HeaderMobile>
        <Content>
          <Logo to="/">
            <p>GameStore</p>
          </Logo>
          <IconMenu>
            <FiMenu size={22} onClick={showOrHideCategories} />
          </IconMenu>
        </Content>

        <motion.nav
          animate={showCategoriesHeaderMobile === 'flex' ? 'open' : 'closed'}
          variants={variants}
        >
          <Categories>
            <MyLinkDiv active={match.path === '/'}>
              <MyLink to="/">Home</MyLink>
            </MyLinkDiv>
            <MyLinkDiv active={match.path === '/games'}>
              <MyLink to="/games">Games</MyLink>
            </MyLinkDiv>
            <MyLinkDiv active={match.path === '/favorites'}>
              <MyLink to="/favorites">Favoritos</MyLink>
            </MyLinkDiv>
          </Categories>
          <Icons>
            <Link
              to="/cart"
              children={
                <FlexCart>
                  <FiShoppingCart
                    size={22}
                    color={match.url === '/cart' ? '#0172ce' : '#000'}
                  />
                  {cart.products.length > 0 && (
                    <CircleItensCart>
                      <SpanNumber>{cart.products.length}</SpanNumber>
                    </CircleItensCart>
                  )}
                </FlexCart>
              }
            />
          </Icons>
        </motion.nav>
      </HeaderMobile>
    </Container>
  );
};

export default Header;
