import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import MapPage from './MapPage'
import AddOrganizationPage from './AddOrganizationPage'
import EditOrganizationPage from './EditOrganizationPage'
import LandingPage from './LandingPage'

const Header = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/maps">Maps</Link></li>
      <li><Link to="/add">Add Org</Link></li>
      <li><Link to="/edit">Edit Org</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
)


const About = () => (
  <div> This is the about page </div>
)


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={ LandingPage } />
        <Route path="/about" component={ About } />
        <Route path="/add" component={ AddOrganizationPage } />
        <Route path="/edit/:id" component={ EditOrganizationPage } />
        <Route path="/maps" component={ MapPage } />
      </div>
    )
  }
}

export default App;
