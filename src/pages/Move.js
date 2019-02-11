import React, { Component } from 'react'
import move from '../lib/move-service';
import NewMove from '../components/NewMove';
import { Link } from 'react-router-dom';


export default class Move extends Component {
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
      console.log(this.state.moves)
      console.log(moves)
      return(
        <div>
          <h1>Mis mudanzas</h1>
        {moves.map(move => {
          return(
            <Link to={`/moves/${move._id}`}>
                <p>{move.title}</p>
              </Link>
            // <p>{move.title}</p>
          )
         
        })}
        {/* esta funcion me da un error: moves.map no es una funcion */}
      </div>
      )
    } else {
      return <NewMove />;
    }
  }
}
