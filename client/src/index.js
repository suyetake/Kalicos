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

const createU = (id, name) => {
  axios.delete('http://localhost:4000/api/removeorganization', {
    data: {
      id,
      name
    }     
  })
  .then(response => console.log('login res', response))
}

createU("5a48a18e37430c5731dbe51f", "Haoway")


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
