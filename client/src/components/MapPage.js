import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { mapsApiKey } from '../config'
import OrganizationListFilters from './OrganizationListFilters'
import selectOrganizations from '../selectors/organizations'
import { setSelectedModal } from '../actions/userControls'

import GoogleMapReact from 'google-map-react'


const MarkerPoints = ({ text }) => 
  <div 
    style={{
      position: 'relative', color: 'white', background: 'red',
      height: 25, width: 50, top: 0, left: 0,    
    }}
    >
    {text}
  </div> 


const TheModal = ({ id, name, category }) => {
  return (
    <div
    //   style={{
    //     position: 'relative', border: '2px solid black', backgroundColor: 'gray',
    //     height: 100, width: 100, top: 0, left: 0,    
    //    }}
    >
      <li>Edit <Link to={`/edit/${id}`}>{name}</Link></li>
      <li>{id}</li>
      <li>{name}</li>
      <li>{category}</li>
    </div>
    )
}

const MapPage = (props) => (
  <div>
    <OrganizationListFilters />
    <div style={{ height: "30em", width: "100%" }}>
      <GoogleMapReact
        center={{ lat: props.latLng.lat, lng: props.latLng.lng }}
        defaultZoom={ 11 }
        bootstrapURLKeys={{ key: mapsApiKey }}
        onChildClick={(e) => props.dispatch(setSelectedModal(e))}
        >
        {props.visibleOrganizations.map((organization) => {
          return <MarkerPoints 
            key={organization.id}
            lat={organization.lat}
            lng={organization.lng}
            text={organization.name}
          />
        })}
      </GoogleMapReact>
      
        {props.selectedModal && props.visibleOrganizations.map((organization) => {
          if (organization.id === props.selectedModal) {
            return <TheModal key={organization.id} {...organization} />
          }
        })}
    </div>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    latLng: state.userControls.mapCenter,
    selectedModal: state.userControls.modal,
    visibleOrganizations: selectOrganizations(state.organizations, state.filters)
  }
}

export default connect(mapStateToProps)(MapPage)