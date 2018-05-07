// import individual reducers here
import { PopupsReducer } from './PopupsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	popups: PopupsReducer
	// fields: fieldReducer,
	// forms: formReducer,
	// transients: transientsReducer
})
export default rootReducer