import { connect } from 'react-redux'

const mapStateToProps = state => {
	return state.ui.popups.reduce((result, obj) => {
		if (obj && obj.get('open')) {
			result = Object.assign({}, result, { showOverlay: true })
			return result
		}
	}, {})
}

export const overlayContainer = component => connect(mapStateToProps)(component)