import React from 'react'
import { Field, reduxForm } from 'redux-form'


// onSubmit = (e) => {
//     e.preventDefault();
//     const geocoder = new window.google.maps.Geocoder();
//     let address = this.state.address;
//     geocoder.geocode({ 'address': address }, ((results, status) => { 
//       if (status === 'OK') {
//         this.props.onSubmit({
//           name: this.state.name,
//           address,
//           description: this.state.description,
//           category: this.state.category,
//           lat: results[0].geometry.location.lat(),
//           lng: results[0].geometry.location.lng()
//         })
//       } else {
//         console.log('Geocode not successful ', status)
//       }
//     }))
//   }


let OrganizationForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Organization</label>
          <Field 
            name="name" 
            component="input" 
            type="text" 
            placeholder="Organization Name"
          />
          <label>Address</label>
          <Field 
            name="address" 
            component="input" 
            type="text"
            placeholder="Organization Address"
          />
          <br/>
          <label>Description</label>
          <Field 
            name="description" 
            component="input" 
            type="text"
            placeholder="Organization Description"
          />
          <label>Category</label>
          <Field 
            name="category" 
            component="input" 
            type="text"
            placeholder="Museum/NonProfit/etc"
          />
          <button type="submit">Add Organization</button>
      </form>
      <br/>
      <p>Addresses:</p>
      <li>1600 Range St #101, Boulder, CO 80301</li>
      <p>Code Craft</p>
      <li>1678 30th St, Boulder, CO 80301</li>
      <p>Haoway</p>
      <li>1777 Broadway, Boulder, CO 80302</li>
      <p>Courthouse</p>

    </div>
  )
}

OrganizationForm = reduxForm({
  form: 'createOrgForm'
})(OrganizationForm)

export default OrganizationForm