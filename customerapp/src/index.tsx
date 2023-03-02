import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React 18 Code
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

/*

Prior to React 18
import ReactDOM from 'react-dom';
ReactDOM.render(<App/>,document.getElementById('root'))

*/