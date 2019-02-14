import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div className="navbar-items">
      {/* <p>Wellcome: {this.props.user.username}</p> */}
      
      <Link className="btn"to='/'>Home</Link>
      <Link className="btn"to='/profile'>Profile</Link>
     
      {/* <Link to='/mymove'>My Move</Link> */}
      <Link className="btn" to='/move'>Moves</Link>
      {/* <Link to='/tips'>Tips</Link> */}
      <p className="btn" onClick={this.props.logout}>Logout</p>
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

}

export default withAuth()(Navbar);