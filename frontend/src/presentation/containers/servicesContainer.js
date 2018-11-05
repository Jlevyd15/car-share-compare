import { connect } from 'react-redux'
import { services } from '../../data/Services/actions'
// import { ServiceRecord } from '../../data/Services/record'

// TODO - retrieve the selected services
const mapStateToProps = ({ domain }) => ({
	services: domain.services || [],
	selectedServices: domain.services.filter(({ selected }) => selected)
})

const mapDispatchToProps = dispatch => ({
	fetchServicesData: url => dispatch(services.fetchData({ url })),
	setServicesData: data => dispatch(services.setData({ data })),
	toggleSelectedService: (id, selected) => dispatch(services.toggleSelected(id, { selected }))
})

export const servicesContainer = component => connect(mapStateToProps, mapDispatchToProps)(component)