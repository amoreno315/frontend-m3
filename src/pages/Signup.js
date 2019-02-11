import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    avatar: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const avatar = this.state.avatar;

    auth.signup({ username, password, firstname, lastname, avatar })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            avatar: "",
        });
        this.props.setUser(user)
        // this.props.history.push('/dashboard');
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, firstname, lastname, avatar } = this.state;
    return (
      <div>
        <img src={process.env.PUBLIC_URL + '/images/logo-qbox.svg'} alt="QBox icon" />
      
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <label>First Name:</label>
          <input type="text" name="firstname" value={firstname} onChange={this.handleChange}/>
          <label>Last Name:</label>
          <input type="text" name="lastname" value={lastname} onChange={this.handleChange}/>
          <label>Avatar:</label>
          <input type="text" name="avatar" value={avatar} onChange={this.handleChange}/>
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;