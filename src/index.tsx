import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductContext from './contex/ProductContext';
import BasketContext from './contexBasket/BasketContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ProductContext>
    <BasketContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    </BasketContext>
  </ProductContext>
);

