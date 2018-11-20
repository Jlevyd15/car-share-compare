import React, { Component, Fragment } from 'react'
// import { getMessage } from '../helper/messages'
import { Section } from '../components/Section/Section'
import { Box } from '../components/Box/Box'
import MasonryCards from '../components/MasonryCards/MasonryCards'
// import Popup from '../components/Popup/Popup'
import { Image } from '../components/Image/Image'
// import { popupContainer } from '../containers/popupContainer'
import { servicesContainer } from '../containers/servicesContainer'
import { routerContainer } from '../containers/routerContainer'
import { routes } from '../../project.config'

export class Detail extends Component {
	constructor() {
		super()
		this.state = { 
			loading: true }
	}



	getServiceIdByRoute = () => {
		const { router: { pathname } } = this.props
		return routes.detail.links.reduce((accum, obj) => { return obj['route'] === pathname ? accum = obj['id'] : accum }, '')
	}
	getServiceDataById = () => {
		const { services } = this.props
		const serviceId = this.getServiceIdByRoute()
		const selectedService = services.getIn([serviceId, 'data'])
		console.log('selectedService ', selectedService)
		return selectedService
	}

	render() {
		const { name = '', img = '' } = routes.detail.links.filter(link => this.props.router.pathname === link['route'])[0]
		console.log(name, img)
		return (
			<Fragment>
				<Section style="three" maxWidthContainer={true}>
					<div style={{ paddingTop: '50px' }}>
						<Box styles={{ justifyContent: 'space-around' }} classes={['box', 'center', 'column', 'bottom-spacer']}>
							<h1>{name}</h1>
							<Box classes={['box', 'center', 'column', 'bottom-spacer']}>
								<Image imageSrc={img} altText={`${name} Logo`} classes={['xx-large']} />
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