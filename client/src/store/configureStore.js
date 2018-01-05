import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as modal } from 'redux-modal'
import thunkMiddleware from 'redux-thunk'
import organizationsReducer from '../reducers/organizations'
import newOrganizationsReducer from '../reducers/newOrganizations'
import filterReducer from '../reducers/filters'
import userControlReducer from '../reducers/userControl'
import { addOrganization } from '../actions/organizations'
// import { createLogger } from 'redux-logger'

// const loggerMiddleware = createLogger()

export default () => {
  const store = createStore(
	  combineReducers({
		  organizations: organizationsReducer,
		  newOrganizations: newOrganizationsReducer,
		  filters: filterReducer,
		  userControl: userControlReducer,
		  modal,
		  form: formReducer.plugin({
    		organizationForm: (state, action) => { 
      		switch(action.type) {
        	case addOrganization:
          	return undefined; 
          default:
          	return state
				  }
			  }
		  })
	  }),
	  compose(
	    applyMiddleware( thunkMiddleware ),
	    window.devToolsExtension ? window.devToolsExtension() : f => f
	  )
  )
	return store
}
