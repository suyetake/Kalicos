import React from 'react'
import { connect } from 'react-redux'
import { mapsApiKey } from '../config'
import OrganizationListFilters from './OrganizationListFilters'
import selectOrganizations from '../selectors/organizations'
import { setSelectedModal } from '../actions/userControls'
import MapModalView from './MapModalView'

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



class MapPage extends React.Component {

  

  componentWillUnmount() {
    this.props.dispatch(setSelectedModal(''))
  }

  showEvent = (evt) => {
    console.log(evt)
  }


  render() {
    let props = this.props
    return (
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
              return (
              <MarkerPoints 
                key={organization._id}
                lat={organization.latitude}
                lng={organization.longitude}
                text={organization.name}
              />
              )
            })}
          </GoogleMapReact>
          
            {props.selectedModal && props.visibleOrganizations.map((organization) => {
              if (organization._id === props.selectedModal) {
                return <MapModalView key={organization._id} {...organization} dispatch={props.dispatch}/>
              } else {
                // removes console warning of arrow function return statement
                return null
              }
            })}
        </div>
      </div>
    )
  }
}
  
    




const mapStateToProps = (state, props) => {
  return {
    latLng: state.userControls.mapCenter,
    selectedModal: state.userControls.modal,
    visibleOrganizations: selectOrganizations(state.organizations, state.filters)
  }
}

export default connect(mapStateToProps)(MapPage)