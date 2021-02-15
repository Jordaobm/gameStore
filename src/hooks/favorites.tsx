import React, { createContext, useCallback, useContext, useState } from 'react';
import { Product } from '../dtos/types';

interface favoritesContextData {
    addProductInFavorites(product: Product): void;
    removeProductTheFavorites(product: Product): void;
    favorites:Product[];

}

const FavoritesContext = createContext<favoritesContextData>({} as favoritesContextData)

const FavoritesContextProvider: React.FC = ({ children }) => {

    const [favorites, setFavorites] = useState<Product[]>(() => {
        const loadFavorites = localStorage.getItem('@GameStore:favorites');
        if (loadFavorites) {
            const parsed = JSON.parse(loadFavorites);
            return parsed;
        }
        return []
    });

    const addProductInFavorites = useCallback((product: Product) => {
        const alreadyExistInFavorite = favorites.find(find => find.id === product.id)
        if (alreadyExistInFavorite) {
            return;
        }
        setFavorites([...favorites, product]);
    }, [favorites])

    const removeProductTheFavorites = useCallback((product: Product) => {
        const filterFavorites = favorites.filter(favorite => favorite.id !== product.id);
        setFavorites(filterFavorites)
    }, [favorites])

    console.log(favorites);

    localStorage.setItem('@GameStore:favorites', JSON.stringify(favorites))

    return (
        <FavoritesContext.Provider value={{ addProductInFavorites, removeProductTheFavorites, favorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

function useFavorites(): favoritesContextData {
    const context = useContext(FavoritesContext);
    return context;
}

export {
    FavoritesContextProvider, useFavorites
}