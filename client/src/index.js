import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { addCompany } from './actions/companies'
import configureStore from './store/configureStore'
import { setNameFilter } from './actions/filters'
import getVisibleCompanies from './selectors/companies'

import { Provider } from 'react-redux'
import { ds1, ds2, ds3 } from './dataSample'


const store = configureStore();

store.subscribe(() => {
	const state = store.getState()
	const visibleCompanies = getVisibleCompanies(state.companies, state.filters)
	console.log('state', state)
	console.log('visible', visibleCompanies)
})

store.dispatch(addCompany(ds1))
store.dispatch(addCompany(ds2))
store.dispatch(addCompany(ds3))
// store.dispatch(setNameFilter('cu'))

render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
