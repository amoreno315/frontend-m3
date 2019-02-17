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
    return this.box.get('box/get')
      .then (({data}) => data);
      
  }

  boxInfo(id) {
    return this.box.get('box/' + id )
      .then (( {data}) => data)
  }
  addItem(id, item){
    const {nameitem, description} = item;
    return this.box.post('box/addItem', {nameitem, description, id})
        .then( ({data}) => data);
  }
}

const box = new Box();
export default box;