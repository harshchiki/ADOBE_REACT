import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; // css-loader style-loader
import ProductProvider from './components/ProductContext';

import store from './redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <ProductProvider>
      <App />
  </ProductProvider>
  </Provider>
);

