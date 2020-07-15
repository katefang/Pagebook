import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './context/user-context';

ReactDOM.render(
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>,
  document.getElementById('root')
);
