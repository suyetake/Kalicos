import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class OrganizationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      address: '',
      description: '',
      category: ''
    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }

  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(window.google)
    const geocoder = new window.google.maps.Geocoder();
    let address = this.state.address;
    geocoder.geocode({ 'address': address }, ((results, status) => { 
      if (status === 'OK') {
        this.props.onSubmit({
          name: this.state.name,
          address,
          description: this.state.description,
          category: this.state.category,
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        })
      } else {
        console.log('Geocode not successful ', status)
      }
    }))
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <label>Organization</label>
        <Field 
          name="title" 
          component="input" 
          type="text" 
          placeholder="Organization Name"
          onChange={this.onNameChange} 
          value={this.state.name}
        />
        <label>Address</label>
        <Field 
          name="address" 
          component="input" 
          type="text"
          placeholder="Organization Address"
          onChange={this.onAddressChange} 
          value={this.state.address}
        />
        <br/>
        <label>Description</label>
        <Field 
          name="description" 
          component="input" 
          type="text"
          placeholder="Organization Description"
          onChange={this.onDescriptionChange} 
          value={this.state.description}
        />
        <label>Category</label>
        <Field 
          name="category" 
          component="input" 
          type="text"
          placeholder="Museum/NonProfit/etc"
          onChange={this.onCategoryChange} 
          value={this.state.category}
        />
        <button>Add Organization</button>
      </form>

      <br/>
      <p>Addresses:</p>
      <li>1600 Range St #101, Boulder, CO 80301</li>
      <p>Code Craft</p>
      <li>1678 30th St, Boulder, CO 80301</li>
      <p>Haoway</p>
      <li>1777 Broadway, Boulder, CO 80302</li>
      <p>Courthouse</p>
      <br/>
      </div>
    )
  }
}

OrganizationForm = reduxForm({ form: 'createOrganizationForm' })(OrganizationForm)


export default OrganizationForm