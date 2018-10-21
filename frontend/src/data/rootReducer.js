// import individual reducers here
import { popupsReducer } from './Popups/popupsReducer'
import { fieldsReducer } from './Field/reducer'
import { compareReducer } from './Compare/compareReducer'
import { servicesReducer } from './Services/reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
	ui: combineReducers({ 
		popups: popupsReducer, 
		fields: fieldsReducer 
	}),
	domain: combineReducers({ 
		compare: compareReducer,
		services: servicesReducer,
	})
})
// fields: fieldReducer,
// forms: formReducer,
// transients: transientsReducer