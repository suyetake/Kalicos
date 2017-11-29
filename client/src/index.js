import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { addCompany } from './actions/company'
import configureStore from './store/configureStore'

import { Provider } from 'react-redux'
import { ds1, ds2, ds3 } from './dataSample'


const store = configureStore();

store.dispatch(addCompany(ds1))
store.dispatch(addCompany(ds2))
store.dispatch(addCompany(ds3))


render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
