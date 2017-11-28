import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { mapsApiKey } from '../config'

import GoogleMapReact from 'google-map-react'

window.foo = mapsApiKey

const Header = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/maps">Maps</Link></li>
    </ul>
  </div>
)

let SubTaskCreateForm = () => (
  <form>
    <label>Address</label>
    <Field name="title" component="input" type="text" />
    <label>Address2</label>
    <Field name="description" component="input" type="text" />
  </form>
)

SubTaskCreateForm = reduxForm({ form: 'createSubTask' })(SubTaskCreateForm)

const Home = () => (
  <div> This is the landing ... testing deployment</div>
)

const About = () => (
  <div> This is the about page </div>
)

const SomePoint = ({ text }) => <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div> 


const Maps = () => (
  <div>
    This is the maps page
    <SubTaskCreateForm />
    <div style={{ height: "16em", width: "16em" }}>
      <GoogleMapReact
        defaultCenter={{ lat: 40.0150, lng: -105.2705 }}
        defaultZoom={ 11 }
        bootstrapURLKeys={{ key: mapsApiKey }}
      />
      <SomePoint
        lat={40.0150}
        lng={-105.2705}
        text={'Boulder'}
      />

      <button onClick={codeAddress}>show me</button>
      
    </div>
  </div>
)

const codeAddress = () => {
  const geocoder = new window.google.maps.Geocoder();
  let address = '1600 Range St #101, Boulder, CO 80301'
  geocoder.geocode({ 'address': address }, ((results, status) => { 
    if (status === 'OK') {
      console.log('lat ', results[0].geometry.location.lat())
      console.log('lng ', results[0].geometry.location.lng())
    } else {
      console.log('Geocode not successful ', status)
    }
  }))
}

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/maps" component={ Maps } />
      </div>
    )
  }
}

export default App;
