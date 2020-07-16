import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AdminContextProvider from './context/admin-context';
import PostsContextProvider from './context/posts-context';
import UsersContextProvider from './context/users-context';

ReactDOM.render(
  <AdminContextProvider>
    <UsersContextProvider>
      <PostsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostsContextProvider>
    </UsersContextProvider>
  </AdminContextProvider>,
  document.getElementById('root')
);
