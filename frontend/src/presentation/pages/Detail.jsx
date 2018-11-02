import React, { Component, Fragment } from 'react'
// import { getMessage } from '../helper/messages'
import { Section } from '../components/Section/Section'
import { Box } from '../components/Box/Box'
import MasonryCards from '../components/MasonryCards/MasonryCards'
// import Popup from '../components/Popup/Popup'
// import { popupContainer } from '../containers/popupContainer'
import { servicesContainer } from '../containers/servicesContainer'
import { routerContainer } from '../containers/routerContainer'

export class Detail extends Component {
	constructor() {
		super()
		this.state = { loading: true }
	}

	render() {
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
						<MasonryCards>{this.props.services}</MasonryCards>
					</Box>
				</Section>
			</Fragment>
		)
	}
}

export default routerContainer(servicesContainer(Detail))