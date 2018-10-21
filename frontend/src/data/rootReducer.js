// import individual reducers here
import { popupsReducer } from './Popups/popupsReducer'
import { compareReducer } from './Compare/compareReducer'
import { fieldsReducer } from './Field/reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
	ui: combineReducers({ 
		popups: popupsReducer, 
		fields: fieldsReducer 
	}),
	domain: combineReducers({ 
		compare: compareReducer,
	})
})
// fields: fieldReducer,
// forms: formReducer,
// transients: transientsReducer