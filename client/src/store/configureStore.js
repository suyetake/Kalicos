import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as modal } from 'redux-modal'
import thunkMiddleware from 'redux-thunk'
import organizationsReducer from '../reducers/organizations'
import filterReducer from '../reducers/filters'
import userControlsReducer from '../reducers/userControls'
import { addOrganization } from '../actions/organizations'
// import { createLogger } from 'redux-logger'

// const loggerMiddleware = createLogger()

export default () => {
const store = createStore(
	combineReducers({
		organizations: organizationsReducer,
		filters: filterReducer,
		userControls: userControlsReducer,
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
