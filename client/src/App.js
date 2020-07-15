import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingView from './view/landing/landing.view';
import CreateAccountView from './view/create-account/create-account.view';
import LoginView from './view/login/login.view';
import Homepage from './view/homepage/homepage.view';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact exact path='/' render={() => <LandingView />} />
        <Route path='/create-account' render={() => <CreateAccountView />} />
        <Route path='/login' render={() => <LoginView />} />
        <Route path='/home' render={() => <Homepage />} />
      </Switch>
    </div>
  );
}

export default App;
