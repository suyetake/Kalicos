import React from 'react'
import { connect } from 'react-redux'
import { mapsApiKey } from '../config'
import OrganizationListFilters from './OrganizationListFilters'
import selectOrganizations from '../selectors/organizations'

import GoogleMapReact from 'google-map-react'


const MarkerPoints = ({ text }) => 
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 25, width: 50, top: 0, left: 0,    
  }}>
    {text}
  </div> 


const MapPage = (props) => (
  <div>
    <OrganizationListFilters />
    <div style={{ height: "30em", width: "100%" }}>
      <GoogleMapReact
        center={{ lat: 40.0150, lng: -105.2705 }}
        defaultZoom={ 11 }
        bootstrapURLKeys={{ key: mapsApiKey }}>
        {props.visibleOrganizations.map((organization) => {
          return <MarkerPoints 
            key={organization.id}
            lat={organization.lat}
            lng={organization.lng}
            text={organization.name}
          />
        })}
      </GoogleMapReact>
      
    </div>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    visibleOrganizations: selectOrganizations(state.organizations, state.filters)
  }
}

export default connect(mapStateToProps)(MapPage)