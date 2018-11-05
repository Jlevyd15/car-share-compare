import React from 'react'
import { servicesContainer } from '../../containers/servicesContainer'

class FetchServicesData extends React.Component {
	constructor(props) {
		super()
		const { services } = props
		// if data is already cached don't fetch it again
		if (!services.size) this.fetchData(props)
	}

	// TODO - async await not working
	fetchData = props => {
		// debugger // eslint-disable-line
		const { basePath, fetchServicesData } = props
		fetchServicesData(`${basePath}/list`)
	}
	render() {
		return null
	}
}

export default servicesContainer(FetchServicesData)
