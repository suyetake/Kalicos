import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../actions/userControls'

const Header = (props) => {
	return (
      <div>
      {console.log('header', props)}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/maps">Maps</Link></li>
          <li><Link to="/add">Add Org</Link></li>
          <li><Link to="/about">About</Link></li>
          {props.user.username === '' && <li><Link to="/login">Login</Link></li>}
          {props.user.accessLevel === 'admin' && <li><Link to="/admin">Admin</Link></li>}
          {props.user.username !== '' && <button onClick={() => {
          	props.dispatch(userLogout())
          }}>Logout</button>}
        </ul>
      </div>
 	)
}

const mapStateToProps = (state, props) => {
  return {
    user: state.userControls.user
  }
}

export default connect(mapStateToProps)(Header)