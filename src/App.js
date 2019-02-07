import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './components/AuthProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>QBox - Organiza tu mudanzas y almacenajes</h1>
          <Navbar />
          {/* <Profile /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/profile" component={Profile} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
