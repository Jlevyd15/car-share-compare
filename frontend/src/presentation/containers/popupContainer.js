import { connect } from 'react-redux'
import { popup } from '../../data/Popups/popupActions'
import { PopupRecord } from '../../data/Popups/PopupRecord'

const mapStateToProps = (state, { id }) => {
	const _popup = state.ui.popups.get(id) || new PopupRecord({ id })
	return { open: _popup.open }
}

const mapDispatchToProps = (dispatch, { id }) => ({
	openPopup: _id => dispatch(popup.open(id || _id)),
	closePopup: _id => dispatch(popup.close(id || _id))
})

export const popupContainer = component => connect(mapStateToProps, mapDispatchToProps)(component)