import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import move from '../lib/move-service';
import { withAuth } from './AuthProvider';

class NewMove extends Component {
  state= {
    title: '',
    date: '', 
    origin: '', 
    destination: '', 
    description: '',
    redirect: false,
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const date = this.state.date;
    const origin = this.state.origin;
    const destination = this.state.destination;
    const description = this.state.description;
    const owner = this.props.user._id;
  
    move.create({title, date, origin, destination, description, owner })
    .then( (result) => {
      console.log(result);
      this.setState({...this.state,redirect:true})
    })
    .catch(err => {
      console.log("Something went wrong", err);
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if (this.state.redirect){
      return (
        <Redirect to="/profile" />
      )
    }
      return (
        <div>
          <div>
            <form onSubmit={this.handleFormSubmit} id="add-move">
              <label>Title</label>
              <input type="text" name="title" placeholder="Name" value={this.state.title} onChange={ e => this.handleChange(e)}/>
              <label>Date</label>
              <input type="date" name="date" placeholder="15/02/2019" value={this.state.date} onChange={ e => this.handleChange(e)}/>
              <label>Origin</label>
              <textarea type="text" name="origin" placeholder="Origin" value={this.state.origin} onChange={ e => this.handleChange(e)}/>
              <label>Destination</label>
              <input type="text" name="destination" placeholder="Destination" value={this.state.destination} onChange={ e => this.handleChange(e)}/>
              <label>Description</label>
              <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={ e => this.handleChange(e)}/>
              
              <br></br>
            <button type="submit" >ADD NEW</button>
            </form>
          </div>
      </div>
      )

  }
}
export default withAuth()(NewMove);