import React, { useCallback } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import ParentalRating from '../../components/ParentalRating';
import { useCart } from '../../hooks/cart';
import { formatValue } from '../../utils/formatValue';
import {
  Container,
  Content,
  ButtonFinishOrder,
  ListGamesInCard,
  OrderSummary,
  CardGame,
  GameInfo,
  Image,
  Name,
  Quantity,
  SubtotalPrice,
  Info,
  ItensAndTotal,
  Itens,
  Total,
  ValueFrete,
  Frete,
  FretePrice,
  TotalOrder,
  ContentCardGames,
  Resume,
  KeepBuying,
  AlterQuantity,
  ButtonAddProductQuantity,
  ButtonRemoveProductQuantity,
} from './styles';
import { Product } from '../../dtos/types';

const CartPage: React.FC = () => {
  const { cart, removeProductTheCart, addProductInCart } = useCart();

  const addQuantityProduct = useCallback(
    (product: Product) => {
      addProductInCart(product);
    },
    [addProductInCart],
  );
  const removeQuantityProduct = useCallback(
    (product: Product) => {
      removeProductTheCart(product);
    },
    [removeProductTheCart],
  );

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Container>
      <Header />

      <Content>
        <h1>Carrinho</h1>

        <ListGamesInCard>
          <ContentCardGames>
            {cart.products.map(product => (
              <motion.div
                key={product.product.id}
                whileHover={{ transition: { duration: 1 } }}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <CardGame>
                  <Image src={product.product.image} />
                  <GameInfo>
                    <Info>
                      <Name to={`/product/${product.product.id}`}>
                        <h1>{product.product.name}</h1>
                      </Name>
                      <Quantity>
                        <p>{product.quantity}</p>
                        <AlterQuantity>
                          <ButtonAddProductQuantity
                            onClick={() => addQuantityProduct(product.product)}
                          >
                            <FiPlus size={12} />
                          </ButtonAddProductQuantity>
                          <ButtonRemoveProductQuantity
                            onClick={() =>
                              removeQuantityProduct(product.product)
                            }
                          >
                            <FiMinus size={12} />
                          </ButtonRemoveProductQuantity>
                        </AlterQuantity>
                      </Quantity>
                      <SubtotalPrice>
                        <p>
                          {formatValue(
                            product.product.price * product.quantity,
                          )}
                        </p>
                        <span>
                          {formatValue(product.product.price * 1)} unit.
                        </span>
                      </SubtotalPrice>
                    </Info>
                  </GameInfo>
                </CardGame>
              </motion.div>
            ))}
          </ContentCardGames>

          <Resume>
            <OrderSummary>
              <h3>Resumo do pedido</h3>
              <ItensAndTotal>
                <Itens>
                  <p>{`Itens(${cart.products.length})`}</p>
                </Itens>
                <Total>
                  <p>{formatValue(cart.OrderSubtotal)}</p>
                </Total>
              </ItensAndTotal>
              <ValueFrete>
                <Frete>
                  <p>Valor do frete</p>
                </Frete>
                {cart.FreteTotal === 0 ? (
                  <FretePrice color="green">
                    <p>Frete grátis</p>
                  </FretePrice>
                ) : (
                  <FretePrice color="red">
                    <p>{formatValue(cart.FreteTotal)}</p>
                  </FretePrice>
                )}
              </ValueFrete>
              <hr />
              <TotalOrder>
                <p>Total: {formatValue(cart.OrderTotal)}</p>
              </TotalOrder>

              <ButtonFinishOrder>
                <p>Finalizar comprar</p>
              </ButtonFinishOrder>
              <KeepBuying>
                <Link to="/games">Continue comprando</Link>
              </KeepBuying>
            </OrderSummary>
          </Resume>
        </ListGamesInCard>
      </Content>
    </Container>
  );
};

export default CartPage;
