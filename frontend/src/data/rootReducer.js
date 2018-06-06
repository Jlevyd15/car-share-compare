// import individual reducers here
import { popupsReducer } from './popups/popupsReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export const rootReducer = combineReducers({
	router: routerReducer,
	popups: popupsReducer
	// fields: fieldReducer,
	// forms: formReducer,
	// transients: transientsReducer
})