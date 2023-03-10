import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; // css-loader style-loader
import ProductProvider from './components/ProductContext';
import { createContext } from 'react';
import cartStore from './mobx/CartStore';
import { enableLogging } from 'mobx-logger';


export const CartContext = createContext(cartStore);
enableLogging();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ProductProvider>
      <App />
  </ProductProvider>
);

