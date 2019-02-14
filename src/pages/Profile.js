import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

class Profile extends Component {


  render() {
    const {user} = this.props;
       
    return (
      <div className="flex-col-center">
        <Navbar/>
        { user ? <div>
          <hr className="hr-color"/>
          <div className="flex-profile-info">
            <div>
              <section>
                <p className="text-bold margin-input">User Name:</p>
                <p className="margin-input"> {user.username}</p>
              </section>
              <section>
                <p className="text-bold margin-input">First Name:</p>
                <p className="margin-input">{user.firstname}</p>
              </section>
              <section>
              <p className="text-bold margin-input">Last Name:</p>
              <p className="margin-input">{user.lastname}</p>
              </section>
            </div>
            <img className="avatar-profile" src={user.avatar} alt="avatar"></img>
          </div>
          <div>
            <hr className="hr-color"/>
          
          </div>
         </div>
        :null }
        <div className="">
          <Link className="btn" to="/edit-profile" >Edit </Link> 
          <Link className="btn" to="/move">My Moves</Link>
          <Link className="btn" to="/newMove">Add a Move</Link>
        </div>
      </div>
    )
  }
}

export default withAuth()(Profile);