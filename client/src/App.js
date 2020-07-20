import React from 'react';
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

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => <LandingView />} />
        <Route path='/create-account' render={() => <CreateAccountView />} />
        <Route path='/login' render={() => <LoginView />} />
        <Route path='/home' render={() => <Homepage />} />
        <Route path='/create-post' render={() => <CreatePost />} />
        <Route path='/profile' render={() => <ProfileView />} />
        <Route path='/update-post/:id' render={() => <UpdatePostView />} />
        <Route path='/view-post/:id' render={() => <ViewPost />} />
      </Switch>
    </div>
  );
}

export default App;
