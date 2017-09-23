import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


const Header = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/maps">Maps</Link></li>
    </ul>
  </div>
)

const Home = () => (
  <div> This is the landing ... testing deployment</div>
)

const About = () => (
  <div> This is the about page </div>
)

const Maps = () => (
  <div> This is the maps page </div>
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
