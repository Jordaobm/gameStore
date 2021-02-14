import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './hooks/cart';
import { FavoritesContextProvider } from './hooks/favorites';
import ErrorPage from './pages/Error';
import Routes from './routes';
import { api } from './services/api';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  const [error, setError] = useState(false);

  useEffect(() => {
    api.get('/products').catch(response => {
      setError(true);
    })
  }, [])

  if (error) {
    return (
      <>
        <ErrorPage />
        <GlobalStyles />
      </>
    )
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
