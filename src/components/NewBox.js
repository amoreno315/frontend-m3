import React, { Component } from 'react'

import box from '../lib/box-service';
import { Redirect } from 'react-router-dom';
import { withAuth } from './AuthProvider'


class NewBox extends Component {
  state = {
    boxnummer: '', 
    boxname: '', 
    category: '', 
    description: '', 
    storagelocation: '',
    redirect: false,
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const boxnummer = this.state.boxnummer;
    const boxname = this.state.boxname;
    const category = this.state.category;
    const description = this.state.description;
    const storagelocation = this.state.storagelocation;
    const owner = this.props.user._id;
    const move = this.props.match.params.id; //aqui falla

    // console.log("user id - create box", owner)
    // console.log("id move - create box", move)

    box.create({boxnummer, boxname, category, description, storagelocation, owner, move})
      .then( (result) => {
        //console.log(result);
        this.setState({...this.state, redirect: true})
      })
      .catch( err => {
        console.log("Something went wrong", err);
      })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState( {[name]: value});
  }
  render() {

    if (this.state.redirect) {
      return (
        <Redirect to="/move" />
      )
    }
    return (
      <div className="flex-col-center">
        <div>
        <form className="form-center"onSubmit={this.handleFormSubmit} id="add-box">
            <label>Box Nummer:</label>
            <input type="nummer" name="boxnummer" placeholder="Nummer" value={this.state.boxnummer} onChange={ e => this.handleChange(e)}/>
            <label>Box Name:</label>
            <input type="text" name="boxname" placeholder="Box Name" value={this.state.boxname} onChange={ e => this.handleChange(e)}/>
            <label>Category:</label>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={ e => this.handleChange(e)}/>
            <label>Description</label>
            <textarea type="text" name="description" placeholder="Description" value={this.state.description} onChange={ e => this.handleChange(e)}/>
            <label>Storage Location</label>
            <input type="text" name="storagelocation" placeholder="Storage Location" value={this.state.storagelocation} onChange={ e => this.handleChange(e)}/>
            
            <br></br>
            <button type="submit" >ADD NEW BOX</button>
            </form>
        </div>
      </div>
    )
  }
}
export default withAuth()(NewBox);