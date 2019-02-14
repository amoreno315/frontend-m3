import React, { Component } from 'react'
import move from '../lib/move-service';
import NewMove from '../components/NewMove';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';
import Navbar from '../components/Navbar';

class Move extends Component {
  state = {
    moves: null,
  }
  componentDidMount() {
    move.getMove()
      .then ((results) => {
        // let arrayMoves = []
        // results.forEach((element) => {
        //   arrayMoves.push({title: element.title})
        // })
        this.setState({
        
          moves: results,
        })
       
        console.log(results[0].title);
        // este console.log muestra un valor correcto
      })
      .catch ((error) => {
        console.log(error)
      })
  }

  
  render() {
    const {moves} = this.state;
    
    if (this.state.moves) {
      // console.log(this.state.moves)
      // console.log(moves)
      return(
        <div className="flex-col-center">
          <Navbar/>
          <h1>Mis mudanzas</h1>
          {moves.map(move => {
          return(
            <Link to={`/move/${move._id}`}>
              <p>{move.title}</p>
                
            </Link>
          )
          })}
          <h3>Add a New Move</h3>
          <NewMove />
        </div>
      )
    } else {
      return <NewMove />;
    }
  }
}
export default withAuth()(Move);