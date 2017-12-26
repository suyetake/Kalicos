import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import MapPage from './MapPage'
import AddOrganizationPage from './AddOrganizationPage'
import EditOrganizationPage from './EditOrganizationPage'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'
import { userLogout } from '../actions/userControls'


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
        <Route path="/login" component={ LoginPage } />
        <Route path="/admin" component={ AdminPage } />
      </div>
    )
  }
}


export default App
