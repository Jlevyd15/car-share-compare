import { connect } from 'react-redux'

const mapStateToProps = state => ({
	router: state.router.location || {} 
})

export const routerContainer = component => connect(mapStateToProps)(component)