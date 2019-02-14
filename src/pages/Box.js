import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import box from '../lib/box-service';
import { Link, Redirect } from 'react-router-dom';
import NewBox from '../components/NewBox';

class Box extends Component {
  state = {
    boxes: null,
  }

  componentDidMount() {
    box.getBox()
      .then ((results) => {
        this.setState({
          boxes: results,
        })
        // console.log("aqui si hay datos", results);
        // console.log("aqui es null", this.state);
      })

      .catch ((error) => {
        console.log(error)
      })
      
  }
  render() {
    const {boxes} = this.state;
    // console.log("aqui es null", this.state)
    if (this.state.boxes) {
      return(
        <div className="flex-col-center">
          
          <h1>My Boxes</h1>
          {boxes.map (boxItem => {
            // console.log("id de move", this.props.match.params.id)
            // console.log("id de move en box", boxItem.move)
            if (this.props.match.params.id === boxItem.move){
              return(
                <Link to={`/box/${boxItem._id}`}>
                  <p>{boxItem.boxname}</p>
                </Link>               
              )
            }          
          })}
          <Link to='/move'>Goback to My Moves</Link>
        </div>
      )
    } else {
      return (
        <NewBox {...this.props}/>
      )
    }
    
  }
}
export default withAuth()(Box);