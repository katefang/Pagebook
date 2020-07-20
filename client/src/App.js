import React, { useContext } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingView from './view/landing/landing.view';
import CreateAccountView from './view/create-account/create-account.view';
import LoginView from './view/login/login.view';
import ProfileView from './view/profile/profile.view';
import Homepage from './view/homepage/homepage.view';
import CreatePost from './view/create-post/create-post.view';
import UpdatePostView from './view/update-post/update-post.view';
import ViewPost from './view/view-post/view-post';
import { AdminContext } from './context/admin-context';

function App() {
  const { admin } = useContext(AdminContext);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => <LandingView />} />
        <Route path='/create-account' render={() => <CreateAccountView />} />
        <Route path='/login' render={() => <LoginView />} />
        <Route
          path='/home'
          render={() => (admin ? <Homepage /> : <LoginView />)}
        />
        <Route
          path='/create-post'
          render={() => (admin ? <CreatePost /> : <LoginView />)}
        />
        <Route
          path='/profile'
          render={() => (admin ? <ProfileView /> : <LoginView />)}
        />
        <Route path='/update-post/:id' render={() => <UpdatePostView />} />
        <Route path='/view-post/:id' render={() => <ViewPost />} />
      </Switch>
    </div>
  );
}

export default App;
