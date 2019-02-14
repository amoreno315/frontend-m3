import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { Link } from 'react-router-dom';
// import { AuthConsumer } from '../components/AuthProvider';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="flex-col-center">
        <div className="flex-col-center">
          <h1>QBox</h1>
          <p>Qbox is your solution to organize your moves and know the contents of each box</p>
        </div>
        <form className="form-center" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <input className="btn" type="submit" value="Login" />

        </form>
        <hr/>
        <p>Don't you have an acount? 
          <Link className="btn" to={"/signup"}> Signup</Link>
        </p>
      </div>
    )
  }
}

export default Login;