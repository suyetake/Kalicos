import React from 'react'
import { Link } from 'react-router-dom'
import { setSelectedModal } from '../actions/userControls'



  const MapModalView = ( { _id, name, category, dispatch }) => {


  return (
    <div >
      <button onClick={() => dispatch(setSelectedModal({id: ''}))}>X</button>
      <li>Edit <Link to={`/edit/${_id}`}> {name}</Link>
      </li>
      <li>{_id}</li>
      <li>{name}</li>
      <li>{category}</li>
    </div>
    )
}

export default MapModalView


