import React, { Component } from 'react'
import { mapsApiKey } from '../config'
import SubTaskCreateForm from './SubTaskCreateForm'

import GoogleMapReact from 'google-map-react'

const MarkerPoints = ({ text }) => 
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 20, width: 50, top: 0, left: 0,    
  }}>
    {text}
  </div> 


class MapPage extends Component {
constructor() {
  super()

  this.state = {
    addressList: []
  }
}

onSubmit = ({ id, name, address, lat, lng }) => {
  this.setState(() => ({ addressList: this.state.addressList.concat([{
    id,
    name,
    address,
    lat,
    lng
  }])}))
}

logAddresses = () => { (console.log(this.state.addressList))}

  render() {
    return (
        <div>
        This is the maps page
        <SubTaskCreateForm 
          handleFormSubmit={this.onSubmit}
        />
        <div style={{ height: "16em", width: "16em" }}>
          <GoogleMapReact
            center={{ lat: 40.0150, lng: -105.2705 }}
            defaultZoom={ 11 }
            bootstrapURLKeys={{ key: mapsApiKey }}>
            {this.state.addressList.map((company) => {
              return <MarkerPoints 
                key={company.id}
                lat={company.lat}
                lng={company.lng}
                text={company.name}
              />
            })}
            
          </GoogleMapReact>
          <br/>
          <button onClick={this.logAddresses}>log addresses</button>
          
        </div>
      </div>
    )
  }
}

export default MapPage