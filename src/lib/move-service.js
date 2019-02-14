import axios from 'axios';

class Move {
  constructor() {
    
    this.move = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
  }

  create(move) {
    const {title, date, origin, destination, description, owner} = move;
    return this.move.post('move/newmove', {title, date, origin, destination, description, owner})
      .then( ({data}) => data);
  } 

  getMove() {
    return this.move.get('/move/get')
      .then(({ data }) => data);
  }
  
  moveInfo(id) {
    const moveId = id;
    console.log("id en moveService",moveId);
    return this.move.get(`/move/${moveId}`)
      .then(( {data}) => data)
      
  }
}
const move = new Move();
export default move;