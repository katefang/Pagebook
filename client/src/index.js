import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AdminContextProvider from './context/admin-context';

ReactDOM.render(
  <AdminContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AdminContextProvider>,
  document.getElementById('root')
);
