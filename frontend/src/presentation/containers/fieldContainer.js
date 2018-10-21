import { connect } from 'react-redux'
import { field } from '../../data/Field/actions'

const mapStateToProps = (state, { id }) => ({
	value: state.ui.fields.getIn([id, 'value'])
})

const mapDispatchToProps = (dispatch, { id }) => ({
	create: (_id, payload) => dispatch(field.create(_id || id, payload)),
	change: (_id, payload) => dispatch(field.change(_id || id, payload))
})

export const fieldContainer = Component => connect(mapStateToProps, mapDispatchToProps)(Component)