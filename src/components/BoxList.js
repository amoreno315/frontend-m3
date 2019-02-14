import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import box from '../lib/box-service';
import { Link, Redirect } from 'react-router-dom';
import NewBox from '../components/NewBox';

class BoxList extends Component {
  state = {
    boxes: null,
  }

  componentDidMount() {
    box.getBox()
      .then ((results) => {
        this.setState({
          boxes: results,
        })
        console.log("aqui si hay datos", results);
        console.log("aqui es null", this.state.boxes);
      })

      .catch ((error) => {
        console.log(error)
      })
      
  }
  render() {
    const {boxes} = this.state;
    console.log("aqui es null", this.state)
    if (this.state.boxesList) {
      return(
        <div className="flex-col-center">
          <h1>My Boxes</h1>
          {boxes.map (boxItem => {
            return(
              <Link to={`/box/${boxItem._id}`}>
                
                <p>{boxItem._id}</p>
              </Link>
            )
          })}
         
         <Link to='/move'>My Moves</Link>
        </div>
      )
    } else {
      return <NewBox {...this.props}/>
    }
    
  }
}
export default withAuth()(BoxList);