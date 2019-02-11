import React, { Component } from 'react'
import move from '../lib/move-service';
import NewMove from '../components/NewMove';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Move extends Component {
  state = {
    moves: null,
  }
  componentDidMount() {
    move.getMove()
      .then ((results) => {
        // let arrayMoves = []
        // results.move.forEach((element) => {
        //   arrayMoves.push({title: element.title})
        // })
        this.setState({
        
          moves: results,
        })
        console.log ("moves")
        console.log(this.moves);
      })
      .catch ((error) => {

      })
  }

  
  render() {
    return (
      <div>
        Mis mudanzas
        {/* <NewMove /> */}
      </div>
    )
  }
}
