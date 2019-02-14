import axios from 'axios'; 

class Box {
  constructor() {
    this.box = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
  }
  create(box) {
    const {boxnummer, boxname, category, description, storagelocation, owner, move} = box;
    return this.box.post('box/newbox', {boxnummer, boxname, category, description, storagelocation, owner, move})
      .then( ({data}) => data);
  }

  getBox() {
    return this.box.get('/box/get')
      .then (({data}) => data);
      
  }

  boxInfo(id) {
    const boxId = id;
    console.log("id en boxService", boxId);
    return this.box.get(`/box/${boxId}`)
      .then (( {data}) => data)
  }
}


const box = new Box();
export default box;