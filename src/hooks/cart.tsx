import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Cart, LocalStorageProductCart, Product } from '../dtos/types';

interface CartContextData {
    addProductInCart(product: Product): void;
    removeProductTheCart(product: Product): void;
    cart: Cart;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {

    const [cart, setCart] = useState<Cart>(() => {
        const local = localStorage.getItem('@GameStore:localCart');
        if (local) {
            const parsed: Cart = JSON.parse(local);
            return parsed;
        }
        return { FreteTotal: 0, OrderSubtotal: 0, OrderTotal: 0, products: [] }
    });

    // SALVANDO PRODUTOS

    const addProductInCart = useCallback((product: Product) => {

        const alreadyExistProductInCart = cart.products.findIndex(findProduct => findProduct.product.id === product.id);

        if (alreadyExistProductInCart >= 0) {
            cart.products[alreadyExistProductInCart].quantity++;
        }

        if (alreadyExistProductInCart < 0) {
            cart.products.push({ quantity: 1, product })
        }

        let subtotal = 0;
        let frete = 0;

        cart.products.map(product => {
            subtotal = subtotal + product.product.price * product.quantity;
            frete = frete + 10 * product.quantity

        })

        let total = 0;        
        if(subtotal> 250){
            frete = 0;
            total = subtotal;
        } else {
            total = subtotal+frete;
        }

        setCart({
            FreteTotal: frete,
            OrderSubtotal: subtotal,
            OrderTotal: total,
            products: cart.products,
        })
    }, [cart.products])

    const removeProductTheCart = useCallback((product: Product) => {
        const existProductInTheCart = cart.products.findIndex(index => index.product.id === product.id);

        console.log(existProductInTheCart)

        if (existProductInTheCart >= 0) {

            cart.products[existProductInTheCart].quantity > 1 ? cart.products[existProductInTheCart].quantity-- : cart.products.splice(existProductInTheCart, 1)
        }

        let subtotal = 0;
        let frete = 0;

        cart.products.map(product => {
            subtotal = subtotal + product.product.price * product.quantity;
            frete = frete + 10 * product.quantity
        })
        let total = 0;        
        if(subtotal> 250){
            frete = 0;
            total = subtotal;
        } else {
            total = subtotal+frete;
        }

        setCart({
            FreteTotal: frete,
            OrderSubtotal: subtotal,
            OrderTotal: total,
            products: cart.products,
        })

    }, [cart.products])



    localStorage.setItem('@GameStore:localCart', JSON.stringify(cart));

    return (
        <CartContext.Provider value={{ addProductInCart, cart, removeProductTheCart }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart(): CartContextData {
    const context = useContext(CartContext);
    return context;
}

export {
    CartProvider,
    useCart,
}