import { connect } from 'react-redux'

const mapStateToProps = (state, { id }) => ({
	open: ''
})

export const popupContainer = component => connect(mapStateToProps)(component)