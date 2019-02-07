import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Pagina perfil usuario</h1>
      </div>
    )
  }
}

export default withAuth()(Profile);