import axios from 'axios';

class ProfileService {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    })
  }

  

  edit(user) {
    const { username, firstname, lastname, avatar} = user;
    return this.profile.put('/profile/update', {username, firstname, lastname, avatar })
    .then(({ data }) => data);
  }

  // addMove(move) {
  //   return this.profile.patch('/profile/addMove', {move})
  //   .then(({ data }) => data);
  // }

  // getInfo(user) {
  //   const {username, firstname, lastname, avatar} = user;
  //   return this.profile.get('/profile/updated', { username, firstname, lastname, avatar })
  //   .then(({ data }) => data);
  // }
}

const profileedit = new ProfileService();

export default profileedit;