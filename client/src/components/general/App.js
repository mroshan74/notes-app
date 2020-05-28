import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home';
import Login from '../register-login/Login';
import Nav from './Nav';
import Register from '../register-login/Register'
import CatManager from '../category/CatManager';
import NoteManager from '../notes/NoteManager';

function App(props) {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/users/login' component={Login} />
            <Route path='/users/register' component={Register} />
            <Route path='/users/categories' component={CatManager} />
            <Route path='/users/notes' component={NoteManager} />
          </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App