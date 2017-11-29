import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import companyReducer from '../reducers/company'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

export default () => {
const store = createStore(
	combineReducers({
		form: formReducer,
		company: companyReducer
	}),
	compose(
	    applyMiddleware( thunkMiddleware, loggerMiddleware ),
	    window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)
	return store
}
