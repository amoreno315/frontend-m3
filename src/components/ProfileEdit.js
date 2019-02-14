import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import { Redirect } from 'react-router-dom';

import auth from '../lib/auth-service';



class Profile extends Component {
 state= {
   username:'',
   firstname: '',
   lastname: '',
   avatar: '',
   redirectToNewPage: false,
 }

  handleChange = (event) => {  
    this.setState( {
      [event.target.name]: event.target.value,
    });
  }
  
  componentDidMount (){
    this.setState({
      username:this.props.user.username,
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      avatar: this.props.user.avatar,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, firstname, lastname, avatar} = this.state

    auth.edit({ username, firstname, lastname, avatar})
    .then((result)=>{
      this.props.setUser(result);
      this.setState( {
        username: result.username, 
        firstname: result.firstname,
        lastname: result.lastname,
        avatar: result.avatar,
        redirectToNewPage: true,
      })  
    })

  }


  render() {
    const {user} = this.props;

    if (this.state.redirectToNewPage){
      return (
        <Redirect to="/profile" />
      )
    }
    return (
      <div className="botton">
      <form id="edit-form" >
        <label>Username:</label>
        <input type="text" name="username" value={this.state.username} placeholder={user.username} onChange={this.handleChange} />
        <label>Fisrt Name:</label>
        <input type="text" name="firstname" value={this.state.firstname} placeholder={user.firstname} onChange={this.handleChange}/>
        <label>Last Name:</label>
        <input type="text" name="lastname" value={this.state.lastname} placeholder={user.lastname} onChange={this.handleChange}/>
        <label>Avatar:</label>
        <input type="text" name="avatar" value={this.state.avatar} placeholder={user.avatar} onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleFormSubmit}>Submit!</button>
      </form>
      {/* <input type="text" name="move" onChange={this.handleChange} ></input>
      <button type="submit" onClick={this.handlesearchSubmit}>Search!</button> */}
      </div>
    )

  }
}

export default withAuth()(Profile);