import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div>
      <p>username: {this.props.user.username}</p>
      <p onClick={this.props.logout}>Logout</p>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
     
      {/* <Link to='/mymove'>My Move</Link> */}
      <Link to='/search'>Search</Link>
      <Link to='/tips'>Tips</Link>
    </div>
  }

  renderIsNotLoggedIn = () => {
    return <div>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  }
  render() {
    const {isLogged} = this.props;
    return (
      <div>
        { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
      </div>
    )
  }
  // render() {
  //   const { isLogged, user, logout } = this.props;
  //   const { username } = user;
  //   if (isLogged) {
  //     return <div>
  //       <p>username: { username }</p>
  //       <p onClick={logout}>Logout</p>
  //     </div>
  //   } else {
  //     return <div>
  //       <Link to='/login'>Login</Link>
  //       {/* <Link to='/signup'>Signup</Link> */}
  //     </div>
  //   }
  
  // }
}

export default withAuth()(Navbar);