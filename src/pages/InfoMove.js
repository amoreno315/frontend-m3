import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import move from '../lib/move-service';
import box from '../lib/box-service';
import NewBox from '../components/NewBox';
import Box from '../pages/Box';
import Navbar from '../components/Navbar';

class InfoMove extends Component {

  state = {
    
    info: null,
    listBox: null,
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("this.props", this.props.match.params.id)
    move.moveInfo(id)
      .then((result) => {
        console.log(result) //devuelve array con los datos
        this.setState({
          
          info: result
        })
      })
    // box.getBox()
    //   .then((listbox) => {
    //     console.log("listado cajas",listbox)
    //   })
  }

  render() {
      let {info} = this.state;
      console.log("info", this.state)
      if (this.state.info) {
        // aqui no entra
        return (
         
        
          <div className="flex-col-center">
           <Navbar/>
            <h2>Move Details</h2>
            {/* <h1>{info._id}</h1> */}
            {/* esto tengo que pasarlo al componente NewBox */}
            <h3>{info.title}</h3>
            {/* <p>Date: {info.date}</p> */}
            <p>Origin: {info.origin}</p>
            <p>Destination: {info.destination}</p>
            <p>Description: {info.description}</p>
            
            <ul />
            <hr className="hr-color"/>
            <Box {...this.props}/>
            <hr className="hr-color"/>
            <NewBox {...this.props} />
            {/* cambiar por un link a una pagina y motrar link a listado cajas */}
          </div>
        )
      } else {
        return <h1>Loading Single Move</h1>
      }
    }
}
export default InfoMove;
