import React from 'react'
import { mapsApiKey } from '../config'
import OrganizationForm from './OrganizationForm'
import GoogleMapReact from 'google-map-react'


class GeocodeAddress extends React.Component {
	submit = (org) => {
		const geocoder = new window.google.maps.Geocoder();
		let address = org.address
		geocoder.geocode({ 'address': address }, ((results, status) => {
			if (status === 'OK') {
				this.props.onSubmit({
					...org,
					lat: results[0].geometry.location.lat(),
          			lng: results[0].geometry.location.lng()
				})
			} else {
       			 console.log('Geocode not successful ', status)
      		}
		}))
	    console.log(org)
	  }
	  render() {
	    return (
	    	<div>
		    	<OrganizationForm 
		    		onSubmit={this.submit} 
		    	/>
		    	<GoogleMapReact
			        center={{ lat: 40.0150, lng: -105.2705 }}
			        defaultZoom={ 11 }
			        bootstrapURLKeys={{ key: mapsApiKey }}>
			    </GoogleMapReact>
			</div>
	    )
	  }
}

export default GeocodeAddress