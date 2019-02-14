import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { withAuth } from '../components/AuthProvider';


class BurgerMenu extends Component {

  state = {
    isVisible: false,
  }
  handleClick = () => {
    const {isVisible} = this.state;
    this.setState({
      isVisible: !isVisible,
    })
  }
  render() {

    const {isVisible} = this.state;
    const visible = isVisible ? "open-menu" : "";

    return (
      <div className="burger-menu-container">
        <img src={process.env.PUBLIC_URL + '/images/menu.svg'} 
          alt="Burger menu icon"
          className="menu-icon"
          onClick={this.handleClick}
        />
        <ul className={`menu ${visible}`}>
          <Link to='/login' className="menu-link">Login</Link>
          <Link to='/signup' className="menu-link">Signup</Link>
          <Link to='/profile' className="menu-link">Profile</Link> 
          <Link to='/move' className="menu-link">Move</Link>
          <img src={process.env.PUBLIC_URL + '/images/logout.svg'}
            alt="Logout icon"
            className="logout-icon"
            onClick={this.props.logout}
            />
        </ul>
      </div>
    )
  }
}
export default withAuth() (BurgerMenu);