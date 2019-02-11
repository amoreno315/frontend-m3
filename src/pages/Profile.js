import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom';

class Profile extends Component {


  render() {
    const {user} = this.props;
       
    return (
      <div className="text-color-dark">
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
         <h3>Moves:</h3>
         {/* <ul className="row-3ele">
         {user.move.map( (moves,idx) =>{
           return <li key={idx} className="article-contacts"> <ul>{moves.title}</ul>  </li>
         })}

         
         </ul> */}
         </div>
         </div>
        :null }
        <div className="call-container botton">
        <Link className="button-primary" to="/edit-profile" >Edit </Link> 
        <Link className="button-primary" to="/move">My Moves</Link>
        <Link className="button-primary" to="/newMove">Add a Move</Link>
        </div>
      </div>
    )
  }
}

export default withAuth()(Profile);