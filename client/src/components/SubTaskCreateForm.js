import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import uuid from 'uuid'

class SubTaskCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addressList: [],
      name: '',
      address: ''
    }
  }

  companyNameOnChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
    console.log(this.state.name)
  }

  addressOnChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const geocoder = new window.google.maps.Geocoder();
    let address = this.state.address;
    geocoder.geocode({ 'address': address }, ((results, status) => { 
      if (status === 'OK') {
        this.props.handleFormSubmit({
          id: uuid(),
          name: this.state.name,
          address,
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
        <label>Company</label>
        <Field 
          name="title" 
          component="input" 
          type="text" 
          placeholder="Company Name"
          onChange={this.companyNameOnChange} 
          value={this.state.name}
        />
        <label>Address</label>
        <Field 
          name="description" 
          component="input" 
          type="text"
          placeholder="Company Address"
          onChange={this.addressOnChange} 
          value={this.state.address}
        />
        <button>Submit Company</button>
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

SubTaskCreateForm = reduxForm({ form: 'createSubTask' })(SubTaskCreateForm)


export default SubTaskCreateForm