import React from 'react'
import axios from 'axios'
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
		debugger // eslint-disable-line
		const { basePath, setServicesData } = props
		axios.get(`${basePath}/list`)
			.then(({ data }) => {
				if (data['error']) console.log('error fetching service data', data['error'])
				setServicesData(data['data']['ServiceData'])
			})
			.catch(err => {
				throw new Error('error fetching service data', err)
			})
	}
	render() {
		return null
	}
}

export default servicesContainer(FetchServicesData)
