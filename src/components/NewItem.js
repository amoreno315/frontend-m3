import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import box from '../lib/box-service';
import { withAuth } from './AuthProvider';

class NewItem extends Component {
  state= {
    nameitem: '',
    description: '',
    redirect: false,
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const nameitem = this.state.nameitem;
    const description = this.state.description;
    const boxId = this.props.match.params.id;

    box.addItem(boxId, {nameitem, description })
    .then( (result) => {
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
        <Redirect to={'/box/' + this.props.match.params.id}/>
      )
    }
    return (
      <div>
        <div className="flex-col-center">
          <h3> Add a New Item to this box</h3>
          <form className="form-center"onSubmit={this.handleFormSubmit} id="add-item">
            <label>Title</label>
            <input type="text" name="nameitem" placeholder="Name" value={this.state.nameitem} onChange={ e => this.handleChange(e)}/>
            <label>Description</label>
            <textarea type="text" name="description" placeholder="Description" value={this.state.description} onChange={ e => this.handleChange(e)}/>

            <br></br>
          <button type="submit" >ADD ITEM</button>
          </form>
        </div>
    </div>
    )

  }
}
export default withAuth()(NewItem);