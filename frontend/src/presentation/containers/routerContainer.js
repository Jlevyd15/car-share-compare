import { connect } from 'react-redux'
import { push } from 'connected-react-router'

const mapStateToProps = state => ({
	router: state.router.location || {} 
})

const mapDispatchToProps = dispatch => ({
	push: route => dispatch(push(route))
})

export const routerContainer = component => connect(mapStateToProps, mapDispatchToProps)(component)