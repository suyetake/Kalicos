import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { mapsApiKey } from '../config'

import { Map, GoogleApiWrapper } from 'google-maps-react'

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

class MapContainer extends Component {
  render() {
    return (
      <Map google={ this.props.google } zoom={ 14 } />
    )
  }
}

const KalicosMap = GoogleApiWrapper({ apiKey: mapsApiKey })(MapContainer)

const Home = () => (
  <div> This is the landing ... testing deployment</div>
)

const About = () => (
  <div> This is the about page </div>
)

const Maps = () => (
  <div>
    This is the maps page
    <SubTaskCreateForm />
    <KalicosMap />
  </div>
)

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
