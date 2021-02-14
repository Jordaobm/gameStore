import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './hooks/cart';
import Routes from './routes';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes />
      </CartProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
