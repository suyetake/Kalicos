import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'


class SubTaskCreateForm extends Component {
  constructor() {
    super()

    this.state = {
      addressList: [],
      address: '',
      address2: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const geocoder = new window.google.maps.Geocoder();
    let address = this.state.address;
    geocoder.geocode({ 'address': address }, ((results, status) => { 
      if (status === 'OK') {
        this.setState(() => ({ addressList: this.state.addressList.concat([{
          address: address,
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }])}))
      } else {
        console.log('Geocode not successful ', status)
      }
    }))
    // Actual Form reset needs to be done through Redux
    this.setState(() =>({ 
      address: '',
      address2: '' 
    }))
  }

  addressOnChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  }

  addressOnChange2 = (e) => {
    const address2 = e.target.value;
    this.setState(() => ({ address2 }));
  }

  showState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <label>Address</label>
        <Field 
          name="title" 
          component="input" 
          type="text" 
          placeholder="Please enter address"
          onChange={this.addressOnChange} 
          value={this.state.address}
        />
        <label>Address2</label>
        <Field 
          name="description" 
          component="input" 
          type="text"
          onChange={this.addressOnChange2} 
          value={this.state.address2}
        />
        <button>Submit Address</button>
      </form>

      <br/>
      <button onClick={this.showState}>show state</button>
      <p>Addresses:</p>
      <li>1600 Range St #101, Boulder, CO 80301</li>
      <li>1678 30th St, Boulder, CO 80301</li>
      <li>1777 Broadway, Boulder, CO 80302</li>
      <br/>
      </div>
    )
  }
}

SubTaskCreateForm = reduxForm({ form: 'createSubTask' })(SubTaskCreateForm)


export default SubTaskCreateForm