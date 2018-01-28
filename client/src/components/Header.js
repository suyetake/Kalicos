import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = (props) => (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/maps">Maps</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
)

const mapStateToProps = (state, props) => {
  return {
    user: state.userControl.user
  }
}


export default connect(mapStateToProps)(Header)