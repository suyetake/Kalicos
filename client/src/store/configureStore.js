import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import companiesReducer from '../reducers/companies'
import filterReducer from '../reducers/filters'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

// const loggerMiddleware = createLogger()

export default () => {
const store = createStore(
	combineReducers({
		form: formReducer,
		companies: companiesReducer,
		filters: filterReducer
	}),
	compose(
	    applyMiddleware( thunkMiddleware ),
	    window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)
	return store
}
