import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

import { getAllOrganizations } from './actions/organizations'
import getVisibleOrganizations from './selectors/organizations'

import axios from 'axios'

// const updateOrg = () => {
//   return axios.put('http://localhost:4000/api/update', {
//     address:"1600 Pleasant Street",
//     category:"landmark",
//     description:"The Heritage.",
//     latitude:40.0092355,
//     longitude:-105.2733468,
//     name:"CU Heritage",
//     _id:"5a365647cd3157a846688160"
// })
//   .then(
//     response => console.log('response', response)
//   )
// }

// updateOrg()

// const createOrganization = ({
//   name = '',
//   category = '',
//   description = '',
//   address = ''
// }) => {
//   // return (dispatch) => {
//     return axios.post('http://localhost:4000/api/organization', {
//       name,
//       category,
//       description,
//       address
//     })
//     .then(
//           response => console.log('response', response.data[0]),
//     )
// // }
// }

// createOrganization({name: 'Haoway', category: 'nonprofit', description: 'Haoway', address: '1678 30th St, Boulder, CO 80301'})

const store = configureStore();



store.subscribe(() => {
	const state = store.getState()
	const visibleOrganizations = getVisibleOrganizations(state.organizations, state.filters)
	console.log('state', state)
	console.log('visible', visibleOrganizations)
})

store.dispatch(getAllOrganizations())





render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
