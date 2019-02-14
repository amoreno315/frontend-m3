import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';
import Navbar from '../components/Navbar'
class Home extends Component {
 
    renderIsLoggedIn = () => {
      return <div className="container">
        {/* <p>username: {this.props.user.username}</p>
        <p onClick={this.props.logout}>Logout</p>
        <Link className="btn" to='/'>Home</Link>
        <Link className="btn" to='/profile'>Profile</Link>
        <Link className="btn" to='/move'>My Move</Link> */}
        <Navbar />
        {/* <Link to='/mymove'>My Move</Link> */}
        {/* <Link to='/search'>Search</Link>
        <Link to='/tips'>Tips</Link> */}
      </div>
    }
  
    renderIsNotLoggedIn = () => {
      return <div>
        <Link className="btn" to='/login'>Login</Link>
        <Link className="btn" to='/signup'>Signup</Link>
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
export default withAuth()(Home);