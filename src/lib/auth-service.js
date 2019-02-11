import axios from 'axios';

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      // baseURL: 'http://localhost:5000',
      withCredentials: true
    })
  }

  signup(user) {
    const { username, password, firstname, lastname, avatar } = user;
    return this.auth.post('/auth/signup', {username, password, firstname, lastname, avatar})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  me(user) {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }

  edit(user) {
    const { username, firstname, lastname, avatar} = user;
    return this.auth.put('/profile/update', {username, firstname, lastname, avatar })
    .then(({ data }) => data);
  }

}

const auth = new Auth();

export default auth