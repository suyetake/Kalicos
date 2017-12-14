import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSelectedModal } from '../actions/userControls'

const MapModalView = ( { id, name, category, dispatch }) => {
  return (
    <div
    //   style={{
    //     position: 'relative', border: '2px solid black', backgroundColor: 'gray',
    //     height: 100, width: 100, top: 0, left: 0,    
    //    }}
    >
      <button onClick={() => dispatch(setSelectedModal({id: ''}))}>X</button>
      <li>Edit <Link to={`/edit/${id}`}> {name}</Link>
      </li>
      <li>{id}</li>
      <li>{name}</li>
      <li>{category}</li>
    </div>
    )
}

export default connect()(MapModalView)


