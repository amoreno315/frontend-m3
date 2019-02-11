import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom';

class Private extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <h1>Welcome {user.username}</h1>
        <h1>{user.firstname}</h1>
        <h1>{user.lastname}</h1>
        <img src={user.avatar} alt="avatar user"/>
        <Link className="button-primary" to="/edit-profile" >Edit </Link> 
      </div>
    )
  }
}

export default withAuth()(Private);