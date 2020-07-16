import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './context/user-context';
import PostContextProvider from './context/post-context';

ReactDOM.render(
  <UserContextProvider>
    <PostContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostContextProvider>
  </UserContextProvider>,
  document.getElementById('root')
);
