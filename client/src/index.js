import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { addOrganization } from './actions/organizations'
import configureStore from './store/configureStore'
import getVisibleOrganizations from './selectors/organizations'

import { Provider } from 'react-redux'
import { ds1, ds2, ds3 } from './dataSample'


const store = configureStore();

store.subscribe(() => {
	const state = store.getState()
	const visibleOrganizations = getVisibleOrganizations(state.organizations, state.filters)
	console.log('state', state)
	console.log('visible', visibleOrganizations)
})

store.dispatch(addOrganization(ds1))
store.dispatch(addOrganization(ds2))
store.dispatch(addOrganization(ds3))
// store.dispatch(editOrganization(2, {
//   address:"47384374328 Arapahoe Ave.",
//   category:"muse",
//   description:"The mi.",
// }))




render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
