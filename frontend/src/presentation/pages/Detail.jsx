import React, { Component, Fragment } from 'react'
// import { getMessage } from '../helper/messages'
import { Section } from '../components/Section/Section'
import { Box } from '../components/Box/Box'
import MasonryCards from '../components/MasonryCards/MasonryCards'
// import Popup from '../components/Popup/Popup'
// import { popupContainer } from '../containers/popupContainer'
import { servicesContainer } from '../containers/servicesContainer'
import { routerContainer } from '../containers/routerContainer'
import { routes } from '../../project.config'

export class Detail extends Component {
	constructor() {
		super()
		this.state = { loading: true }
	}

	getServiceIdByRoute = () => {
		const { router: { pathname } } = this.props
		return routes.detail.links.reduce((accum, obj) => { return obj['route'] === pathname ? accum = obj['id'] : accum }, '')
	}
	getServiceDataById = () => {
		const { services } = this.props
		const serviceId = this.getServiceIdByRoute()
		// console.log('id', serviceId)
		// console.log('services ', services)
		// debugger // eslint-disable-line
		const selectedService = services.get(serviceId)
		return selectedService
	}

	render() {
		// console.log('selected service data', this.getServiceDataById())
		
		return (
			<Fragment>
				<Section style="three" maxWidthContainer={true}>
					<div style={{ paddingTop: '50px' }}>
						<Box styles={{ justifyContent: 'space-around' }} classes={['box', 'center', 'row', 'bottom-spacer']}>
							<Box classes={['box', 'center', 'column', 'bottom-spacer']}>
								{/* <Image imageSrc={} altText="steering wheel" classes={['medium']} /> */}
							</Box>
						</Box>
					</div>
					<Box styles={{ justifyContent: 'space-around' }} classes={['box', 'center', 'row', 'bottom-spacer']}>
						<MasonryCards>{this.getServiceDataById()}</MasonryCards>
					</Box>
				</Section>
			</Fragment>
		)
	}
}

export default routerContainer(servicesContainer(Detail))