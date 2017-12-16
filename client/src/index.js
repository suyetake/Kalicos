import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { getOrganizations } from './actions/organizations'
import configureStore from './store/configureStore'
import getVisibleOrganizations from './selectors/organizations'

import { Provider } from 'react-redux'
// import axios from 'axios'


// const showOrgs = () => {
//   axios.get('http://localhost:4000/api/organizations')
//     .then((response) => {
//       console.log(response)
//     })
// }

// showOrgs()



const store = configureStore();



store.subscribe(() => {
	const state = store.getState()
	const visibleOrganizations = getVisibleOrganizations(state.organizations, state.filters)
	console.log('state', state)
	console.log('visible', visibleOrganizations)
})

store.dispatch(getOrganizations())





render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
