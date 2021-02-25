import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './hooks/cart';
import { FavoritesContextProvider } from './hooks/favorites';
import ErrorPage from './pages/Error';
import Routes from './routes';
import { api } from './services/api';
import { GlobalStyles } from './styles/globalStyles';
import data from './products.json';

function App() {
  const [error, setError] = useState(false);

  if (!data.products) {
    return (
      <>
        <ErrorPage />
        <GlobalStyles />
      </>
    );
  }

  return (
    <BrowserRouter>
      <CartProvider>
        <FavoritesContextProvider>
          <Routes />
        </FavoritesContextProvider>
      </CartProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
