import React, { lazy, Suspense } from 'react';
import './App.css';

import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Default from './components/Default';

const Cart = lazy(() => import('./components/Cart'));
const Details = lazy(() => import('./components/Details'));


function App() {
  return (
    <BrowserRouter>
      <Navbar bg="primary" variant='dark'>
        <Container>
          <Navbar.Brand>Mobile Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Phones</Nav.Link>
            <Nav.Link as={Link} to="/new_product">New Product</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart}/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/new_product" element={<ProductForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<ProductList />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
