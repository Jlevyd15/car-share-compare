import Immutable from 'immutable'
import { PopupRecord } from '../records/PopupRecord'

export const PopupsReducer = (popups = Immutable.Map({}), { type, id }) => {
	switch (type) {
	case 'POPUP_OPEN':
		return popups.update(id, new PopupRecord(), popup => popup.merge({ id, open: true }) )
	case 'POPUP_CLOSE': 
		return popups.update(id, new PopupRecord(), popup => popup.merge({ id, open: false }) )		
	default:
		return popups
	}
}