import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
//import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './components/AuthProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Move from './pages/Move';
import InfoMove from './pages/InfoMove';
//import BurgerMenu from './components/BugerMenu'
import Box from './pages/Box';
import InfoBox from './pages/InfoBox';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          {/* <h1>QBox - Organiza tu mudanzas y almacenajes</h1> */}
          {/* <Navbar /> */}
          {/* <Profile /> */}
          {/* <BurgerMenu /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/move" component={Move} />
            <PrivateRoute exact path="/move/:id" component={InfoMove} />
            <PrivateRoute exact path="/boxes" component={Box} />
            <PrivateRoute exact path="/box/:id" component={InfoBox}/>
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
